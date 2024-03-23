import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { C2paReadResult } from "c2pa";
import ImagePreview from "./ImagePreview";
import { locationType } from "../App";
interface CardInfoProps {
    location: locationType | null;
    picture: File | null;
    metaData: C2paReadResult | null;
}

function CardInfo(props: CardInfoProps): JSX.Element {
    const { picture, metaData, location } = props;

    return (
        <CardContent className="flex flex-row">
            <div>
                <Typography
                    variant="body2"
                    component="div"
                    className="overflow-hidden"
                >
                    Location: {location?.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Latitude: {location?.latitude}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Longitude: {location?.longitude}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    FileName: {metaData?.manifestStore?.activeManifest.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Date:{" "}
                    {
                        metaData?.manifestStore?.activeManifest.signatureInfo
                            ?.time
                    }
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Distance from: {location ? `${location.distance} km` : "N/A"}
                </Typography>
            </div>
            <ImagePreview picture={picture}></ImagePreview>
        </CardContent>
    );
}

export default CardInfo;
