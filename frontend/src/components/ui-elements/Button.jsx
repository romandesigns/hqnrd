//  Dependencies
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import { FaArrowLeft } from "react-icons/fa";

// Styled Components
import { Button } from "./styles";

const ButtonComponent = ({ children, path, type = "default" }) => {
  const history = useHistory();
  switch (type) {
    case "reservation":
      return (
        <Button bgColor="primary">
          <Link to="categories" smooth={true} duration={1000}>
            {children}
          </Link>
        </Button>
      );
    case "goback":
      return (
        <Button bgColor="dark" onClick={() => history.goBack()}>
          <FaArrowLeft />
          {children}
        </Button>
      );
    default:
      return <Button>Button</Button>;
  }
};

export default ButtonComponent;
