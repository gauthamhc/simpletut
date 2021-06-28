import React from "react";
import "./styles.scss";
import logo from "./../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo SimpleTut" />
          </Link>
        </div>

        <div className="callToActions">
          <ul>
            <Link to="/registration">Register</Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
