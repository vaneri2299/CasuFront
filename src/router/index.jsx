import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../views/Home";
import Comprar from "../views/Comprar";
import DetalleProducto from "../views/DetalleProducto";
import Cuenta from "../views/Cuenta";
import Checkout from "../views/Checkout";

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
        path: "/productos",
        element: <Comprar />,
      },
      {
        path: "/productos/:id",
        element: <DetalleProducto />,
      },
      {
        path: "/cuenta",
        element: <Cuenta />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
