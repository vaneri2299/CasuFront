import React from "react";
import { Typography } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <div style={{ paddingInline: "30px" }}>
      <Typography variant="h4" mt={15} sx={{ marginBottom: 2 }}>
        Política de privacidad
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Información que recopilamos
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Recopilamos información personal como tu nombre, dirección de correo
        electrónico y número de teléfono cuando te registras en nuestro sitio
        web o cuando realizas una compra. También podemos recopilar información
        sobre tus hábitos de navegación en nuestro sitio web a través de cookies
        y otras tecnologías similares.
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Cómo utilizamos tu información
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Utilizamos tu información para mejorar tu experiencia en nuestro sitio
        web, para procesar tus pedidos y pagos, y para comunicarnos contigo
        sobre nuestros productos y servicios. También podemos utilizar tu
        información para fines de análisis y marketing.
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Cómo protegemos tu información
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Nos tomamos muy en serio la seguridad de tu información personal y
        utilizamos medidas de seguridad técnicas y organizativas para protegerla
        contra el acceso no autorizado, la divulgación y la destrucción
        accidental o ilegal.
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Cómo puedes acceder y controlar tu información
      </Typography>
      <Typography variant="body2" mb={15}>
        Puedes acceder y controlar tu información personal en cualquier momento
        a través de tu cuenta en nuestro sitio web. También puedes contactarnos
        para solicitar la eliminación o modificación de tu información personal.
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;
