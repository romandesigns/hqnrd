//  Dependencies
import React from "react";

// Styled Components
import * as HOME from "./styles";

function Features() {
  return (
    <HOME.Features>
      <HOME.Feature>
        <figure>
          <img src="/img/public-area/featured-room.jpg" alt="HQNRD Habitacion" />
          <HOME.FeatureFigCaption>
            <h3>Comodidad y Comforte</h3>
            <p>Habitaciones espaciosas equipadas con todo lo que puedas necesitar en un apartamento moderno.</p>
          </HOME.FeatureFigCaption>
        </figure>
      </HOME.Feature>
      <HOME.Feature>
        <figure>
          <img src="/img/public-area/roof-top.jpg" alt="HQNRD Roof Top" />
          <HOME.FeatureFigCaption>
            <h3>Area de Recreacion</h3>
            <p>Disfruta de hermosas atardeceres o anocheceres desde nuestro roof top.</p>
          </HOME.FeatureFigCaption>
        </figure>
      </HOME.Feature>
      <HOME.Feature>
        <figure>
          <img src="/img/public-area/security-camera.jpg" alt="HQNRD Camara de vigilancia" />
          <HOME.FeatureFigCaption>
            <h3>Servcio de vigilancia exterior</h3>
            <p>Vigilando por ti para proveerte el la tranquilidad que mereces.</p>
          </HOME.FeatureFigCaption>
        </figure>
      </HOME.Feature>
    </HOME.Features>
  );
}

export default Features;
