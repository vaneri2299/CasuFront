import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../views/Home";
import Comprar from "../views/Comprar";
import DetalleProducto from "../views/DetalleProducto";
import Cuenta from "../views/Cuenta";

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
        path: "/cuenta",
        element: <Cuenta />,
      },
    ],
  },
]);
