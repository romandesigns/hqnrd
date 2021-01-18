// Dependecies
import React from "react";
import { NavLink } from "react-router-dom";

// Style Components
import { NavbarPageStyled, NavbarPageUlStyled } from "./styles";

const Navbar = () => {
  return (
    <NavbarPageStyled>
      <NavbarPageUlStyled>
        <li>
          <NavLink exact to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/habitaciones">Habitaciones</NavLink>
        </li>
        <li>
          <NavLink to="/hacerca">Hacerca</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Mi Cuenta</NavLink>
        </li>
      </NavbarPageUlStyled>
    </NavbarPageStyled>
  );
};

export default Navbar;
