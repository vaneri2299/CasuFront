import React, { useState } from "react";
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

const style = {
  position: "absolute",
  top: "0%",
  right: "0%",
  // transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 3,
};

export default function ModalCarrito() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div style={{ marginTop: "100px" }}>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
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
            <IconButton>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider flexItem color="black" style={{ marginBottom: "16px" }} />
          <Grid
            container
            spacing={2}
            style={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item md={4}>
              <Card style={{ border: "none" }} variant="outlined">
                <CardMedia
                  component="img"
                  height="90"
                  image={"/src/assets/shop1.png"}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={6}>
              <Typography color="textPrimary" variant="h6">
                Producto 1
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">1</Typography>
                <Typography variant="h6">x</Typography>
                <Typography color="#B88E2F" variant="h6">
                  $19.99
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <IconButton>
                <HighlightOffIcon />
              </IconButton>
            </Grid>
            <Grid item md={4}>
              <Card style={{ border: "none" }} variant="outlined">
                <CardMedia
                  component="img"
                  height="90"
                  image={"/src/assets/shop2.png"}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Card>
            </Grid>
            <Grid item md={6}>
              <Typography color="textPrimary" variant="h6">
                Producto 2
              </Typography>
              <Stack direction="row" spacing={2}>
                <Typography variant="h6">1</Typography>
                <Typography variant="h6">x</Typography>
                <Typography color="#B88E2F" variant="h6">
                  $19.99
                </Typography>
              </Stack>
            </Grid>
            <Grid item>
              <IconButton>
                <HighlightOffIcon />
              </IconButton>
            </Grid>
            <Grid item md={12}>
              <Stack
                direction="row"
                style={{ justifyContent: "space-between" }}
              >
                <Typography variant="h6">Subtotal:</Typography>
                <Typography color="#B88E2F" variant="h6">
                  39,98
                </Typography>
              </Stack>
              <Divider
                flexItem
                color="black"
                style={{ marginBottom: "16px" }}
              />
              <Stack
                direction="row"
                style={{ justifyContent: "space-evenly" }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  //   onClick={"handleAgregar"}
                  size="small"
                >
                  Ver carrito
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  //   onClick={"handleAgregar"}
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
