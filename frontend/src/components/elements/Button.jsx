// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ButtonStyled, ButtonSubmitStyled } from "../elements/styles";

const Button = (props) => {
  switch (props.type) {
    case "rooms":
      return (
        <ButtonStyled bg={props.btnprops.bg}>
          <Link to={props.btnprops.path}>{props.children}</Link>
        </ButtonStyled>
      );
    case "contact":
      return (
        <ButtonStyled bg={props.btnprops.bg}>
          <Link to={props.btnprops.path}>{props.children}</Link>
        </ButtonStyled>
      );
    case "goback":
      return (
        <ButtonStyled bg={props.btnprops.bg}>
          <Link to={props.btnprops.path}>
            <IoMdArrowRoundBack />
            {props.children}
          </Link>
        </ButtonStyled>
      );
    case "submit":
      return (
        <ButtonSubmitStyled bg={props.btnprops.bg}>
          <button type="submit">{props.val}</button>
        </ButtonSubmitStyled>
      );
    default:
      return (
        <ButtonStyled>
          <Link to="#">Default Btn</Link>
        </ButtonStyled>
      );
  }
};

export default Button;
