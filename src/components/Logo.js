import React from "react";
import logo from "../assets/burger-logo.png";

const Logo = (props) => {
  return (
    <div className="logo">
      <img src={logo} alt="Logo of the site" />
    </div>
  );
};

export default Logo;
