import React from "react";
import Button from "@mui/material/Button";
import { ChangeEventHandler } from "react";

interface InputBoxProps {
    onChange: ChangeEventHandler<HTMLInputElement>;
}
function InputBox(props: InputBoxProps): JSX.Element {
    const { onChange } = props;
    return (
        <div className="flex justify-center items-center">
            <input
                accept="image/*"
                style={{ display: "none" }}
                id="contained-button-file"
                multiple
                type="file"
                onChange={onChange}
            />
            <label htmlFor="contained-button-file">
                <Button component="span" size="small">
                    UPLOAD PHOTO FOR ANALYSIS
                </Button>
            </label>
        </div>
    );
}

export default InputBox;
