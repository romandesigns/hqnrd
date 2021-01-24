//  Dependencies
import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import { FaArrowLeft, FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

// Styled Components
import { Button } from "./styles";

const ButtonComponent = ({ children, path, type = "default" }) => {
  const history = useHistory();
  switch (type) {
    case "reservation":
      return (
        <Button bgColor="darker-primary">
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
    case "whatsapp":
      return (
        <Button bgColor="green">
          <a href="tel:+8097537500">
            <FaWhatsapp />
            {children}
          </a>
        </Button>
      );
    case "email":
      return (
        <Button bgColor="darker-primary">
          <a href="mailto:hotelquintonivelrd@gmail.com">
            <BsEnvelope />
            {children}
          </a>
        </Button>
      );
    default:
      return <Button>Button</Button>;
  }
};

export default ButtonComponent;
