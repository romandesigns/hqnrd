// Dependencies
import React from "react";
// Components
import Modal from "../modal";
import Button from "../../../components/ui-elements/Button";
// Utilities
import { MetaTags } from "../../../utils/apps";
// Style Component
import * as MODAL from "./styles";

const EMAIL_CONFIRMED = () => {
  return (
    <Modal confirmation_email>
      <MODAL.Container>
        <p>Your email has been confirmed</p>
        <Button type="iniciar-session">Iniciar session</Button>
      </MODAL.Container>
    </Modal>
  );
};

export default EMAIL_CONFIRMED;
