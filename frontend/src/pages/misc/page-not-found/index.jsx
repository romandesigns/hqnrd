// Dependencies
import React from "react";

// Styles components
import { PaseNotFoundStyled, ContentWrapper } from "./styles";

// Components'
import Button from "../../../components/elements/Button";

const Home = (props) => {
  return (
    <>
      <PaseNotFoundStyled>
        <ContentWrapper>
          <p>:(</p>
          <h1>Ooops! creo que la pagina introducida no existe</h1>
          <Button type="goback" btnprops={{ bg: "dark", path: "/" }}>
            Regresar al inicio
          </Button>
        </ContentWrapper>
      </PaseNotFoundStyled>
    </>
  );
};

export default Home;
