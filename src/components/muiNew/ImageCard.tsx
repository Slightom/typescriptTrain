import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import iguana from "../../assets/images/iguana.jpg";
import { Fab } from "@mui/material";

const ImageCard = () => {
  return (
    <Card sx={{ maxWidth: 500, padding: "15px", m: "10px" }}>
      <CardMedia
        component="img"
        height="200"
        image={iguana}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Fab variant="extended" color="primary">
          Share
        </Fab>
        <Fab variant="extended" color="secondary">
          Learn More
        </Fab>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
