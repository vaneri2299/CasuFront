import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotificacionContainer from "../components/NotificacionContainer";
import { setIsLoged } from "../state/actions";

const Layout = () => {
  const dispatch = useDispatch();
  const checkToken = async () => {
    const userToken = localStorage.getItem("casuToken");
    const userAdmin = localStorage.getItem("casuAdmin");
    if (userToken) {
      dispatch(setIsLoged(true));
      if (userAdmin === true) {
        dispatch(setIsAdmin(true));
      }
    } else {
      toast.success("Inicia sesión nuevamente");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <NotificacionContainer />
    </>
  );
};

export default Layout;
