// Dependencies
import React from "react";
import { useLocation } from "react-router-dom";

// Styled Components

// Jsx Component
import Footer from "./FooterTemplate";

const FooterComponent = () => {
  const location = useLocation();
  let bool = location.pathname === "/admin" ? false : location.pathname === "/crear/admin" ? false : true;
  return bool && <Footer />;
};

export default FooterComponent;
