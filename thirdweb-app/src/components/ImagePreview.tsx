import CardMedia from "@mui/material/CardMedia";
interface ActionColumnProps {
    picture: File | null;
}
function ImagePreview(props: ActionColumnProps) {
    const { picture } = props;
    return (
        picture && (
            <CardMedia
                component="img"
                alt="Picture"
                height="140"
                image={URL.createObjectURL(picture)}
            />
        )
    );
}

export default ImagePreview;
