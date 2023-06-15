import React from "react";
import { Typography } from "@mui/material";

const PaymentMethods = () => {
  return (
    <div style={{ paddingInline: "30px" }}>
      <Typography variant="h4" mt={15} sx={{ marginBottom: 2 }}>
        Métodos de pago
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Tarjetas de crédito
      </Typography>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        Aceptamos tarjetas de crédito como Visa, Mastercard y American Express a
        través de nuestro banco asociado, Cryptobanco.
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        Criptomonedas
      </Typography>
      <Typography mb={20} variant="body2" >
        También aceptamos pagos en criptomonedas como Bitcoin, Ethereum y
        Litecoin. Puedes realizar tus pagos en criptomonedas a través de nuestro
        procesador de pagos integrado que trabaja con Cryptobanco.
      </Typography>
    </div>
  );
};

export default PaymentMethods;
