//  Dependencies
import React from "react";

// Styled Components
import Header from "../../../components/layout/Header";
import { HeaderHomeWrapper } from "./styles";

const Home = () => {
  return (
    <>
      <Header>
        <HeaderHomeWrapper>
          <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
          <h1>Hotel Quinto Nivel RD</h1>
          <h2>Como estar en casa!!!</h2>
          <button>Crear Reservacion</button>
        </HeaderHomeWrapper>
      </Header>
      <main></main>
    </>
  );
};

export default Home;
