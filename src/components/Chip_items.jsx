import React from "react";
import "./Chip_items.css";
// import { makeStyles } from "@material-ui/core/styles";
// import Chip from "@material-ui/core/Chip";
// import Paper from "@material-ui/core/Paper";
// import TagFacesIcon from "@material-ui/icons/TagFaces";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Chip_items() {

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    
      return (
        <Stack direction="row" spacing={1}>
          <Chip classname="chip-item" label="Deletable" onDelete={handleDelete} />
          {/* <Chip label="Deletable" variant="outlined" onDelete={handleDelete} /> */}
        </Stack>
      );
}
