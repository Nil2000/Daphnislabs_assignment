import React from "react";
import ChipItems from "./ChipItems";
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
                <ChipItems/>
                <ChipItems/>
                <ChipItems/>
                <ChipItems/>
            </div>
        </div>
    );
}

export default Product_headings;
