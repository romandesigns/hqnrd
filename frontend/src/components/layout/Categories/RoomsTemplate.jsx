// Styled Components
import * as ROOMS from "./styles";
// UI Components
import Card from "../../ui-elements/Card";
// API
import { rooms } from "../../../data";

function HabitacionesTemplate() {
  return (
    <ROOMS.Rooms>
      <ROOMS.Filter>
        <select name="cars" id="cars">
          <option value="">Typo de Habitacion</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars">
          <option value="">Rango de Precio</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars">
          <option value="">Capacidad de Personas</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </ROOMS.Filter>
      <ROOMS.RoomsList>
        {rooms.map((room, index) => (
          <Card
            key={index}
            type="room"
            unit={room.unit}
            price={room.price}
            capacity={room.capacity}
            category={room.category.replace("-", " ").charAt(0).toUpperCase() + room.category.replace("-", " ").slice(1)}
            img_src={room.img.hero}
            alt_value={`Habitacion ${room.category}`}
            path_to={`/categoria/${room.category}/habitacion/${room.unit}`}
          />
        ))}
      </ROOMS.RoomsList>
    </ROOMS.Rooms>
  );
}

export default HabitacionesTemplate;
