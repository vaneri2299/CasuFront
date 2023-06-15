import React, { useState } from "react";
import {
  Paper,
  styled,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  tableCellClasses,
  Stack,
  Button,
  TablePagination,
} from "@mui/material";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const useStyles = styled((theme) => ({
  root: {
    width: "100%",
    marginTop: 7,
    overflowX: "auto",
    marginInline: theme.spacing(8),
  },
  table: {
    width: "100%",
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function ReporteClientes({ fechaInicio, fechaFin }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = [
    { nombre: "Cliente 100", cantidadSolicitudes: 509 },
    { nombre: "Cliente 14242", cantidadSolicitudes: 50},
    { nombre: "Cliente 1", cantidadSolicitudes: 5 },
    { nombre: "Cliente 2", cantidadSolicitudes: 3 },
    { nombre: "Cliente 3", cantidadSolicitudes: 10 },
    { nombre: "Cliente 4", cantidadSolicitudes: 7 },
    { nombre: "Cliente 5", cantidadSolicitudes: 2 },
    { nombre: "Cliente 6", cantidadSolicitudes: 2 },
    { nombre: "Cliente 7", cantidadSolicitudes: 2 },
    { nombre: "Cliente 8", cantidadSolicitudes: 2 },
    { nombre: "Cliente 9", cantidadSolicitudes: 2 },
    { nombre: "Cliente 10", cantidadSolicitudes: 2 },
    { nombre: "Cliente 11", cantidadSolicitudes: 2 },
    { nombre: "Cliente 12", cantidadSolicitudes: 2 },
    { nombre: "Cliente 13", cantidadSolicitudes: 2 },
    { nombre: "Cliente 14", cantidadSolicitudes: 2 },
    { nombre: "Cliente 15", cantidadSolicitudes: 2 },
    { nombre: "Cliente 16", cantidadSolicitudes: 2 },
    { nombre: "Cliente 17", cantidadSolicitudes: 2 },
    { nombre: "Cliente 18", cantidadSolicitudes: 2 },
    { nombre: "Cliente 19", cantidadSolicitudes: 2 },
    { nombre: "Cliente 20", cantidadSolicitudes: 2 },
    { nombre: "Cliente 21", cantidadSolicitudes: 2 },
    { nombre: "Cliente 22", cantidadSolicitudes: 2 },
    { nombre: "Cliente 23", cantidadSolicitudes: 2 },
    { nombre: "Cliente 24", cantidadSolicitudes: 2 },
    { nombre: "Cliente 25", cantidadSolicitudes: 2 },
    { nombre: "Cliente 26", cantidadSolicitudes: 2 },
    { nombre: "Cliente 27", cantidadSolicitudes: 2 },
    { nombre: "Cliente 28", cantidadSolicitudes: 2 },
    { nombre: "Cliente 29", cantidadSolicitudes: 2 },
    { nombre: "Cliente 30", cantidadSolicitudes: 2 },
  ];

  const sortedRows = rows.sort(
    (a, b) => b.cantidadSolicitudes - a.cantidadSolicitudes
  );

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, sortedRows.length - page * rowsPerPage);

  return (
    <div style={{width:"100%", marginTop:"20px"}}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h5" sx={{ ml: 2 }}>
          Clientes ordenados por la cantidad de solicitudes
        </Typography>
        <Button variant="text" color="primary">
          <PDFDownloadLink
            document={<ReporteClientesPDF rows={sortedRows} />}
            fileName="informe.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Generando PDF..." : "Descargar PDF"
            }
          </PDFDownloadLink>
        </Button>
      </Stack>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell align="right">
                Cantidad de solicitudes
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? sortedRows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : sortedRows
            ).map((row) => (
              <TableRow key={row.nombre}>
                <TableCell component="th" scope="row">
                  {row.nombre}
                </TableCell>
                <TableCell align="right">
                  {row.cantidadSolicitudes}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={2} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={sortedRows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

const ReporteClientesPDF = ({ rows }) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1,
    },
    header: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: "center",
      textTransform: "uppercase",
    },
    table: {
      display: "table",
      width: "auto",
      marginTop: 20,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableColHeader: {
      backgroundColor: "#E4E4E4",
      borderBottomColor: "#000",
      borderStyle: "solid",
      borderWidth: 1,
      flex: 1,
      padding: 5,
      textAlign: "center",
    },
    tableCol: {
      borderBottomColor: "#000",
      borderStyle: "solid",
      borderWidth: 1,
      flex: 1,
      padding: 5,
      textAlign: "center",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.header}>
            Clientes ordenados por la cantidad de solicitudes
          </Text>

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Nombre</Text>
              <Text style={styles.tableColHeader}>Cantidad de solicitudes</Text>
            </View>
            {rows.map((row) => (
              <View style={styles.tableRow} key={row.nombre}>
                <Text style={styles.tableCol}>{row.nombre}</Text>
                <Text style={styles.tableCol}>
                  {row.cantidadSolicitudes}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ReporteClientes;