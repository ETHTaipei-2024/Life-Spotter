import CardMedia from "@mui/material/CardMedia";
interface ActionColumnProps {
    picture: File | null;
}
function ImagePreview(props: ActionColumnProps) {
    const { picture } = props;
    return (
        picture && (
            <div className="h-fix ml-auto w-44">
                <CardMedia
                    component="img"
                    alt="Picture"
                    image={URL.createObjectURL(picture)}
                />
            </div>
        )
    );
}

export default ImagePreview;
