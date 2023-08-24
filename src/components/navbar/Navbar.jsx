import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import BotonNavbar from "../../atoms/BotonNavbar/BotonNavbar";
import LogoNavbar from "../../atoms/LogoNavbar";

function Navbar() {
  return (
    <div className="container">
      <div className="logoContainer">
        <LogoNavbar />
      </div>
      <div className="buttonsContainer">
        <Link to="/">
          <BotonNavbar text="Inicio" />
        </Link>
        <Link to="/locations">
          <BotonNavbar text="Ubicación" />
        </Link>
        <Link to="/anadir">
          <BotonNavbar text="Añadir" />
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
