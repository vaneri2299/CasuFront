import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import { Link } from "@mui/material";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Vivero Casu &#x1F335;
              </h6>
              <p>
                Facultad de Ciencias Ciudad Universitaria, Caracas, Venezuela.
                Código Postal: 1040-A.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links</h6>
              <p>
                <Link className="text-reset" component={NavLink} to="/">
                  Inicio
                </Link>
              </p>
              <p>
                <Link component={NavLink} to="/productos" className="text-reset">
                  Productos
                </Link>
              </p>
              <p>
                <Link
                  component={NavLink}
                  to="/sobre_nosotros"
                  className="text-reset"
                >
                  Sobre nosotros
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Ayuda</h6>
              <p>
                <Link
                  component={NavLink}
                  to="/metodos_pago"
                  className="text-reset"
                >
                  Métodos de pago
                </Link>
              </p>
              <p>
                <Link
                  component={NavLink}
                  to="/politica_privacidad"
                  className="text-reset"
                >
                  Política de privacidad
                </Link>
              </p>
              <p></p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contactos</h6>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                medina2.ariana9@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" />+ 58 (424) 1209099
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:&nbsp;
        <Link className="text-reset fw-bold" component={NavLink} to="/">
          casu.com
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
