// Dependencies
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Components
import Header from "../../../components/layout/Header";
import * as PERFIL from "../../../components/layout/Header/styles";
import Brand from "../../../components/ui-elements/Brand";
// Styled components
import * as FORM from "./styles.js";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";

/**
 * @author
 * @function  GuesProfile
 **/

const GuesProfile = (props) => {
  return (
    <>
      {/* Page Header */}
      <Header img_src={""} room="detail">
        <PERFIL.HeaderWrapper>{<Brand heading="h1" />}</PERFIL.HeaderWrapper>
      </Header>
      <h1>GuesProfile</h1>
    </>
  );
};

export default GuesProfile;
