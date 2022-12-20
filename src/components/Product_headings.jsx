import React from "react";
import Chip_items from "./Chip_items";
import "./Product_headings.css";
// import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
// import Paper from '@material-ui/core/Paper';
// import TagFacesIcon from '@material-ui/icons/TagFaces';


function Product_headings() {
    return (
        <div className="product_headings">
            <div className="product_name">Paracetamol</div> <div className="count_products">(128 products)</div>
            <div className="chip-items">
                <Chip_items/>
                <Chip_items/>
                <Chip_items/>
                <Chip_items/>
            </div>
        </div>
    );
}

export default Product_headings;
