import React from "react";
import { NavToggleBtn } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg/";

const ToggleBtn = ({ toggle, setToggle }) => {
  return (
    <NavToggleBtn onClick={() => setToggle(!toggle)}>
      <p>MENU</p>
      {/* <div>
        <span />
        <span />
        <span />
      </div> */}
      {!toggle ? <CgClose style={{ color: "#9fa936 " }} /> : <AiOutlineMenu />}
    </NavToggleBtn>
  );
};
export default ToggleBtn;
