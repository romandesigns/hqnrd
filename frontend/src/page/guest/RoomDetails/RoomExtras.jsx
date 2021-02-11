// Dependencies
import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

// Style Component
import * as ROOM from "./styles";

const RoomExtras = ({ room }) => {
  return (
    <ROOM.ExtrasWrapper>
      <ul>
        <li>
          <span>{room[0].features.closet ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Closet</span>
        </li>
        <li>
          <span>{room[0].features.wifi ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Wifi</span>
        </li>
        <li>
          <span>{room[0].features.refregirator ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Refrigerador</span>
        </li>
        <li>
          <span>{room[0].features.smartTv ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Smart Tv</span>
        </li>
        <li>
          <span>{room[0].features.kitchenette ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Cocineta</span>
        </li>
      </ul>
      <ul>
        <li>
          <span>{room[0].features.balcony ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Balcon</span>
        </li>
        <li>
          <span>{room[0].features.airConditioning ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Aire Acondicionado</span>
        </li>
        <li>
          <span>{room[0].features.itercom ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Intercom</span>
        </li>
        <li>
          <span>{room[0].features.ceilingFan ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Abanico de Techo</span>
        </li>
        <li>
          <span>{room[0].features.roofTopAllowed ? <FaCheck color="#128c7e" /> : <FaTimes color="#be316e" />}</span>
          <span>Accesso al Roof Top</span>
        </li>
      </ul>
    </ROOM.ExtrasWrapper>
  );
};

export default RoomExtras;
