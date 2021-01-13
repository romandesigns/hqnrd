// Dependencies
import React from "react";

// Styled Components
import { HeaderPageStyled } from "./styles";
import Navbar from "../Navbar";

const HeaderPage = (props) => {
  return (
    <HeaderPageStyled>
      <Navbar />
      {props.children}
    </HeaderPageStyled>
  );
};

export default HeaderPage;
