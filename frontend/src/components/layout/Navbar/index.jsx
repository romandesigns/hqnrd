// Dependecies
import React, { useState, useEffect } from "react";
import { NavLink, useHistory,Redirect } from "react-router-dom";

// Style Components
import { NavbarPageStyled, NavbarPageUlStyled } from "./styles";

const Navbar = () => {
  const [token, setToken] = useState();
  let history = useHistory();

  useEffect(() => {
    const getUserToken = async () => {
      let localUserData = await window.localStorage.getItem("user");
      if (!localUserData || localUserData === null) return setToken(false);
      let { token } = JSON.parse(localUserData);
      setToken(token);
    };
    getUserToken();
  }, [history]);

  const LogOut = () => {
    window.localStorage.removeItem("user");
    <Redirect to="/" />
  }

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
          <NavLink to={`/huesped/${token ? "cerrar-session" : "iniciar-session"}`} onClick={LogOut}>{token ? "Cerrar Session" : "Iniciar Session"}</NavLink>
        </li>
      </NavbarPageUlStyled>
    </NavbarPageStyled>
  );
};

export default Navbar;
