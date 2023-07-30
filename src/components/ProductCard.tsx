import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { theme } from "../App";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Products = {
  id: number;
  title: string;
  description: string;
  price: string;
  rating: string;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
};
type ProductsProps = {
  products: Products[];
};
const ProductCard: React.FC<ProductsProps> = ({ products }) => {
  console.log("prodcard==========", products);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {products?.map((product) => (
        <Card sx={{ maxWidth: 300, width: 270, height: 270 }}>
          <CardHeader title={product.title} subheader={product.brand} />
          <CardMedia
            component="img"
            height="100"
            width="100%"
            image={product.thumbnail}
            alt="prod-img"
          />
          <CardContent sx={{
            display:"flex",
            justifyContent:"space-around",
            color:"gray",
            fontWeight:"bolder"
            
            
          }}>
            <span>Price:{product.price}</span>
            <span>rating:{product.rating}</span>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
export default ProductCard;
