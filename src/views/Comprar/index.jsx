import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import banner from "../../assets/banner_shop.jpg";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  Breadcrumbs,
  Paper,
  Typography,
  Link,
  FormControl,
  Select,
  MenuItem,
  TextField,
  Grid,
  Menu,
  FormControlLabel,
  Checkbox,
  Pagination,
  Divider,
  Container,
} from "@mui/material";
import ProductCard from "../../components/ProductCard";
import { Spinner } from "react-bootstrap";
import { getProductos } from "../../api/product";
import { toast } from "react-toastify";
import NotificacionContainer from "../../components/NotificacionContainer";

const Comprar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(2)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "15ch",
      },
    },
  }));

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderColor: "black",
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("lg")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const options = ["Cactus", "Suculentas", "Material de Jardinería"];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const selectedCategoriesList = checked
      ? [...checked, name]
      : checked.filter((category) => category !== name);
    const newSelectedCategories = {};
    selectedCategoriesList.forEach((category) => {
      newSelectedCategories[category] = true;
    });
    setSelectedCategories(newSelectedCategories);
  };

  const handleCheckboxClick = (option) => (event) => {
    event.stopPropagation();
    const currentIndex = checked.indexOf(option);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(option);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    const selected = {};
    newChecked.forEach((category) => {
      selected[category] = true;
    });
    setSelectedCategories(selected);
  };

  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState();
  const [orden, setOrden] = useState("nombre_asc");
  const [selectedCategories, setSelectedCategories] = useState({});
  const [checked, setChecked] = useState([]);

  const handleOrdenChange = (event) => {
    setOrden(event.target.value);
  };

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const response = await getProductos();
        if (response.s === 1) {
          toast.success(response.mensaje);
          setProductos(response.data);
        } else {
          toast.error(response.mensaje);
        }
      } catch (error) {
        toast.error("Error inesperado");
      } finally {
        setLoading(false);
      }
    };
    cargarProductos();
  }, []);

  const ordenarProductos = (productos) => {
    if (orden === "precio_asc") {
      productos = productos?.sort((a, b) => a.precio - b.precio);
    } else if (orden === "precio_desc") {
      productos = productos?.sort((a, b) => b.precio - a.precio);
    } else if (orden === "nombre_asc") {
      productos = productos?.sort((a, b) => a.nombre.localeCompare(b.nombre));
    } else if (orden === "nombre_desc") {
      productos = productos?.sort((a, b) => b.nombre.localeCompare(a.nombre));
    }

    const selectedCategoriesList = Object.keys(selectedCategories);
    console.log(selectedCategoriesList);
    if (selectedCategoriesList.length === 0) {
      return productos; // si no hay categorías seleccionadas, devuelve todos los productos
    }

    return productos.filter((producto) => {
      return selectedCategoriesList.includes(producto.categoria);
    });
  };

  useEffect(() => {
    console.log("sadas", selectedCategories);
    ordenarProductos(productos);
  }, [selectedCategories]);

  return (
    <>
      <Paper
        style={{
          backgroundImage: `url(${banner})`,
          height: 300,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "24px",
        }}
        mb="3"
      >
        <Typography variant="h3" style={{ paddingTop: "48px" }}>
          &#x1F335;
        </Typography>
        <Typography variant="h3">Productos</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={NavLink} to="/">
            Inicio
          </Link>
          <Typography color="textPrimary">Productos</Typography>
        </Breadcrumbs>
      </Paper>

      <Grid
        container
        spacing={1}
        alignItems="center"
        backgroundColor="#FAF4F4"
        justifyContent="center"
        marginBottom={1}
        paddingBottom={1}
      >
        <Grid item>
          <IconButton onClick={handleClick}>
            <FilterAltIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {options.map((option) => (
              <MenuItem key={option} onClick={handleCheckboxClick(option)}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={selectedCategories[option]}
                      onChange={handleCheckboxChange}
                      name={option}
                    />
                  }
                  label={option}
                />
              </MenuItem>
            ))}
          </Menu>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          color="black"
          style={{ marginTop: "8px" }}
        />
        <Grid item>
          <Typography variant="subtitle1">
            Mostrando 5 de 5 productos
          </Typography>
        </Grid>

        <Grid item md={2} />
        <Grid item>
          <Typography variant="subtitle1">Mostrar</Typography>
        </Grid>
        <Grid item md={1}>
          <TextField
            fullWidth
            id="fullWidth"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  // borderColor: "#FBEBB5",
                },
            }}
          />
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">Ordenar por</Typography>
        </Grid>
        <Grid item>
          <FormControl>
            <Select
              style={{ width: 214 }}
              size="small"
              value={orden}
              onChange={handleOrdenChange}
            >
              <MenuItem value="precio_asc">Precio (ascendente)</MenuItem>
              <MenuItem value="precio_desc">Precio (descendente)</MenuItem>
              <MenuItem value="nombre_asc">Nombre (ascendente)</MenuItem>
              <MenuItem value="nombre_desc">Nombre (descendente)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={1} />
        <Grid item>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Buscar..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        paddingInline={6}
        marginBottom={2}
        marginInline="auto"
      >
        {loading ? (
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              marginInline: "auto",
            }}
          >
            <Spinner animation="border" variant="primary" />
          </Container>
        ) : (
          <>
            {ordenarProductos(productos)?.map((item) => (
              <Grid item md={3} key={item._id}>
                <ProductCard
                  name={item.nombre}
                  imageUrl={item.imagen}
                  price={item.precio}
                  url={currentUrl + "/" + item._id}
                  maxCantidad={item.cantidad}
                />
              </Grid>
            ))}
          </>
        )}

        <Grid item md={12}>
          <Pagination
            count={3}
            variant="outlined"
            shape="rounded"
            sx={{
              "& .MuiPagination-ul": { justifyContent: "center" },
            }}
          />
        </Grid>
      </Grid>
      <NotificacionContainer />
    </>
  );
};

export default Comprar;
