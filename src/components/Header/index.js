import React from "react";
import "./styles.scss";
import logo from "./../../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={logo} alt="Logo SimpleTut" />
        </div>
      </div>
    </header>
  );
};

export default Header;
