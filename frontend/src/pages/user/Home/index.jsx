// Dependencies
import React from "react";
import { Helmet } from "react-helmet";

// Styles components
import { HomeHeaderStyled } from "./styles";
import { MainStyled } from "../../../components/elements/styles";
// Components
import PageHeader from "../../../components/layout/Header";
import ButtonStyled from "../../../components/elements/Button";
import Features from "../../../components/layout/Features";
const Home = (props) => {
  return (
    <>
      <Helmet>
        <title>Hotel Quinto Nivel RD</title>
        <meta name="description" content="Hotel con moderna applicaciones ofreciendole la comodidad y seguridad que usted y los sullos merecen" />
        <meta property="og:title" content="Hotel Quinto Nivel RD" />
        <meta property="og:image" content="path/to/image.jpg" />
      </Helmet>
      <PageHeader>
        <HomeHeaderStyled>
          <img src="/logo512.png" alt="" />
          <h1>HOTEL QUINTO NIVEL RD</h1>
          <p>Como estar en casa!!!</p>
          <ButtonStyled type="rooms" btnprops={{ bg: "secondary", path: "/habitaciones" }}>
            Habitaciones
          </ButtonStyled>
          <ButtonStyled type="contact" btnprops={{ bg: "primary", path: "/contactos" }}>
            Contacto
          </ButtonStyled>
        </HomeHeaderStyled>
      </PageHeader>
      <MainStyled>
        <Features />
      </MainStyled>
    </>
  );
};

export default Home;
