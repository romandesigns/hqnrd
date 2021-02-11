//  Dependencies
import React from "react";
// Utilities
import { MetaTags } from "../../../utils/apps";
// Styled Components
import * as HOME from "./styles";
// Components
import Header from "../../../components/layout/Header";
import Features from "../../../components/layout/Features";
import Gallery from "../../../components/layout/PhotoGallery";
import Categories from "../../../components/layout/Categories";
import Button from "../../../components/ui-elements/Button";

const Home = () => {
  return (
    <>
      {/* Home Page metadata */}
      <MetaTags
        pageTitle="Inicio"
        pageDescription="Mas que un hotel, nosotros te proveemos la seguridad, comforte y la mejor experiencia posible; Habitaciones modernas y amplias, sistema de seguridad disponible y mucho mas."
        ogTitle="Hotel Quinto Nivel RD"
        ogDescription="Disfruta de las acomodidades que te ofrecemos; Habitaciones amplias y modernas, Smart TV, control de seguridad y mucho mas"
        ogImagePath="path/to/image.jpg"
      />

      {/* Home Page Header Component */}
      <Header img_src="/img/hero-image.jpg">
        <HOME.Content>
          <HOME.Wrapper>
            <div>
              <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
              <div>
                <h1>Hotel Quinto Nivel RD</h1>
                <p>Como estar en casa!!!</p>
              </div>
              <Button path="/reservacion" type="reservation">
                Crear Reservacion
              </Button>
            </div>
          </HOME.Wrapper>
        </HOME.Content>
      </Header>

      {/* Home Page Components */}
      <HOME.Main>
        <Features />
        <Gallery />
        <Categories />
      </HOME.Main>
    </>
  );
};

export default Home;
