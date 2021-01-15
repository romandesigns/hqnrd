//  Dependencies
import React from "react";

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
          <h2>Como estar en casa!!!</h2>
          <Button>Crear Reservacion</Button>
        </HOME.Wrapper>
      </Header>
      <HOME.Main>
        <HOME.Features>
          <HOME.Feature>
            <figure>
              <img src="/img/public-area/room-01.jpg" alt="HQNRD Habitacion" />
              <HOME.FeatureFigCaption>
                <h3>Comodidad y Comforte</h3>
                <p>Esta es una breve description de la habitaciones que provee el hotel quinto nivel rd</p>
              </HOME.FeatureFigCaption>
            </figure>
          </HOME.Feature>
        </HOME.Features>
        <section className="reviews"></section>
        <section className="unites"></section>
      </HOME.Main>
    </>
  );
};

export default Home;
