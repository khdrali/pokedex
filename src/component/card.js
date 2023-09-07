import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function PokemonCard({ name, imageUrl, height, weight }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" img src={imageUrl} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography>Height : {height}</Typography>
          <Typography>Weight : {weight}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;
