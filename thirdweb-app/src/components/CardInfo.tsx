import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { C2paReadResult } from "c2pa";
import ImagePreview from "./ImagePreview";

import { encryptLocationA } from "../fhe/location";
import { useEffect, useState } from "react";

interface CardInfoProps {
    picture: File | null;
    metaData: C2paReadResult | null;
}

function CardInfo(props: CardInfoProps): JSX.Element {
    const { picture, metaData } = props;
    const [enc, setEnc] = useState<string>();
    const sampleLocation = {
        latitude: 25.033,
        longitude: 121.5654,
        precision: 4,
    };
    useEffect(() => {
        let tmp;
        (async () => {
            tmp = await encryptLocationA(
                sampleLocation.latitude,
                sampleLocation.longitude,
                sampleLocation.precision
            );
            setEnc(tmp);
        })();
        setEnc(tmp);
    }, []);
    return (
        <CardContent className="flex flex-row">
            <div>
                <Typography variant="body2" component="div">
                    Location: {metaData ? "Taipei" : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Latitude: {metaData ? "25.0330 degrees" : ""}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Longitude:
                    {metaData ? "121.5654 degrees east" : ""}
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
            </div>
            <ImagePreview picture={picture}></ImagePreview>
        </CardContent>
    );
}

export default CardInfo;
