// Dependencies
import React from "react";
// Styled Components
import * as HOME from "./styles";
// Components
import Card from "../../ui-elements/Card";

function CategoriesTemplate() {
  return (
    <HOME.UnitsCategories>
      <Card type="category" title="Familiar" img_src="/img/cat/familiar.jpg" alt_value="Habitaciones Familiar" path_to="/categoria/familiar" />
      <Card type="category" title="Doble Cama" img_src="/img/cat/doble-cama.jpg" alt_value="Habitaciones camas doble" path_to="/categoria/doble-cama" />
      <Card type="category" title="Doble" img_src="/img/cat/doble.jpg" alt_value="Habitaciones doble" path_to="/categoria/doble" />
      <Card type="category" title="Master" img_src="/img/cat/master.jpg" alt_value="Habitaciones master" path_to="/categoria/master" />
      <Card type="category" title="Standard" img_src="/img/cat/standard.jpg" alt_value="Habitaciones Standard" path_to="/categoria/standard" />
      <Card type="category" title="Basica" img_src="/img/cat/basica.jpg" alt_value="Habitaciones basica" path_to="/categoria/basica" />
    </HOME.UnitsCategories>
  );
}

export default CategoriesTemplate;
