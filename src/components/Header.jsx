import React from "react";
import "./Header.css";
import PersonImg from "../assets/user.png";

export default function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <div id="square"></div>
                <h1>Medical Darpen</h1>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Distributors</li>
                    <li>Manufacturers</li>
                    <li>About us</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="header_right">
                <ul>
                    <li>Login</li>
                    <img src={PersonImg} alt="" />
                </ul>
            </div>
        </div>
    );
}
