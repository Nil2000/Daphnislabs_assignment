import React from "react";
import Img from "../assets/fabiflu-200mg-favipiravir-200mg-glenmark--500x500.webp";
import SendIcon from "../assets/icons8-email-send-90.png";
import "./Card_item.css";

function CardItem(props) {
    return (
        <div className="card">
            <div className="card-item">
                <img src={Img} alt="" />
                <div className="item-details">
                    <div className="item-title">{props.item.name}</div>
                    <div className="cost-item">
                        <span className="txt1">Rs {props.item.cost}</span>
                        <span className="txt2"> / </span>
                        <span className="txt3">stripe</span>
                    </div>
                    <div className="company-name">{props.item.company_name}</div>
                    <div className="company-addr">{props.item.company_address}</div>
                </div>
                {/* <hr /> */}
                <div className="item-footer">
                    <img src={SendIcon} alt="" />
                    <span className="footer-text">Contact Supplier</span>
                </div>
            </div>
            <div className="bottom-line"></div>
        </div>
    );
}

export default CardItem;
