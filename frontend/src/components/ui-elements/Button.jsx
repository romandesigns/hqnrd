//  Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Utilities

// Styled Components
import { Button } from "./styles";

const ButtonComponent = ({ children, path, type = "default" }) => {
  switch (type) {
    case "reservation":
      return (
        <Button bgColor="primary">
          <Link to={path}>{children}</Link>
        </Button>
      );
    default:
      return <Button>Button</Button>;
  }
};

export default ButtonComponent;
