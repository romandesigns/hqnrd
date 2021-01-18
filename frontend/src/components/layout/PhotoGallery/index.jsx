// Dependencies
import React from "react";

// Styled Components
import * as HOME from "./styles";

function Gallery() {
  return (
    <HOME.Gallery>
      <HOME.PhotoGallery>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_4.jpg" title="Banco en area publica"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_8.jpg" title="Banco en area publica"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_5.jpg" title="Banco en area publica"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_1.jpg" title="Banco en area publica"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_3.jpg" title="Banco en area publica"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_2.jpg" title="Banco en area publica"></HOME.GalleryFigure>
        </HOME.GalleryItem>
        <HOME.GalleryItem>
          <HOME.GalleryFigure img="/img/public-area/public-area_6.jpg" title="Banco en area publica"></HOME.GalleryFigure>
        </HOME.GalleryItem>
      </HOME.PhotoGallery>
      <HOME.GalleryDescription>
        <h3>Areas comunes</h3>
        <p>Todas nuestras areas comunes proveen el mismo nivel de calidad, tranquilidad y armonia.</p>
      </HOME.GalleryDescription>
    </HOME.Gallery>
  );
}

export default Gallery;
