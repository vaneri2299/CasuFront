import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material";
import { AccountCircle, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  crearUsuario,
  enviarCodigo,
  existUser,
  userHash,
  verificarCodigo,
} from "../../api/user";
import NotificacionContainer from "../../components/NotificacionContainer";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs";
import { useDispatch } from "react-redux";
import { setAdmin, setAuthToken, setIsLoged } from "../../state/actions";

const Cuenta = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUrl = location.pathname;
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [email, setEmail] = useState("");
  const [emailI, setEmailI] = useState("");
  const [passwordI, setPasswordI] = useState("");
  const [codigo, setCodigo] = useState("");
  const [codigoEnv, setCodigoEnv] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [textButton, setTextButton] = useState("Enviar código");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe ingresar un correo electrónico válido")
        .required("El correo electrónico es requerido"),
    }),
    onSubmit: (values) => {
      setIsLoading(true);
      !codigoEnv ? verifyUser(email) : verifyCod(email, codigo);
    },
  });

  const formik2 = useFormik({
    initialValues: {
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .required("La contraseña es requerida")
        .min(8, "La contraseña debe tener al menos 8 caracteres.")
        .matches(
          /^(?=.*[!@#$%^&*.])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#$%^&*.]{8,}$/,
          "Debe incluir una letra mayúscula, una letra minúscula, un número y al menos un carácter especial."
        ),
    }),
    onSubmit: (values) => {
      verificarPassword();
    },
  });

  const verifyUser = async (email, codigo) => {
    try {
      const response = await existUser(email);
      console.log(response.s);
      if (response.s === 1) {
        enviarCod(email);
      } else {
        toast.error(response.response.data.mensaje);
        setTextButton("Enviar código");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const enviarCod = async (email) => {
    try {
      setTextButton("Enviando código...");
      const response = await enviarCodigo(email);
      if (response.s === 1) {
        toast.success(response.mensaje);
        setTextButton("Ingresar código");
        setCodigoEnv(true);
      } else {
        toast.error(response.response.data.mensaje);
        setTextButton("Enviar código");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCod = async (email, codigo) => {
    try {
      const response = await verificarCodigo(email, codigo);
      console.log(response);
      if (response.s === 1) {
        toast.success(response.mensaje);
        setOpenModal(true);
      } else {
        toast.error(response.response.data.mensaje);
        setTextButton("Ingresar código");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    formik.handleChange(event);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    formik2.handleChange(event);
  };

  const handleChangeCodigo = (event) => {
    setCodigo(event.target.value);
    formik.handleChange(event);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const verificarPassword = async () => {
    if (password !== password2) {
      toast.error(
        "Las contraseñas no coinciden. Por favor, asegúrate de que sean iguales."
      );
    } else {
      try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = bcrypt.hashSync(password, salt);
        console.log(email, hashPassword);
        const response = await crearUsuario(email, hashPassword);
        if (response.s === 1) {
          toast.success(response.mensaje);
        } else {
          toast.error(response.response.data.mensaje);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setEmail("");
        setCodigo("");
        setPassword("");
        setPassword2("");
        setCodigoEnv(false);
        setTextButton("Enviar código");
        setShowPassword(false);
        setShowPassword2(false);
        setOpenModal(false);
      }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      iniciarSesion();
    }
  };

  const iniciarSesion = async () => {
    if (emailI === "" || passwordI === "") {
      toast.error("Complete los datos para continuar");
      return;
    }
    setIsLoading2(true);
    try {
      const response = await userHash(emailI, passwordI);
      if (response.s === 1) {
        toast.success(response.mensaje);
        const token = response.data.token;
        console.log(response.data.isAdmin);
        dispatch(setIsLoged(true));
        dispatch(setAuthToken(token));
        dispatch(setAdmin(response.data.isAdmin));
        localStorage.setItem("casuToken", token);
        localStorage.setItem("casuAdmin", response.data.isAdmin);
        setEmailI("");
        setPasswordI("");
        setTimeout(() => {
          navigate("/productos");
        }, 1500);
      } else {
        toast.error("Datos incorrectos");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading2(false);
    }
  };
  const [formSubmitted, setFormSubmitted] = useState(false);
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

      <Grid container spacing={9} justifyContent="center" marginBottom={5}>
        <Grid container item md={4} xs={12} direction="column" spacing={3}>
          <Grid item>
            <Typography color="textPrimary" component="h1" variant="h4">
              Iniciar sesión
            </Typography>
          </Grid>
          <Grid item fullWidth={true}>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel htmlFor="outlined-adornment-email-sesion">
                {"Correo electrónico"}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-sesion"
                name="emailI"
                type="email"
                value={emailI}
                autoComplete
                onChange={(e) => setEmailI(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                }
                label={"Correo electrónico"}
                required
              />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl variant="outlined" fullWidth={true}>
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={passwordI}
                onChange={(e) => setPasswordI(e.target.value)}
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
                label="Contraseña"
                onKeyPress={handleKeyPress}
              />
            </FormControl>
          </Grid>
          <Grid item textAlign="center">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isLoading2}
              size="small"
              onClick={() => iniciarSesion()}
            >
              Iniciar sesión
            </Button>
          </Grid>
          <Grid item textAlign="center">
            <Link>¿Olvidaste la contraseña?</Link>
          </Grid>
        </Grid>
        {/* ********************** REGISTRAR ******************* */}
        <Grid container item md={4} xs={12} direction="column" spacing={3}>
          <Grid item>
            <Typography color="textPrimary" component="h1" variant="h4" mb={3}>
              Registrar
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit}>
            <Grid item>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-email-register">
                  {"Correo electrónico"}
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email-register"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton edge="end">
                        <AccountCircle />
                      </IconButton>
                    </InputAdornment>
                  }
                  label={"Correo electrónico"}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  disabled={codigoEnv}
                />
                {!formSubmitted && (
                  <FormHelperText id="outlined-adornment-email-register">
                    Se enviará un enlace para establecer una nueva contraseña a
                    su dirección de correo electrónico. <br />
                    Se utilizarán sus datos personales para respaldar su
                    experiencia en todo este sitio web, para administrar el
                    acceso a su cuenta y para otros fines descritos en nuestra{" "}
                    <Link component={NavLink} to="/politica_privacidad">
                      política de privacidad
                    </Link>
                  </FormHelperText>
                )}
                {formSubmitted && formik.errors.email && (
                  <FormHelperText id="outlined-adornment-email-register">
                    {formik.touched.email && formik.errors.email}
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            {codigoEnv && (
              <Grid item mt={2}>
                <FormControl variant="outlined" fullWidth>
                  <InputLabel htmlFor="outlined-adornment-codigo-register">
                    {"Código de verificación"}
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-codigo-register"
                    name="codigo"
                    type="text"
                    value={codigo}
                    onChange={handleChangeCodigo}
                    label={"Código de verificación"}
                  />
                </FormControl>
              </Grid>
            )}

            <Grid item textAlign="center" mt="16px">
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="small"
                disabled={isLoading}
                onClick={() => {
                  setFormSubmitted(true);
                }}
              >
                {textButton}
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Dialog
        open={openModal}
        spacing={2}
        onClose={"handleClose"}
        BackdropProps={{
          sx: { backdropFilter: "blur(4px)" },
        }}
        maxWidth="sm"
      >
        <form onSubmit={formik2.handleSubmit}>
          <DialogTitle>Registrar cuenta</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Por favor, ingrese su contraseña para registrar su cuenta.
            </DialogContentText>
            <FormControl variant="outlined" fullWidth>
              <TextField
                fullWidth
                margin="dense"
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                label="Contraseña"
                value={password}
                onChange={handleChangePassword}
                error={
                  formik2.touched.password && Boolean(formik2.errors.password)
                }
                helperText={formik2.touched.password && formik2.errors.password}
                InputProps={{
                  endAdornment: (
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
                  ),
                }}
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <TextField
                fullWidth
                margin="dense"
                id="password2"
                type={showPassword2 ? "text" : "password"}
                onChange={(e) => setPassword2(e.target.value)}
                value={password2}
                variant="outlined"
                label="Confirmar contraseña"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword2 ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Registrarse</Button>
          </DialogActions>
        </form>
      </Dialog>
      <NotificacionContainer />
    </>
  );
};

export default Cuenta;
