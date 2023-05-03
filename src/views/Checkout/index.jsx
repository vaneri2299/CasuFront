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
} from "@mui/material";
import "./styles.css";

const Checkout = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

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
      >
        Detalles de Facturación
      </Typography>
      <Grid container justifyContent="center" marginBottom={5}>
        <Grid container item md={4} xs={12}>
          <Grid item md={12}>
            <Typography color="textPrimary" component="h1" variant="h5">
              Productos
            </Typography>
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
