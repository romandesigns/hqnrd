// Dependencies
import React from "react";

// Styled Components
import * as HOME from "./styles";

function Gallery() {
  return (
    <HOME.PhotoGallery>
      <HOME.GalleryItem>
        <HOME.GalleryFifure img="/img/public-area/public-area_4.jpg" title="Banco en area publica"></HOME.GalleryFifure>
      </HOME.GalleryItem>
      <HOME.GalleryItem>
        <HOME.GalleryFifure img="/img/public-area/public-area_8.jpg" title="Banco en area publica"></HOME.GalleryFifure>
      </HOME.GalleryItem>
      <HOME.GalleryItem>
        <HOME.GalleryFifure img="/img/public-area/public-area_5.jpg" title="Banco en area publica"></HOME.GalleryFifure>
      </HOME.GalleryItem>
      <HOME.GalleryItem>
        <HOME.GalleryFifure img="/img/public-area/public-area_1.jpg" title="Banco en area publica"></HOME.GalleryFifure>
      </HOME.GalleryItem>
      <HOME.GalleryItem>
        <HOME.GalleryFifure img="/img/public-area/public-area_3.jpg" title="Banco en area publica"></HOME.GalleryFifure>
      </HOME.GalleryItem>
      <HOME.GalleryItem>
        <HOME.GalleryFifure img="/img/public-area/public-area_2.jpg" title="Banco en area publica"></HOME.GalleryFifure>
      </HOME.GalleryItem>
      <HOME.GalleryItem>
        <HOME.GalleryFifure img="/img/public-area/public-area_6.jpg" title="Banco en area publica"></HOME.GalleryFifure>
      </HOME.GalleryItem>
    </HOME.PhotoGallery>
  );
}

export default Gallery;
