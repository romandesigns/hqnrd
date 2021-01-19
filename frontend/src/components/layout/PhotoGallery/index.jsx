// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styled Components
import * as HOME from "./styles";

function Gallery() {
  return (
    <HOME.Gallery>
      <HOME.PhotoGallery>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_4.jpg" title="Area Comun - Pasillo"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_8.jpg" title="Area Comun - Intercom"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_5.jpg" title="Area Comun - Pasillo"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_1.jpg" title="Area Comun - Pasillo"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_3.jpg" title="Area Comun - Edificio Lateral"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_2.jpg" title="Area Comun - Escalera"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_6.jpg" title="Area Comun - Pasillo"></HOME.GalleryFigure>
        </HOME.GalleryItem>
      </HOME.PhotoGallery>
      <HOME.GalleryDescription>
        <h3>Areas comunes</h3>
        <p>
          Todas nuestras areas comunes proveen el mismo nivel de calidad, tranquilidad y armonia. <Link to="/hacerca">Ver mas...</Link>
        </p>
      </HOME.GalleryDescription>
    </HOME.Gallery>
  );
}

export default Gallery;
