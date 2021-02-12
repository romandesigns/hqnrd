//  Dependencies
import React from "react";
import { useHistory, Link as LinkPath } from "react-router-dom";
import { Link } from "react-scroll";
import { FaArrowLeft, FaWhatsapp, FaFacebookF, FaGoogle } from "react-icons/fa";
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

    case "google":
      return (
        <Button bgColor="google">
          <a href="/google">
            <FaGoogle />
            {children}
          </a>
        </Button>
      );

    case "facebook":
      return (
        <Button bgColor="facebook">
          <a href="/facebook">
            <FaFacebookF />
            {children}
          </a>
        </Button>
      );

    case "usar-correo":
      return (
        <Button bgColor="correo">
          <LinkPath to="/registracion">
            <BsEnvelope />
            {children}
          </LinkPath>
        </Button>
      );

    default:
      return <Button>Button</Button>;
  }
};

export default ButtonComponent;
