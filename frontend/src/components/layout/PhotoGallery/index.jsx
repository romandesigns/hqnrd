// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import * as GALLERY from "./styles";

function Gallery() {
  return (
    <GALLERY.Container>
      <GALLERY.GalleryList>
        <GALLERY.GalleryItem>
          <GALLERY.GalleryFigure img="/img/public-area/public-area_4.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
        </GALLERY.GalleryItem>
        <GALLERY.GalleryItem>
          <GALLERY.GalleryFigure img="/img/public-area/public-area_8.jpg" title="Area Comun - Intercom"></GALLERY.GalleryFigure>
        </GALLERY.GalleryItem>
        <GALLERY.GalleryItem>
          <GALLERY.GalleryFigure img="/img/public-area/public-area_5.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
        </GALLERY.GalleryItem>
        <GALLERY.GalleryItem>
          <GALLERY.GalleryFigure img="/img/public-area/public-area_1.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
        </GALLERY.GalleryItem>
        <GALLERY.GalleryItem>
          <GALLERY.GalleryFigure img="/img/public-area/public-area_3.jpg" title="Area Comun - Edificio Lateral"></GALLERY.GalleryFigure>
        </GALLERY.GalleryItem>
        <GALLERY.GalleryItem>
          <GALLERY.GalleryFigure img="/img/public-area/public-area_2.jpg" title="Area Comun - Escalera"></GALLERY.GalleryFigure>
        </GALLERY.GalleryItem>
        <GALLERY.GalleryItem>
          <GALLERY.GalleryFigure img="/img/public-area/public-area_6.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
        </GALLERY.GalleryItem>
      </GALLERY.GalleryList>
      <GALLERY.GalleryDescription>
        <h3>Areas comunes</h3>
        <p>
          Todas nuestras areas comunes proveen el mismo nivel de calidad, tranquilidad y armonia. <Link to="/hacerca">Ver mas...</Link>
        </p>
      </GALLERY.GalleryDescription>
    </GALLERY.Container>
  );
}

export default Gallery;
