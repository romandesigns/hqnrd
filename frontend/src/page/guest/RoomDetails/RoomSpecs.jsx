// Dependencies
import React from "react";
// Style Component
import * as ROOM from "./styles";

const RoomSpecs = ({ room }) => {
  return (
    <>
      <p>
        <ROOM.Label>Precio:</ROOM.Label> ${room[0].price} / 1 Dia
      </p>
      <p>
        <ROOM.Label>Spacio:</ROOM.Label> 77.24 metros cuadrados
      </p>
      <p>
        <ROOM.Label>Cama:</ROOM.Label> {room[0].bedQty}
      </p>
      <p>
        <ROOM.Label>Sofa Cama:</ROOM.Label> {room[0].sofaBed === true ? "Disponible" : "No Disponible"}
      </p>
      <p>
        <ROOM.Label>Baño:</ROOM.Label> {room[0].sofaBed === true ? "Privado" : "Compartido"}
      </p>
      <p>
        <ROOM.Label>Tipo de Cama:</ROOM.Label> {room[0].bedType}
      </p>
      <p>
        <ROOM.Label>Capacidad:</ROOM.Label> {room[0].capacity} Personas
      </p>
    </>
  );
};

export default RoomSpecs;
