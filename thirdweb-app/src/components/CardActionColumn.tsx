import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import InputBox from "./InputBox";
import ImageAuthenticator from "../c2pa/ImageAuthenticator";
import { C2paReadResult } from "c2pa";
import {addPlain} from '../fhe/addPlain';
import {decryptDistance} from '../fhe/location';
import { useState } from "react";
import { Dispatch } from "react";

interface ActionColumnProps {
    setMetaData: Dispatch<React.SetStateAction<C2paReadResult | null>>;
    setPicture: Dispatch<React.SetStateAction<File | null>>;
}
function CardActionColumn(props: ActionColumnProps) {
    const { setMetaData, setPicture } = props;
    const [authenticator, setAuthenticator] = useState(
        new ImageAuthenticator()
    );

    const handleClick = async () => {
        if (navigator.geolocation) {
            let location: any;
            navigator.geolocation.getCurrentPosition((position) => {
                location = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                    precision: 4,
                };
            });
        } else {
            console.log("geolocation api not support");
        }
        // const cipher = await addPlain("<from image>", [0, lat, lat, lon]);
        // const distance = await decryptDistance(cipher);
    };

    return (
        <CardActions>
            <InputBox
                onChange={async (e) => {
                    // @ts-ignore
                    const files: Array = e.target.files;
                    if (files) {
                        const res = await authenticator.readMetadata(files[0]);
                        console.log(res);
                        setPicture(files[0]);
                    }
                    const metadata = await authenticator.readMetadata(files[0]);
                    setMetaData(metadata);
                }}
            ></InputBox>
            <Button size="small" onClick={handleClick}>Interaction</Button>
        </CardActions>
    );
}

export default CardActionColumn;
