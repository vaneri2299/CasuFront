import React, { useState } from "react";
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
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Grid,
  Menu,
  FormControlLabel,
  Checkbox,
  Pagination,
  Divider,
} from "@mui/material";
import ProductCard from "../../components/ProductCard";

const Comprar = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
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

  const options = ["Option 1", "Option 2", "Option 3"];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckboxChange = (event) => {
    setFilters({ ...options, [event.target.name]: event.target.checked });
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
  };

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
                      // checked={options.filter3}
                      onChange={handleCheckboxChange}
                      name="filter3"
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
              defaultValue="precio_asc"
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
      <Grid container spacing={4} paddingInline={6} marginBottom={2}>
        <Grid item md={3}>
          <ProductCard
            name="Producto 1"
            imageUrl="shop1.png"
            price="19.99"
            url={currentUrl + "/id=1"}
          />
        </Grid>
        <Grid item md={3}>
          <ProductCard name="Producto 2" imageUrl="shop2.png" price="19.99" />
        </Grid>
        <Grid item md={3}>
          <ProductCard name="Producto 3" imageUrl="shop3.png" price="19.99" />
        </Grid>
        <Grid item md={3}>
          <ProductCard
            name="Producto 4"
            imageUrl="novedades.png"
            price="19.99"
          />
        </Grid>
        <Grid item md={3}>
          <ProductCard name="Producto 5" imageUrl="shop2.png" price="19.99" />
        </Grid>
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
    </>
  );
};

export default Comprar;
