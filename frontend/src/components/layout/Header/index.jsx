// Dependencies
import React from "react";
// Styled Components
import { HeaderPageStyled, HeaderPageContentStyled } from "./styles";
import Navbar from "../Navbar";

const HeaderPage = (props) => {
  return (
    <HeaderPageStyled img_src={props.img_src}>
      <Navbar />
      <HeaderPageContentStyled>{props.children}</HeaderPageContentStyled>
    </HeaderPageStyled>
  );
};

export default HeaderPage;
