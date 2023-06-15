import React, { useState } from "react";
import {
  Grid,
  Paper,
  Button,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  OutlinedInput,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import ReporteClientes from "./ReporteClientes";
// import ReporteCategorias from './ReporteCategorias';
// import ReporteProductos from './ReporteProductos';
// import ReporteCompras from './ReporteCompras';
// import ReporteVisitas from './ReporteVisitas';
import { PDFDownloadLink } from "@react-pdf/renderer";
import InformePDF from "./InformePDF";
import moment from "moment";


function Reportes() {
  const [informeSeleccionado, setInformeSeleccionado] = useState("");
  const [tipoFecha, setTipoFecha] = useState("");
  const [tipoFijo, setTipoFijo] = useState("");
  const classes = useStyles();
  const [fechaInicio, setFechaInicio] = useState(moment());
  const [fechaFin, setFechaFin] = useState(moment());
  const [periodoFijo, setPeriodoFIjo] = useState(moment().format("YYYY"));

  const handleInformeChange = (event) => {
    setInformeSeleccionado(event.target.value);
    // props.onInformeSeleccionado(event.target.value);
  };

  const mostrarComponente = () => {
    switch (informeSeleccionado) {
      case 'clientes':
        return <ReporteClientes />;
    //   case 'b':
    //     return <ComponenteB />;
    //   case 'c':
    //     return <ComponenteC />;
    //   default:
    //     return null;
    }
  };

  const handleGenerarPDF = () => {
    // Lógica para generar el PDF con los informes seleccionados
  };


  return (
    <div className={classes.root}>
      <Typography variant="h4" align="center" sx={{ mt: 15, mb: 3 }}>
        Reportes
      </Typography>
      <Grid container spacing={2} sx={{ pr: 3, pl: 3 }}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="informe-selector-label">
              Seleccione un informe
            </InputLabel>
            <Select
              label="Seleccione un informe"
              labelId="informe-selector-label"
              id="informe-selector"
              value={informeSeleccionado}
              onChange={handleInformeChange}
              variant="outlined"
            >
              <MenuItem value="clientes">Clientes</MenuItem>
              <MenuItem value="categorias">Categorías</MenuItem>
              <MenuItem value="top10">Productos más vendidos</MenuItem>
              <MenuItem value="bottom10">Productos menos vendidos</MenuItem>
              <MenuItem value="tiempoMas">
                Tiempo más concurridos para las compras
              </MenuItem>
              <MenuItem value="tiempoMenos">
                Tiempo menos concurridos para las compras
              </MenuItem>
              <MenuItem value="relacion">
                Relación de visitas vs. Compras efectivas
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={3}>
          <FormControl fullWidth>
            <InputLabel id="informe-selector-label">
              Seleccione tipo de fecha
            </InputLabel>
            <Select
              label="Seleccione tipo de fecha"
              labelId="informe-selector-label"
              id="informe-selector"
              value={tipoFecha}
              onChange={(e) => setTipoFecha(e.target.value)}
              variant="outlined"
            >
              <MenuItem value="rango">Rango</MenuItem>
              <MenuItem value="fijo">Fijo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {tipoFecha == "fijo" ? (
          <>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel id="informe-selector-label">
                  Reportes por
                </InputLabel>
                <Select
                  label=" Reportes por"
                  labelId="informe-selector-label"
                  id="informe-selector"
                  value={tipoFijo}
                  onChange={(e) => {
                    console.log(tipoFecha);
                    setTipoFijo(e.target.value);
                  }}
                  variant="outlined"
                >
                  <MenuItem value="date">Día</MenuItem>
                  <MenuItem value="month">Mes</MenuItem>
                  <MenuItem value="text">Año</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Elija el {tipoFijo == "date" ? "día" : tipoFijo ==="month" ? "mes" : "año"}</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={tipoFijo}
                  value={periodoFijo}
                  onChange={(e) => setPeriodoFIjo(e.target.value)}
                  label={`Elija el ${tipoFijo == "date" ? "día" : tipoFijo ==="month" ? "mes" : "año"}`}
                />
              </FormControl>
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Fecha inicio</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="date"
                  value={fechaInicio}
                  onChange={(e) => setFechaInicio(e.target.value)}
                  label="Fecha inicio"
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={2}>
              <FormControl fullWidth>
                <InputLabel>Fecha fin</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type="date"
                  value={fechaFin}
                  onChange={(e) => setFechaFin(e.target.value)}
                  label="Fecha fin"
                />
              </FormControl>
            </Grid>
          </>
        )}
        {mostrarComponente()}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGenerarPDF}
            >
              <PDFDownloadLink document={<InformePDF />} fileName="informe.pdf">
              {({ blob, url, loading, error }) =>
                loading ? "Generando PDF..." : "Descargar PDF"
              }
            </PDFDownloadLink>
            </Button>
            
          </Paper>
        </Grid> */}
        {/* <Grid item xs={12}>
          <ReporteCategorias fechaInicio={fechaInicio} fechaFin={fechaFin} />
        </Grid>
        <Grid item xs={12}>
          <ReporteProductos fechaInicio={fechaInicio} fechaFin={fechaFin} />
        </Grid>
        <Grid item xs={12}>
          <ReporteCompras fechaInicio={fechaInicio} fechaFin={fechaFin} />
        </Grid>
        <Grid item xs={12}>
          <ReporteVisitas fechaInicio={fechaInicio} fechaFin={fechaFin} />
        </Grid>  */}
      </Grid>
    </div>
  );
}

export default Reportes;
