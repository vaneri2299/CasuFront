import React, { useEffect, useState } from "react";
import {
  Breadcrumbs,
  CardMedia,
  Divider,
  Grid,
  Link,
  Rating,
  Stack,
  Tab,
  TextField,
  Typography,
  Button,
  Card,
} from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./styles.css";
import { Box } from "@mui/system";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import { getProducto } from "../../api/product";

const DetalleProducto = () => {
  const params = useParams();

  const [producto, setProducto] = useState();
  const [cantidadProducto, setCantidadProducto] = useState(0);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const id = params.id;
        const response = await getProducto(id);
        setProducto(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    cargarProducto();
  }, []);

  return (
    <div style={{ marginTop: "80px", marginInline: "16px" }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="medium" />}
      >
        <Link color="inherit" component={NavLink} to="/">
          Inicio
        </Link>
        <Link color="inherit" component={NavLink} to="/productos">
          Productos
        </Link>
        <Typography color="textPrimary">{producto?.nombre}</Typography>
      </Breadcrumbs>
      <Grid container spacing={2} mt={1} mb={2}>
        <Grid item md={5}>
          <Card
            style={{ backgroundColor: "#FFF9E5", border: "none" }}
            variant="outlined"
          >
            <CardMedia
              component="img"
              height="400"
              image={`${import.meta.env.VITE_API_URL}/assets/${
                producto?.imagen
              }`}
              onError={(e) => {
                e.target.src = `${
                  import.meta.env.VITE_API_URL
                }/assets/defecto.jpg`;
              }}
              style={{
                objectFit: "contain",
              }}
            />
          </Card>
        </Grid>
        <Grid item md={6}>
          <Typography color="textPrimary" variant="h5">
            {producto?.nombre}
          </Typography>
          <Typography color="textSecondary" variant="h6" mb={3}>
            {producto?.precio}$
          </Typography>
          {/* <Stack direction="row" mb={2} mt={1}>
            <Rating name="read-only" value={3} readOnly />
            <Divider
              orientation="vertical"
              flexItem
              color="black"
              style={{ marginInline: "8px" }}
            />
            <Typography color="textSecondary" variant="subtitle1">
              5 reseñas
            </Typography>
          </Stack> */}
          <Typography
            color="primarySecondary"
            variant="body1"
            component="p"
            mb={5}
          >
            {producto?.descripcion}
          </Typography>
          <Stack direction="row" spacing={3} mb={2} mt={2}>
            <TextField
              type="number"
              size="small"
              className="Detalle"
              style={{ width: "200px" }}
              value={cantidadProducto}
              onChange={(e) => setCantidadProducto(Number(e.target.value))}
              InputProps={{
                startAdornment: (
                  <Button
                    disabled={cantidadProducto <= 0}
                    variant="text"
                    sx={{ padding: 0 }}
                    size="small"
                    onClick={() => setCantidadProducto(cantidadProducto - 1)}
                  >
                    -
                  </Button>
                ),
                endAdornment: (
                  <Button
                    variant="text"
                    size="small"
                    sx={{ padding: 0 }}
                    onClick={() => setCantidadProducto(cantidadProducto + 1)}
                  >
                    +
                  </Button>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              //   onClick={"handleAgregar"}
              size="small"
            >
              Añadir al carrito
            </Button>
          </Stack>
          <Divider flexItem color="black" style={{ marginBottom: "8px" }} />
          <Stack direction="row" spacing={1} mt={2}>
            <Typography variant="subtitle1" component="p">
              Categoría:
            </Typography>
            {/* <Divider
              flexItem
              color="black"
              orientation="vertical"
            //   style={{ marginTop: "8px" }}
            /> */}
            <Typography variant="subtitle1" component="p">
              {producto?.categoria.nombre}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} mb={4}>
            <Typography variant="subtitle1" component="p">
              Disponible:
            </Typography>

            <Typography variant="subtitle1" component="p">
              {producto?.cantidad}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Divider flexItem color="black" style={{ marginBottom: "8px" }} />
      <Box
        sx={{
          width: "80%",
          typography: "body1",
          marginInline: "auto",
        }}
      >
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              textColor="primary"
              indicatorColor="primary"
              sx={{
                "& .MuiTabs-flexContainer": {
                  justifyContent: "center",
                },
              }}
            >
              <Tab label="Información adicional" value="1" />
              {/* <Tab label="Reseñas" value="2" /> */}
            </TabList>
          </Box>
          <TabPanel value="1">
            <>
              <Typography variant="body1" component="p">
              {producto?.informacion || "Este producto no tiene información adicional"}
              </Typography>
            </>
          </TabPanel>
          {/* <TabPanel value="2">Item Two</TabPanel> */}
        </TabContext>
      </Box>
    </div>
  );
};

export default DetalleProducto;
