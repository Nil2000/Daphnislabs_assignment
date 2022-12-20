import React from "react";
import "./Chip_items.css";
import CloseIcon from "@mui/icons-material/Close";
// import { makeStyles } from "@material-ui/core/styles";
// import Chip from "@material-ui/core/Chip";
// import Paper from "@material-ui/core/Paper";
// import TagFacesIcon from "@material-ui/icons/TagFaces";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";

export default function ChipItems(props) {
    const handleDelete = () => {
        console.info("You clicked the delete icon.");
    };

    return (
        <div className="chip-item">
            <div className="chip">
                <div className="chip-content">{props.name}</div>
                <div className="chip-close" onClick={handleDelete}>
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
}
