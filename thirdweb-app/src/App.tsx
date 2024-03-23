import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import "./index.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardInfo from "./components/CardInfo";
import CardActionColumn from "./components/CardActionColumn";
import ImagePreview from "./components/ImagePreview";
import { useState } from "react";

export default function Home() {
    const [picture, setPicture] = useState<File | null>(null);
    return (
        <div className="flex justify-center pt-40 pb-10">
            <Card sx={{ maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    alt="ETH Taipei"
                    height="140"
                    image="/public/images/ETHTaipei.jpg"
                />
                <CardInfo />
                <CardActionColumn picture={picture} setPicture={setPicture} />
                <ImagePreview picture={picture} />
            </Card>
        </div>
    );
}
