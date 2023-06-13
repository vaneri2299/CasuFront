import React from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import { styled } from "@mui/material/styles";
import succulent from "../../assets/shop3.png";
import cactus from "../../assets/shop1.png";
import gardenTools from "../../assets/herramientas.jpg";

const AboutUs = () => {
  const Section = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: "#fff",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.05)",
    borderRadius: "10px",
  }));

  const Item = styled(Grid)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    padding: theme.spacing(2),
  }));

  return (
    <>
      <Typography variant="h4" align="center" sx={{ my: 4 }}>
        Acerca de nosotros
      </Typography>
      <Section container spacing={4}>
        <Item item xs={12} md={4}>
          <Avatar
            src={succulent}
            alt="Succulent"
            sx={{ width: 120, height: 120 }}
          />
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            Nuestra pasión por las suculentas
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            En nuestra tienda encontrarás una amplia variedad de suculentas de
            todos los tamaños, colores y formas. Nos apasiona cuidar de estas
            plantas y queremos compartir esa pasión contigo.
          </Typography>
        </Item>
        <Item item xs={12} md={4}>
          <Avatar
            src={cactus}
            alt="Cactus"
            sx={{ width: 120, height: 120 }}
          />
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            Nuestros cactus únicos
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Además de suculentas, también contamos con una amplia variedad de
            cactus, incluyendo especies únicas que no encontrarás en otros
            lugares. Todos nuestros cactus son cuidadosamente seleccionados y
            cultivados para asegurar su calidad.
          </Typography>
        </Item>
        <Item item xs={12} md={4}>
          <Avatar
            src={gardenTools}
            alt="Herramientas de jardín"
            sx={{ width: 120, height: 120 }}
          />
          <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
            Herramientas de jardín de alta calidad
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Además de plantas, también contamos con una amplia variedad de
            herramientas de jardín de alta calidad para ayudarte a cuidar y
            cultivar tus plantas. Desde herramientas básicas como tijeras y
            palas hasta equipos especializados, tenemos todo lo que necesitas
            para mantener tu jardín en perfectas condiciones.
          </Typography>
        </Item>
      </Section>
    </>
  );
};

export default AboutUs;