import axios from "axios";
const token = `${import.meta.env.VITE_BANCO_TOKEN}`;

export async function pagarConTDC(tarjeta, cvv, fecha, monto) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BANCO_URL}/pay-with-tdc`,
      { tarjeta, cvv, fecha, monto, token }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function pagarConCrypto(correo, pin, monto) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BANCO_URL}/pay-with-cripto`,
      { correo, pin, monto, token }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
