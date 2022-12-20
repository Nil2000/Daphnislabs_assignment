import React, { useState } from "react";
import "./Sidebar_item.css";
import CloseIcon from "@mui/icons-material/Close";

export default function SidebarItem(props) {
    let arr = [];
    props.items.forEach((element) => {
        arr.push(false);
    });

    const [isActive, setIsActive] = useState(arr);

    function handleClick(_id) {
        const newList = isActive.map((item, id) => {
            if (_id === id) {
                // console.log(props.heading+" "+_id)
                return !item;
            } else return item;
        });
        setIsActive(newList);
        console.log(isActive);
    }
    return (
        <div className="sidebar-item">
            <div className="sidebar-heading">{props.heading}</div>
            <ul>
                {props.items.map((item, id) => {
                    return (
                        <li key={id} onClick={() => handleClick(id)}>
                            <div
                                className={
                                    isActive[id]
                                        ? "item-container clicked"
                                        : "item-container"
                                }
                            >
                                {item}
                            {isActive[id] ? <CloseIcon /> : ""}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
