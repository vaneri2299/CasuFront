import React from 'react';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  subtitle: {
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
  },
}));

const PrivacyPolicy = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>Política de privacidad</Typography>
      <Typography variant="body1" className={classes.subtitle}>Información que recopilamos</Typography>
      <Typography variant="body2">
        Recopilamos información personal como tu nombre, dirección de correo electrónico y número de teléfono cuando te registras en nuestro sitio web o cuando realizas una compra. También podemos recopilar información sobre tus hábitos de navegación en nuestro sitio web a través de cookies y otras tecnologías similares.
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>Cómo utilizamos tu información</Typography>
      <Typography variant="body2">
        Utilizamos tu información para mejorar tu experiencia en nuestro sitio web, para procesar tus pedidos y pagos, y para comunicarnos contigo sobre nuestros productos y servicios. También podemos utilizar tu información para fines de análisis y marketing.
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>Cómo protegemos tu información</Typography>
      <Typography variant="body2">
        Nos tomamos muy en serio la seguridad de tu información personal y utilizamos medidas de seguridad técnicas y organizativas para protegerla contra el acceso no autorizado, la divulgación y la destrucción accidental o ilegal.
      </Typography>
      <Typography variant="body1" className={classes.subtitle}>Cómo puedes acceder y controlar tu información</Typography>
      <Typography variant="body2">
        Puedes acceder y controlar tu información personal en cualquier momento a través de tu cuenta en nuestro sitio web. También puedes contactarnos para solicitar la eliminación o modificación de tu información personal.
      </Typography>
    </div>
  );
};

export default PrivacyPolicy;