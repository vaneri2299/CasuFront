import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import banner from "../../assets/cuenta.jpg";
import {
  Breadcrumbs,
  Paper,
  Typography,
  Link,
  Grid,
  Stack,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  Button,
  FormControl,
  TextField,
} from "@mui/material";
import "./styles.css";

const Checkout = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  const [selectedValue, setSelectedValue] = useState("");
  const options = [
    { value: 0, label: "Tarjeta de Crédito" },
    { value: 1, label: "Criptomonedas" },
  ];
  const [productos, setProductos] = useState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const existingProducts = JSON.parse(localStorage.getItem("productsCasu"));
    setProductos(existingProducts);
    let totalPrecio = 0;
    existingProducts?.forEach((product) => {
      totalPrecio += product.price * product.quantity;
    });
    setTotal(totalPrecio);
  }, []);
  return (
    <>
      <Paper
        style={{
          backgroundImage: `url(${banner})`,
          height: 300,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
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
        <Typography variant="h3">Checkout</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={NavLink} to="/">
            Inicio
          </Link>
          <Typography color="textPrimary">Checkout</Typography>
        </Breadcrumbs>
      </Paper>
      <Typography
        color="textPrimary"
        component="h1"
        variant="h5"
        paddingInline={4}
        marginBottom={2}
      >
        Detalles de Facturación
      </Typography>
      <Grid container marginBottom={5} justifyContent="space-around">
        <Grid container item md={6} xs={12} spacing={1}>
          <Grid item md={6}>
            <FormControl fullWidth size="small">
              <InputLabel
                id="my-select-label"
                style={{
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                }}
              >
                Selecciona un método de pago
              </InputLabel>
              <Select
                size="small"
                variant="outlined"
                labelId="my-select-label"
                label="Selecciona un método de pago"
                value={selectedValue}
                onChange={(event) => setSelectedValue(event.target.value)}
              >
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} mt={3}>
            <InputLabel id="my-select-label2">
              Complete el siguiente formulario
            </InputLabel>
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              id="outlined-email-input"
              label="Correo electrónico"
              type="email"
              size="small"
              variant="outlined"
              // autoComplete="current-password"
            />
          </Grid>
          <Grid item md={3}>
            <TextField
              fullWidth
              id="outlined-pin-input"
              label="Pin"
              type="password"
              size="small"
              variant="outlined"
              // autoComplete="current-password"
            />
          </Grid>
          <Grid item md={3}>
            <TextField
              fullWidth
              id="outlined-disabled"
              label="Monto"
              type="text"
              size="small"
              variant="outlined"
              disabled
              value={`$${total}`}
              // autoComplete="current-password"
            />
          </Grid>
          <Grid item md={12}>
            <Button
              variant="contained"
              color="primary"
              //   onClick={"handleAgregar"}
              size="small"
            >
              Finalizar compra
            </Button>
          </Grid>
        </Grid>
        <Grid container item md={5} xs={12} justifyContent="space-between">
          <Grid container md={8}>
            <Typography color="textPrimary" component="h1" variant="h5">
              Productos
            </Typography>
          </Grid>
          <Grid container md={4}>
            <Typography color="textPrimary" component="h1" variant="h5">
              Subtotal
            </Typography>
          </Grid>
          {productos?.length > 0 ? (
            productos.map((item) => (
              <>
                <Grid item md={4}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography color="textSecondary" variant="body">
                      {item.name}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item md={1}>
                  <Typography variant="body">x</Typography>
                </Grid>
                <Grid item md={3}>
                  <Typography variant="body">{item.quantity}</Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant="body">
                    ${item.quantity * item.price}
                  </Typography>
                </Grid>
              </>
            ))
          ) : (
            <Grid item md={12}>
              <Typography variant="body1">
                No hay productos agregados
              </Typography>
            </Grid>
          )}
          <Grid item xs={12}>
            <Divider
              flexItem
              color="black"
              style={{ marginBottom: "16px", marginTop: "16px" }}
            />
          </Grid>
          <Grid item md={8}>
            <Typography color="textPrimary" variant="h6">
              Total
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Typography color="#B88E2F" variant="h6" fontWeight="bold">
              ${total}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;
