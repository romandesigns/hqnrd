// Styled Components
import * as HOME from "./styles";
// UI Components
import Card from "../../ui-elements/Card";
// API
import { categories } from "../../../data";

function CategoriesTemplate() {
  return (
    <HOME.UnitsCategories>
      {categories.map((category, index) => (
        <Card
          key={index}
          type="category"
          bg="light-gray"
          heading={category.alt}
          img_src={category.img_uri}
          alt_value={category.alt}
          path_to={category.path_to}
        />
      ))}
    </HOME.UnitsCategories>
  );
}

export default CategoriesTemplate;
