import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../views/Home";
import Comprar from "../views/Comprar";
import DetalleProducto from "../views/DetalleProducto";
import ModalCarrito from "../components/ModalCarrito";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/comprar",
        element: <Comprar />,
      },
      {
        path: "/comprar/:id",
        element: <DetalleProducto />,
      },
      {
        path: "/carrito",
        element: <ModalCarrito />,
      },
    ],
  },
]);
