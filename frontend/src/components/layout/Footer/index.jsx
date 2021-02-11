// Dependecies
import React from "react";
import { useLocation } from "react-router-dom";

// Style Components
import * as FOOTER from "./styles";
import Brand from "../../ui-elements/Brand";
// Components
import Address from "./Address";
import DevSignature from "./DevSignature";

const Footer = () => {
  const location = useLocation();
  let isAdminOrUserLogin = location.pathname.indexOf("registracion") > -1 ? true : location.pathname.indexOf("iniciar-session") > -1 ? true : false;
  // let isAdminOrUserLogin = location.pathname.indexOf("registracion") > -1 ? true : false;

  if (isAdminOrUserLogin === false) {
    return (
      <FOOTER.Container>
        <FOOTER.MainContent>
          <FOOTER.Brand>
            <Brand />
          </FOOTER.Brand>
          <FOOTER.Details>
            <Address />
          </FOOTER.Details>
          <DevSignature />
        </FOOTER.MainContent>
      </FOOTER.Container>
    );
  } else {
    return "";
  }
};

export default Footer;
