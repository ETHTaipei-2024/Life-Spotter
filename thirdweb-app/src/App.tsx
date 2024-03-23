import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import "./index.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardInfo from "./components/CardInfo";
import { C2paReadResult } from "c2pa";
import CardActionColumn from "./components/CardActionColumn";
import { useState } from "react";

export interface locationType {
    location: string;
    longtitude: number;
    latitude: number;
}
export default function Home() {
    const [picture, setPicture] = useState<File | null>(null);
    const [location, setLocation] = useState<locationType | null>(null);
    const [metaData, setMetaData] = useState<C2paReadResult | null>(null);
    console.log(metaData);
    return (
        // split into two 1/3 and 2/3
        <div className="flex justify-center pt-40 pb-10 flex-row">
            <Card className="w-5/12">
                <CardMedia
                    component="img"
                    alt="ETH Taipei"
                    height="100"
                    image="/public/images/ETHTaipei.jpg"
                    sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                />
                <CardInfo
                    location={location}
                    picture={picture}
                    metaData={metaData}
                />
                <CardActionColumn
                    setLocation={setLocation}
                    setMetaData={setMetaData}
                    setPicture={setPicture}
                />
            </Card>
        </div>
    );
}
