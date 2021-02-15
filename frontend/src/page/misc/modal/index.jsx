// Dependencies
import React from "react";
// Components
// Utilities
import { MetaTags } from "../../../utils/apps";
// Style Component
import * as MODAL from "./styles";

const Modal = (props) => {
  if (props.confirmation_email) {
    return <MODAL.Container confirmation>{props.children}</MODAL.Container>;
  }

  if (props.reservation_modal) {
    return (
      <MODAL.Container>
        <button onClick={props.close}>close</button>
        {props.children}
      </MODAL.Container>
    );
  }
};

export default Modal;
