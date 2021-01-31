// Dependencies
import React from "react";
import { Link } from "react-router-dom";
// Styled Components
import * as GALLERY from "./styles";
// API
import { gallery } from "../../../data";

function Gallery() {
  return (
    <GALLERY.Container>
      <GALLERY.GalleryList>
        {gallery.map((galleryImage, index) => (
          <GALLERY.GalleryItem key={index}>
            <GALLERY.GalleryFigure img={galleryImage.img_uri} title={galleryImage.title}></GALLERY.GalleryFigure>
          </GALLERY.GalleryItem>
        ))}
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
