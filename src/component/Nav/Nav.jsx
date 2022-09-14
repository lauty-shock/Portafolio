import React, { useState } from "react";
import logo from "../../../img/logo-no.svg";
import "./Nav.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="nav-logo" src={logo} alt="Logo" />

      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">Inicio</a>
        <a href="#">Sobre mi</a>
        <a href="#">Conocimientos</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}
