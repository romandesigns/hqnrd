// Dependencies
import React from "react";
// Components
import Navbar from "../Navbar";
// Styled Components
import { HeaderPageStyled } from "./styles";

const HeaderPage = (props) => {
  return (
    <HeaderPageStyled img_src={props.img_src} room={props.room}>
      <Navbar />
      {props.children}
    </HeaderPageStyled>
  );
};

export default HeaderPage;
