import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const ProductCard = ({ name, price, imageUrl, url }) => {
  console.log("../../assets/" + imageUrl);
  return (
    <>
      <Card variant="outlined" sx={{ border: "none", textAlign: "center" }}>
        <CardActionArea href={url}>
          <CardMedia
            component="img"
            alt={name}
            height="140"
            image={"/src/assets/" + imageUrl}
            style={{
              objectFit: "contain",
              marginTop: "8px",
            }}
            // title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default ProductCard;
