import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Stack,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { NavLink } from "react-router-dom";
import { setCantCarrito } from "../../state/actions";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "0%",
  right: "0%",
  width: 450,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 3,
};

export default function ModalCarrito(props) {
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.isOpen) {
      const existingProducts = JSON.parse(localStorage.getItem("productsCasu"));
      setProductos(existingProducts);
      let totalPrecio = 0;
      let totalCantidad = 0;
      existingProducts?.forEach((product) => {
        totalPrecio += product.price * product.quantity;
        totalCantidad += product["quantity"];
      });
      setTotal(totalPrecio);
    }
  }, [props.isOpen]);

  useEffect(() => {
    dispatch(
      setCantCarrito(
        productos.reduce((total, item) => total + item.quantity, 0)
      )
    );
  }, [productos, dispatch]);

  useEffect(() => {
    let newTotal = 0;
    productos.forEach((item) => {
      const quantity = isNaN(item.quantity) ? 0 : item.quantity;
      newTotal += item.price * quantity;
    });
    setTotal(newTotal);
  }, [productos]);

  const actualizarCantidad = (e, item) => {
    const newQuantity = parseInt(e.target.value);
    const updatedProducts = productos.map((product) => {
      if (product.id === item.id) {
        return {
          ...product,
          quantity: newQuantity,
        };
      }
      return product;
    });
    setProductos(updatedProducts);
    localStorage.setItem("productsCasu", JSON.stringify(updatedProducts));
  };

  const eliminarProducto = (e, item) => {
    console.log(e, item);
    const nuevosProductos = productos.filter(
      (producto) => producto.id !== item.id
    );
    setProductos(nuevosProductos);
    localStorage.setItem("productsCasu", JSON.stringify(nuevosProductos));
  };

  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={props.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ border: "none", overflow: "auto" }}
      >
        <Box sx={style}>
          <Stack
            direction="row"
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Typography id="modal-modal-title" variant="h5" component="h2">
              Carrito
            </Typography>
            <IconButton onClick={props.closeModal}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider flexItem color="black" style={{ marginBottom: "16px" }} />
          <Grid
            container
            spacing={2}
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            {productos?.length > 0 ? (
              productos.map((item) => (
                <>
                  <Grid item md={4}>
                    <Card style={{ border: "none" }} variant="outlined">
                      <CardMedia
                        component="img"
                        height="90"
                        image={`${import.meta.env.VITE_API_URL}/assets/${
                          item.imageUrl
                        }`}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Card>
                  </Grid>
                  <Grid item md={6}>
                    <Typography color="textPrimary" variant="h6">
                      {item.name}
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <div className="form-outline">
                        <input
                          type="number"
                          min={0}
                          id="form1"
                          value={item.quantity}
                          onChange={(e) => {
                            actualizarCantidad(e, item);
                          }}
                          className="form-control form-icon-trailing"
                          fontWeight="bold"
                          style={{ fontWeight: "bold", width: "80px" }}
                        />
                      </div>
                      <Typography variant="h6">x</Typography>
                      <Typography color="#B88E2F" variant="h6">
                        {item.price.toFixed(2)}$
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item>
                    <IconButton onClick={(e) => eliminarProducto(e, item)}>
                      <HighlightOffIcon />
                    </IconButton>
                  </Grid>
                </>
              ))
            ) : (
              <Grid item md={12}>
                <Typography variant="body1">
                  No hay productos agregados
                </Typography>
              </Grid>
            )}
            <Grid item md={12}>
              <Divider
                flexItem
                color="black"
                style={{ marginBottom: "16px" }}
              />
              <Stack
                direction="row"
                style={{ justifyContent: "space-between" }}
                mb={3}
              >
                <Typography variant="h6">Subtotal:</Typography>
                <Typography color="#B88E2F" variant="h6">
                  {total.toFixed(2)}$
                </Typography>
              </Stack>

              <Stack
                direction="row"
                style={{ justifyContent: "center" }}
                fullWidth
              >
                <Button
                  variant="outlined"
                  color="primary"
                  component={NavLink}
                  fullWidth
                  to={"/checkout"}
                  onClick={props.closeModal}
                  size="small"
                >
                  Checkout
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
