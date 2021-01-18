// Dependencies
import React, { useState, useEffect } from "react";

// Components
import Menu from "./CategoriesTemplate";
import Habitaciones from "./HabitacionesTemplate";

// Styled Components
import * as HOME from "./styles";

function Categories() {
  const [menu, setMenu] = useState("category");
  let menuContent = menu === "category" ? <Menu /> : <Habitaciones />;

  useEffect(() => {
    setMenu("category");
  }, []);

  return (
    <HOME.Units id="categories">
      <HOME.UnitsHeader>
        <HOME.UnitsHeaderNav>
          <ul>
            <li>
              <button onClick={() => setMenu("category")} style={menu === "category" ? { backgroundColor: "#31b0be" } : { backgroundColor: "#1873b0" }}>
                Categorias
              </button>
            </li>
            <li>
              <button onClick={() => setMenu("rooms")} style={menu === "rooms" ? { backgroundColor: "#31b0be" } : { backgroundColor: "#1873b0" }}>
                Habitaciones
              </button>
            </li>
          </ul>
        </HOME.UnitsHeaderNav>
      </HOME.UnitsHeader>
      {menuContent}
    </HOME.Units>
  );
}

export default Categories;
