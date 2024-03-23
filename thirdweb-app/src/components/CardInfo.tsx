import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import {encryptLocationA} from "../fhe/location";
import { useEffect, useState } from "react";

interface CardInfoProps {
    metaData: any;
}

function CardInfo(props: CardInfoProps): JSX.Element {
    const { metaData } = props;

    const [enc, setEnc] = useState<string>();

    useEffect(() => {
        let tmp;
        (async () => {
            tmp = await encryptLocationA(sampleLocation.latitude, sampleLocation.longitude, sampleLocation.precision);
            setEnc(tmp);
        })();
        setEnc(tmp);
    }, []);

    const sampleLocation = {
        latitude: 25.0330,
        longitude: 121.5654,
        precision: 4,
    };
    
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
            <Typography variant="body2" color="text.secondary">
                {enc}
            </Typography>
        </CardContent>
    );
}

export default CardInfo;
