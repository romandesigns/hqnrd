// Dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Styled Components
import * as CARD from "./styles";

function Card({ type, heading = "", description = "", img_src = "", alt_value = "", path_to = "", price = "", category = "", capacity = "", bg = "" }) {
  const [cardType, setCardType] = useState(type);

  useEffect(() => {
    setCardType(type);
  }, [type]);

  const Featured = (
    <CARD.FeatureFigCaption>
      <h3>{heading}</h3>
      <p>{description}</p>
    </CARD.FeatureFigCaption>
  );

  const Category = (
    <CARD.FeatureFigCaption>
      <h3>{heading}</h3>
    </CARD.FeatureFigCaption>
  );

  const Room = (
    <CARD.FeatureFigCaption>
      <CARD.RoomDetails>
        <CARD.Details>
          <CARD.RoomDetailPrice>$ {price}</CARD.RoomDetailPrice>
          <strong>Capacidad:</strong> {capacity} Personas
          <br />
          <strong>Categoria:</strong> {category}
        </CARD.Details>
      </CARD.RoomDetails>
    </CARD.FeatureFigCaption>
  );

  if (cardType === "featured") {
    return (
      <CARD.Feature bg={bg}>
        {Featured}
        <figure>
          <span>
            <img src={img_src} alt={alt_value} />
          </span>
        </figure>
      </CARD.Feature>
    );
  }

  if (cardType === "category") {
    return (
      <CARD.Feature bg={bg}>
        <Link to={path_to}>
          {Category}
          <figure>
            <span>
              <img src={img_src} alt={alt_value} />
            </span>
          </figure>
        </Link>
      </CARD.Feature>
    );
  }

  if (cardType === "room") {
    return (
      <CARD.Feature bg={bg}>
        <Link to={path_to}>
          {Room}
          <figure>
            <span>
              <img src={img_src} alt={alt_value} />
            </span>
          </figure>
        </Link>
      </CARD.Feature>
    );
  }
}

export default Card;
