import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "30pt",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "auto",
    margin: "10pt 0",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    margin: "3pt",
    padding: "3pt 5pt",
    border: "1pt solid #000000",
  },
});

function InformePDF(props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Informes</Text>
          <Text style={styles.subtitle}>Clientes ordenados por la cantidad de solicitudes</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>Nombre del Cliente</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>Cantidad de Solicitudes</Text>
              </View>
            </View>
            {/* Lógica para generar la tabla con los datos del informe */}
          </View>
          <Text style={styles.subtitle}>Categorías ordenadas por monto de facturación</Text>
          {/* Lógica para generar el gráfico con los datos del informe */}
        </View>
      </Page>
    </Document>
  );
}

export default InformePDF;