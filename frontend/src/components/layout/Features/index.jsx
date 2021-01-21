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
        alt_value="HQNRD Habitacion"
        description="Habitaciones espaciosas equipadas con todo lo que puedas necesitar en un apartamento moderno."
        img_src="/img/public-area/featured-room.jpg"
        title="Comodidad y Comforte"
        type="featured"
      />
      <Card
        alt_value="HQNRD Roof Top"
        description="Disfruta de hermosas atardeceres o anocheceres desde nuestro roof top."
        img_src="/img/public-area/roof-top.jpg"
        title="Area de Recreacion"
        type="featured"
      />
      <Card
        alt_value="HQNRD Camara de vigilancia"
        description="Vigilando por ti para proveerte el la tranquilidad que mereces."
        img_src="/img/public-area/security-camera.jpg"
        title="Servcio de vigilancia exterior"
        type="featured"
      />
    </HOME.Features>
  );
}

export default Features;
