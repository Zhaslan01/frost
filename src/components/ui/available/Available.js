import React, { useState, useEffect } from "react";
import "../../productDescription/ProductDescription.css";
import tick from "./images/tick.svg";
import cross from "./images/cross.svg";

function Available({ available, text }) {
    const [icon, setIcon] = useState(available ? tick : cross);
    const [iconText, setIconText] = useState(available ? "в наличии" : "нет в наличии");

    useEffect(() => {
        setIcon(available ? tick : cross);
        setIconText(available ? "в наличии" : "нет в наличии");
    }, [available]);

    return (
        <div className="availability-icon">
            <img src={icon} alt={iconText} className="icon-img" />
            <p className="icon-text">{iconText}</p>
        </div>
    );
}

export default Available;