import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <div className="flex justify-center pt-40 pb-10">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="ETH Taipei"
          height="140"
          image="/public/images/ETHTaipei.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ETH Taipei
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Latitude: 25.0330 degrees
          </Typography>
          <Typography variant="body2" color="text.secondary">
            North Longitude: 121.5654 degrees east
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Show Metadata</Button>
          <Button size="small">Interaction</Button>
        </CardActions>
      </Card>
    </div>
  );
}
