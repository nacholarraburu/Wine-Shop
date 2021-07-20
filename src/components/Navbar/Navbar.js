import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Cart from "../Cart/Cart";
import { categorias } from "../../productos/categorias.json";

const NavBar = () => {
  return (
    <div className="navContenedor">
      <button className="btn3">
        <i className="fas fa-bars"></i>
      </button>
      <NavLink to="/" className="nombreTienda">
        CATA
      </NavLink>
      <ul className="listadoMenu">
        {categorias.map((cat) => (
          <NavLink
            to={`/categorias/${cat.id}`}
            key={cat.id}
            className="itemMenu"
          >
            {cat.nombre}
          </NavLink>
        ))}
      </ul>
      <button className="btn1">Iniciar Sesión</button>

      <div>
        <Cart />
      </div>
    </div>
  );
};
export default NavBar;
