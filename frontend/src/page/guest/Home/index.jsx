//  Dependencies
import React from "react";

// Utilities
import { MetaTags } from "../../../utilities";

// Styled Components
import Header from "../../../components/layout/Header";
import { HeaderHomeWrapper } from "./styles";

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
        <HeaderHomeWrapper>
          <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
          <h1>Hotel Quinto Nivel RD</h1>
          <h2>Como estar en casa!!!</h2>
          <button>Crear Reservacion</button>
        </HeaderHomeWrapper>
      </Header>
      <main>Home Main Component</main>
    </>
  );
};

export default Home;
