// Dependencis
import React from "react";
import { NavLink, Link } from "react-router-dom";

// Styled Components
import { NavBarNav, BrandDiv, NavBarUl, NavBarLi } from "./styles.js";

const Navbar = ({ toggleNavBar }) => {
  return (
    <NavBarNav toggleNavBar={toggleNavBar}>
      <BrandDiv>
        <Link to="/">
          <img src="/logo512.png" alt="brand" />
          <h1>Hotel Quinto Nivel RD</h1>
          <p>Como estar en casa!!!</p>
        </Link>
      </BrandDiv>
      <NavBarUl>
        <NavBarLi>
          <NavLink to="/" exact>
            Inicio
          </NavLink>
        </NavBarLi>
        <NavBarLi>
          <NavLink to="/habitaciones" exact>
            Habitaciones
          </NavLink>
        </NavBarLi>
        <NavBarLi>
          <NavLink to="/hacerca" exact>
            Hacerca
          </NavLink>
        </NavBarLi>
        <NavBarLi>
          <NavLink to="/contactanos" exact>
            Contactanos
          </NavLink>
        </NavBarLi>
        <NavBarLi>
          <NavLink to="/cuenta" exact>
            Mi Cuenta
          </NavLink>
        </NavBarLi>
      </NavBarUl>
    </NavBarNav>
  );
};

export default Navbar;
