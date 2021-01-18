// Dependencies
import React from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

// Components
import Menu from "./CategoriesTemplate";
import Rooms from "./HabitacionesTemplate";

// Styled Components
import * as HOME from "./styles";

function Categories() {
  return (
    <HOME.Units>
      <HOME.UnitsHeader>
        <HOME.UnitsHeaderNav>
          <ul>
            <li>
              <NavLink to="/categorias">Categorias</NavLink>
            </li>
            <li>
              <NavLink to="/habitaciones">Habitaciones</NavLink>
            </li>
          </ul>
        </HOME.UnitsHeaderNav>
      </HOME.UnitsHeader>
      <Switch></Switch>
    </HOME.Units>
  );
}

export default Categories;
