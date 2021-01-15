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
        <Button>
          <Link>{children}</Link>
        </Button>
      );
    default:
      return <Button>Button</Button>;
  }
};

export default ButtonComponent;
