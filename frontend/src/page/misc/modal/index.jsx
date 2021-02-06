// Dependencies
import React from "react";
// Components
// Utilities
import { MetaTags } from "../../../utils/apps";
// Style Component
import * as MODAL from "./styles";

const Modal = ({ open, children, close }) => {
  if (!open) return null;
  return (
    <MODAL.Container>
      <button onClick={close}>close</button>
      {children}
    </MODAL.Container>
  );
};

export default Modal;
