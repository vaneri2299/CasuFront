import {
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { setCantCarritoAdd, setCantCarritoRem } from "../../state/actions";
import loadingImage from "../../assets/loading.gif";
import NotificacionContainer from "../NotificacionContainer";

const ProductCard = ({ name, price, imageUrl, url, maxCantidad }) => {
  const [quantity, setQuantity] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [decremento, setDecremento] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  const [loading, setLoading] = useState(true);
  const maxQuantity = maxCantidad;
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
      dispatch(setCantCarritoAdd());
      setDecremento(true);
      setCantidad(1);
    } else {
      toast.error(`La cantidad disponible de este producto es ${maxQuantity}`);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(setCantCarritoRem());
      setDecremento(true);
      setCantidad(-1);
    }
  };

  useEffect(() => {
    if (quantity > 0 || decremento) {
      const existingProducts =
        JSON.parse(localStorage.getItem("productsCasu")) || [];
      const existingProductIndex = existingProducts.findIndex(
        (product) => product.name === name
      );
      console.log();
      if (existingProductIndex >= 0) {
        const existingProduct = existingProducts[existingProductIndex];
        console.log(existingProduct.quantity, quantity);
        existingProduct.quantity += cantidad;
        if (existingProduct.quantity <= 0) {
          existingProducts.splice(existingProductIndex, 1);
        }
      } else if (quantity > 0) {
        const id = url.split("/").pop();
        existingProducts.push({ name, price, imageUrl, id, quantity });
      }
      localStorage.setItem("productsCasu", JSON.stringify(existingProducts));
    }
    setFirstLoad(false);
  }, [quantity, firstLoad]);

  return (
    <>
      <Card variant="outlined" sx={{ border: "none", textAlign: "center" }}>
        <CardActionArea component={NavLink} to={url}>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={
              loading
                ? loadingImage
                : `${import.meta.env.VITE_API_URL}/assets/${imageUrl}`
            } 
            onLoad={() => setLoading(false)}
            onError={(e) => {
              e.target.src = `${
                import.meta.env.VITE_API_URL
              }/assets/defecto.jpg`;
            }}
            style={{
              objectFit: "contain",
              marginTop: "8px",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {price.toFixed(2)}$
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ justifyContent: "space-around" }}>
          <Button size="small" as={NavLink} to={url}>
            Ver más
          </Button>
          <ButtonGroup>
            <Button variant="outline-primary" onClick={handleDecrement}>
              -
            </Button>
            <Button variant="outlined" readOnly>
              {quantity}
            </Button>
            <Button variant="outline-primary" onClick={handleIncrement}>
              +
            </Button>
          </ButtonGroup>
        </CardActions>
      </Card>
      <NotificacionContainer />
    </>
  );
};

export default ProductCard;
