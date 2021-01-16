//  Dependencies
import React from "react";
import { NavLink } from "react-router-dom";

// Utilities
import { MetaTags } from "../../../utils/apps";

// Styled Components
import * as HOME from "./styles";

// Components
import Header from "../../../components/layout/Header";
import Button from "../../../components/ui-elements/Button";

const Home = () => {
  return (
    <>
      <MetaTags
        pageTitle="Inicio"
        pageDescription="Mas que un hotel, nosotros te proveemos la seguridad, comforte y la mejor experiencia posible; Habitaciones modernas y amplias, sistema de seguridad disponible y mucho mas."
        ogTitle="Hotel Quinto Nivel RD"
        ogDescription="Disfruta de las acomodidades que te ofrecemos; Habitaciones amplias y modernas, Smart TV, control de seguridad y mucho mas"
        ogImagePath="path/to/image.jpg"
      />
      <Header>
        <HOME.Wrapper>
          <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
          <h1>Hotel Quinto Nivel RD</h1>
          <p>Como estar en casa!!!</p>
          <Button path="/reservacion" type="reservation">
            Crear Reservacion
          </Button>
        </HOME.Wrapper>
      </Header>
      <HOME.Main>
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
        <HOME.Units>
          <header>
            <nav>
              <ul>
                <li>
                  <button>Categorias</button>
                </li>
                <li>
                  <button>Habitaciones</button>
                </li>
              </ul>
            </nav>
          </header>
          <section>
            <article>Familiar</article>
            <article>Doble Cama</article>
            <article>Habitacione Doble</article>
            <article>Habitacion Basica</article>
          </section>
        </HOME.Units>
      </HOME.Main>
    </>
  );
};

export default Home;
