// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import * as HOME from "./styles";

function CategoriesTemplate() {
  return (
    <HOME.UnitsCategories>
      <HOME.UnitsCategory>
        <Link to="/familiar">
          <h4>Habitacion Familiar</h4>
        </Link>
      </HOME.UnitsCategory>
      <HOME.UnitsCategory>
        <Link to="/doble-cama">
          <h4>Habitacion Doble Cama</h4>
        </Link>
      </HOME.UnitsCategory>
      <HOME.UnitsCategory>
        <Link to="/doble-habitaciones">
          <h4>Doble Habitaciones</h4>
        </Link>
      </HOME.UnitsCategory>
      <HOME.UnitsCategory>
        <Link to="/basica">
          <h4>Habitaciones Basica</h4>
        </Link>
      </HOME.UnitsCategory>
    </HOME.UnitsCategories>
  );
}

export default CategoriesTemplate;
