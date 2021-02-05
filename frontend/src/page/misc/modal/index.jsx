// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Components
// Utilities
import { MetaTags } from "../../../utils/apps";

// Style Component

const styles = {
  body: {
    padding: "4rem",
    backgroundColor: "red",
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflowY: "hidden",
  },
  children: {
    color: "white",
  },
};
const Modal = ({ open, children, close }) => {
  if (!open) return null;
  return (
    <div style={styles.body}>
      <button onClick={close}>close</button>
      <div style={styles.children}>{children}</div>
    </div>
  );
};

export default Modal;
