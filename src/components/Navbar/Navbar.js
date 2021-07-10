import React from "react";
import "./Navbar.css";
import Cart from "../Cart/Cart";

const NavBar = (props) => {
  return (
    <nav className="navContenedor">
      <button className="btn3">
        <i className="fas fa-bars"></i>
      </button>
      <h1 className="nombreTienda">{props.nombreDeLaTienda}</h1>

      <ul className="listadoMenu">
        <li className="itemMenu">Bodegas</li>
        <li className="itemMenu">Tintos</li>
        <li className="itemMenu">Blancos</li>
        <li className="itemMenu">Rosados</li>
        <li className="itemMenu">Espumantes</li>
        <li className="itemMenu">Aperitivos</li>
      </ul>

      <button className="btn1">Iniciar Sesión</button>
      <div>
        <Cart />
      </div>
    </nav>
  );
};
export default NavBar;
