import axios from "axios";

export async function enviarCodigo(email) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/send-code`,
      { email }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function verificarCodigo(email, codigo) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/verify-code`,
      { email, codigo }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function crearUsuario(email, password) {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/user`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function existUser(email) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/exist`,
      { email }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}
