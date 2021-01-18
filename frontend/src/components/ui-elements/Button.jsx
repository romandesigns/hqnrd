//  Dependencies
import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";
// Utilities

// Styled Components
import { Button } from "./styles";

const ButtonComponent = ({ children, path, type = "default" }) => {
  switch (type) {
    case "reservation":
      return (
        <Button bgColor="primary">
          <Link to="categories" smooth={true} duration={1000}>
            {children}
          </Link>
        </Button>
      );
    default:
      return <Button>Button</Button>;
  }
};

export default ButtonComponent;
