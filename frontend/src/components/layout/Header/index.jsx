// Dependencies
import React from "react";
// Components
import Navbar from "../Navbar";
// Styled Components
import { HeaderPageStyled, HeaderPageContentStyled } from "./styles";

const HeaderPage = (props) => {
  return (
    <HeaderPageStyled img_src={props.img_src}>
      <Navbar />
      <HeaderPageContentStyled>{props.children}</HeaderPageContentStyled>
    </HeaderPageStyled>
  );
};

export default HeaderPage;
