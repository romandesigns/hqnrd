// Dependencies
import React from "react";

// Styled Components
import { HeaderPageStyled, HeaderPageContentStyled } from "./styles";
import Navbar from "../Navbar";

const HeaderPage = (props) => {
  return (
    <HeaderPageStyled>
      <Navbar />
      <HeaderPageContentStyled>{props.children}</HeaderPageContentStyled>
    </HeaderPageStyled>
  );
};

export default HeaderPage;
