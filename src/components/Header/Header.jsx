import React from "react";
import logo from "../../assets/Logo.jpg";
import "./Header.scss";
export const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
        </div>
    );
};
