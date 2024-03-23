import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import InputBox from "./InputBox";
import ImageAuthenticator from "../c2pa/ImageAuthenticator";
import { useState } from "react";
import { Dispatch } from "react";

interface ActionColumnProps {
    picture: File | null;
    setPicture: Dispatch<React.SetStateAction<File | null>>;
}
function CardActionColumn(props: ActionColumnProps) {
    const { setPicture } = props;
    const [authenticator, setAuthenticator] = useState(
        new ImageAuthenticator()
    );
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
                }}
            ></InputBox>
            <Button size="small">Interaction</Button>
        </CardActions>
    );
}

export default CardActionColumn;
