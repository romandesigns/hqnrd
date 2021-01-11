// Dependencies
import React, { useState } from "react";

// Styles components
import { HeaderStyled, HeaderContentWrapper } from "./styles";

// Components
import Navbar from "../Navbar";
import NavBarToggle from "../../elements/ToggleBtn";

const HeaderComponent = (props) => {
  const [toggle, setToggle] = useState();

  return (
    <HeaderStyled>
      <NavBarToggle toggle={toggle} setToggle={setToggle} />
      <Navbar toggleNavBar={toggle} />
      <HeaderContentWrapper>{props.children}</HeaderContentWrapper>
    </HeaderStyled>
  );
};

export default HeaderComponent;
