import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardInfo(): JSX.Element {
    return (
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
    );
}

export default CardInfo;