//  Dependencies
import React from "react";
import { useHistory, Link as LinkPath } from "react-router-dom";
import { Link } from "react-scroll";
import { FaArrowLeft, FaWhatsapp, FaFacebookF, FaGoogle, FaEnvelope, FaUpload, FaTrashAlt } from "react-icons/fa";

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
            <FaEnvelope />
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
          <LinkPath to="/huesped/iniciar-session">
            <FaEnvelope />
            {children}
          </LinkPath>
        </Button>
      );

    case "upload":
      return (
        <Button bgColor="success">
          <FaUpload />
          {children}
        </Button>
      );

    case "delete":
      return (
        <Button bgColor="danger">
          <FaTrashAlt />
          {children}
        </Button>
      );

    case "iniciar-session":
      return (
        <Button bgColor="correo">
          <LinkPath to="/huesped/iniciar-session">{children}</LinkPath>
        </Button>
      );

    default:
      return <Button>Button</Button>;
  }
};

export default ButtonComponent;
