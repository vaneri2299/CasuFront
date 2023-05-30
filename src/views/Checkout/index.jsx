import React, { useState } from "react";
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
              type="number"
              size="small"
              variant="outlined"
              disabled
              defaultValue={39.98}
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
        <Grid container item md={4} xs={12} justifyContent="space-between">
          <Grid item md={6}>
            <Typography color="textPrimary" component="h1" variant="h5">
              Productos
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography color="textPrimary" component="h1" variant="h5">
              Subtotal
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography color="textSecondary" variant="body">
                Producto 2
              </Typography>
              <Typography variant="body">x</Typography>
              <Typography variant="body">1</Typography>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body">$19.99</Typography>
          </Grid>
          <Grid item md={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <Typography color="textSecondary" variant="body">
                Producto 2
              </Typography>
              <Typography variant="body">x</Typography>
              <Typography variant="body">1</Typography>
            </Stack>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body">$19.99</Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider
              flexItem
              color="black"
              style={{ marginBottom: "16px", marginTop: "16px" }}
            />
          </Grid>
          <Grid item md={6}>
            <Typography color="textPrimary" variant="h6">
              Total
            </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography color="#B88E2F" variant="h6" fontWeight="bold">
              $39.98
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;
