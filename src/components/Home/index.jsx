import { Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import "./styles.css";
import sucuInicio from "../../assets/home1.png";
import shop1 from "../../assets/shop1.png";
import shop2 from "../../assets/shop2.png";
import shop3 from "../../assets/shop3.png";
import novedades from "../../assets/novedades.png";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Grid container spacing={8}>
        <Grid
          container
          spacing={1}
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "100px 0px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              style={{ fontWeight: "bold", textAlign: "justify" }}
            >
              Ponte en contacto con la naturaleza. Adorna tus espacios con la
              belleza de nuestros cactus y suculentas.
            </Typography>
            <Link className="link-dark" style={{ fontWeight: "bold" }}>
              ¡Comprar ahora!
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={sucuInicio} className="imgInicio"></img>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{
            justifyContent: "space-around",
            alignItems: "flex-end",
            padding: "20px 0px",
            backgroundColor: "#FAF4F4",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={3}>
            <img src={shop1} className="imgInicio"></img>
            <Link className="link-dark" style={{ fontWeight: "bold" }}>
              Ver detalles
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <img src={shop3} className="imgInicio"></img>
            <Link className="link-dark" style={{ fontWeight: "bold" }}>
              Ver detalles
            </Link>
          </Grid>
          <Grid item xs={12} md={3}>
            <img src={shop2} className="imgInicio"></img>
            <Link className="link-dark" style={{ fontWeight: "bold" }}>
              Ver detalles
            </Link>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            // padding: "20px 0px",
            backgroundColor: "#FFF9E5",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={8}>
            <img
              src={novedades}
              className="imgInicio"
              style={{ width: "50%" }}
            ></img>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h3" style={{ fontWeight: "bold" }}>
              Novedades
            </Typography>
            <Button variant="outlined" size="large">
              Ordenar Ahora
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={1}
          style={{
            justifyContent: "space-around",
            alignItems: "center",
            padding: "20px 0px",
            backgroundColor: "#FAF4F4",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} md={12}>
            <Stack spacing={3} justifyContent="center">
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                Novedades
              </Typography>
              <Typography variant="body" style={{ fontWeight: "bold" }}>
                Siguenos en Instagram
              </Typography>
              <Button
                variant="dark"
                color="primary"
                style={{
                  width: "100px",
                  backgroundColor: "#FAF4F4",
                  color: "black",
                  marginInline: "auto",
                }}
              >
                Seguir
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
