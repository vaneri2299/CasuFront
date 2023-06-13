import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../views/Home";
import Comprar from "../views/Comprar";
import DetalleProducto from "../views/DetalleProducto";
import Cuenta from "../views/Cuenta";
import Checkout from "../views/Checkout";
import { Provider } from 'react-redux';
import store from '../state/store';
import AboutUs from "../views/SobreNosotros";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <Layout />
      </Provider>
    ),
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
        path: `${import.meta.env.VITE_BANCO_URL}/productos/:id`,
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
      {
        path: "/sobre_nosotros",
        element: <AboutUs />,
      },
    ],
  },
]);
