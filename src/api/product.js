import axios from "axios";

export async function getProductos() {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/producto`,
      {}
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export async function getProducto(id) {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/producto/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}