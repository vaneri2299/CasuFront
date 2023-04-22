import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import banner from "../../assets/cuenta.jpg";
import IconButton from "@mui/material/IconButton";
import {
  Breadcrumbs,
  Paper,
  Typography,
  Link,
  FormControl,
  InputLabel,
  Grid,
  OutlinedInput,
  InputAdornment,
  Button,
  FormHelperText,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";

const Cuenta = () => {
  const location = useLocation();
  const currentUrl = location.pathname;

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
        <Typography variant="h3">Mi cuenta</Typography>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" component={NavLink} to="/">
            Inicio
          </Link>
          <Typography color="textPrimary">Cuenta</Typography>
        </Breadcrumbs>
      </Paper>

      <Grid
        container
        spacing={9}
        // alignItems="center"
        justifyContent="center"
        marginBottom={5}
        // paddingInline={4}
      >
        <Grid container item md={4} xs={12} direction="column" spacing={3}>
          <Grid item>
            <Typography color="textPrimary" component="h1" variant="h4">
              Iniciar sesión
            </Typography>
          </Grid>
          <Grid item fullWidth>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-email">
                Correo electrónico
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type={"email"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                }
                label="correo electrónico"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </Grid>
          <Grid item textAlign="center">
            <Button
              variant="contained"
              color="primary"
              //   onClick={"handleAgregar"}
              size="small"
            >
              Iniciar sesión
            </Button>
          </Grid>
          <Grid item textAlign="center">
            <Link>¿Olvidaste la contraseña?</Link>
          </Grid>
        </Grid>
        <Grid container item md={4} xs={12} direction="column" spacing={3}>
          <Grid item>
            <Typography color="textPrimary" component="h1" variant="h4">
              Registrar
            </Typography>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-email-register">
                Correo electrónico
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type={"email"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                }
                label="correo electrónico"
              />
              <FormHelperText id="outlined-adornment-email-register">
                Se enviará un enlace para establecer una nueva contraseña a su
                dirección de correo electrónico. <br /> <br />
                Se utilizarán sus datos personales para respaldar su experiencia
                en todo este sitio web, para administrar el acceso a su cuenta y
                para otros fines descritos en nuestra{" "}
                <Link>política de privacidad</Link>
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item textAlign="center">
            <Button
              variant="contained"
              color="primary"
              //   onClick={"handleAgregar"}
              size="small"
            >
              Enviar código
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Cuenta;
