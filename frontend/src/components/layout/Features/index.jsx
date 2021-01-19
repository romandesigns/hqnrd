//  Dependencies
import React from "react";
// Styled Components
import * as HOME from "./styles";
// Components
import Card from "../../ui-elements/Card";

function Features() {
  return (
    <HOME.Features>
      <Card
        title="Comodidad y Comforte"
        description="Habitaciones espaciosas equipadas con todo lo que puedas necesitar en un apartamento moderno."
        img_src="/img/public-area/featured-room.jpg"
        alt_value="HQNRD Habitacion"
        type="featured"
      />
      <Card
        title="Area de Recreacion"
        description="Disfruta de hermosas atardeceres o anocheceres desde nuestro roof top."
        img_src="/img/public-area/roof-top.jpg"
        alt_value="HQNRD Roof Top"
        type="featured"
      />
      <Card
        title="Servcio de vigilancia exterior"
        description="Vigilando por ti para proveerte el la tranquilidad que mereces."
        img_src="/img/public-area/security-camera.jpg"
        alt_value="HQNRD Camara de vigilancia"
        type="featured"
      />
    </HOME.Features>
  );
}

export default Features;
