import React from "react";
import ChipItems from "./ChipItems";
import "./Product_headings.css";
// import { makeStyles } from '@material-ui/core/styles';
// import Chip from '@material-ui/core/Chip';
// import Paper from '@material-ui/core/Paper';
// import TagFacesIcon from '@material-ui/icons/TagFaces';

function Product_headings() {
    const chip_items = ["Acelofenac", "500 mg"];

    return (
        <div className="product_headings">
            <div className="product_name">Paracetamol</div>{" "}
            <div className="count_products">(128 products)</div>
            <div className="chip-items">
                {chip_items.map((item, id) => {
                    return <ChipItems name={item} />;
                })}
            </div>
            <div className="remove-all">
                {chip_items.length > 0 ? "Remove all" : ""}
            </div>
        </div>
    );
}

export default Product_headings;
