// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styled Components
import * as HOME from "./styles";
// Components
import Card from "../../ui-elements/Card";

function CategoriesTemplate() {
  return (
    <HOME.UnitsCategories>
      <Card type="category" title="Habitacion Familiar" img_src="/img/cat/familiar.jpg" alt_value="Habitacion Familiar" path_to="/familiar" />
      <Card type="category" title="Doble Cama" img_src="/img/cat/doble-bed.jpg" alt_value="Habitacion con camas doble" path_to="/doble-cama" />
      <Card type="category" title="Habitaciones Doble" img_src="/img/cat/master.jpg" alt_value="Habitacion doble" path_to="/doble-habitaciones" />
      <Card type="category" title="Habitaciones Master" img_src="/img/cat/master.jpg" alt_value="Habitacion doble" path_to="/doble-habitaciones" />
      <Card type="category" title="Habitaciones Basica" img_src="/img/cat/basic.jpg" alt_value="Habitacion Basica" path_to="/habitaciones-basica" />
      <Card type="category" title="Habitaciones Basica" img_src="/img/cat/basic.jpg" alt_value="Habitacion Basica" path_to="/habitaciones-basica" />
    </HOME.UnitsCategories>
  );
}

export default CategoriesTemplate;
