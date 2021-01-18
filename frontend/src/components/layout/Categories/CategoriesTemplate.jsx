// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import * as HOME from "./styles";

function CategoriesTemplate() {
  return (
    <HOME.UnitsCategories>
      <HOME.UnitsCategory>
        <Link to="/familiar">Habitacion Familiar</Link>
      </HOME.UnitsCategory>
      <HOME.UnitsCategory>
        <Link to="/doble-cama">Habitacion Doble Cama</Link>
      </HOME.UnitsCategory>
      <HOME.UnitsCategory>
        <Link to="/doble-habitaciones">Doble Habitaciones</Link>
      </HOME.UnitsCategory>
      <HOME.UnitsCategory>
        <Link to="/basica">Habitaciones Basica</Link>
      </HOME.UnitsCategory>
    </HOME.UnitsCategories>
  );
}

export default CategoriesTemplate;
