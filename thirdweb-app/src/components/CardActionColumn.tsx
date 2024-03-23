import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputBox from "./InputBox";
import ImageAuthenticator from "../c2pa/ImageAuthenticator";
import { C2paReadResult } from "c2pa";
import { addPlain } from "../fhe/addPlain";
import { decryptDistance } from "../fhe/location";
import { useState, Dispatch } from "react";
import { locationType } from "../App";
import useEncryptionLocation from "../hooks/useEncryptionLocation";

interface ActionColumnProps {
    location: locationType | null;
    setLocation: Dispatch<React.SetStateAction<locationType | null>>;
    setMetaData: Dispatch<React.SetStateAction<C2paReadResult | null>>;
    setPicture: Dispatch<React.SetStateAction<File | null>>;
}
function CardActionColumn(props: ActionColumnProps) {
    const { location, setMetaData, setPicture, setLocation } = props;
    const [authenticator, _] = useState(new ImageAuthenticator());
    const enc = useEncryptionLocation(location);

    // Get current location adn calculate distance on cipher text
    const handleClick = async () => {
        if (!enc) return;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let { latitude, longitude } = position.coords;
                // turn lat and lon to INT32ARRAY
                const latInt = latitude | 0;
                const lonInt = longitude | 0;
                const intArray = new Int32Array([0, latInt, latInt, lonInt]);
                const cipher = await addPlain(enc, intArray);
                const distance = await decryptDistance(cipher);
                setLocation({ ...location!, distance });
            });
        } else {
            console.log("geolocation api not support");
        }
    };

    return (
        <>
            <CardActions>
                <InputBox
                    onChange={async (e) => {
                        // @ts-ignore
                        const files: Array = e.target.files;
                        if (files) {
                            const res = await authenticator.readMetadata(
                                files[0]
                            );
                            console.log(res);
                            setPicture(files[0]);
                        }
                        const metadata = await authenticator.readMetadata(
                            files[0]
                        );
                        // create new property to metadata
                        if (metadata) {
                            setLocation({
                                location: "Nangang District, Taipei, Taiwan",
                                longitude: 121.5654,
                                latitude: 25.033,
                            });
                            setMetaData(metadata);
                        }
                    }}
                ></InputBox>
                <Button size="small" onClick={handleClick}>
                    Interaction
                </Button>
                {enc && (
                    <Button
                        size="small"
                        onClick={() => {
                            window.alert(enc);
                        }}
                    >
                        check enc
                    </Button>
                )}
            </CardActions>
        </>
    );
}

export default CardActionColumn;
