import CardMedia from "@mui/material/CardMedia";
interface ActionColumnProps {
    picture: File | null;
    width?: number | string;
    height?: number | string;
}
function ImagePreview(props: ActionColumnProps) {
    const { picture, width, height } = props;
    return (
        picture && (
            <div className="h-fix">
                <CardMedia
                    component="img"
                    alt="Picture"
                    height={height}
                    width={width}
                    image={URL.createObjectURL(picture)}
                />
            </div>
        )
    );
}

export default ImagePreview;
