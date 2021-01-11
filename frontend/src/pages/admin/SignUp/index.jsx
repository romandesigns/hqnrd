// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../../components/elements/Button";
import { Helmet } from "react-helmet";
import { AiOutlineCloudUpload } from "react-icons/ai";

// Styled Components
import { FormMainStyled, FormHeaderStyled, FormContentStyled } from "../../../global-styles/forms";
import { FormInputTwoColStyled, FormInputFileStyled } from "./styles.js";

// Constants
import * as CONST from "../../../constants/index.js";

const AdminLoginForm = () => {
  // Form Data
  const [formData, setFormData] = useState({
    idcard: "",
    firstname: "",
    lastname: "",
    dob: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  // Handle form data
  const handleForm = async (e) => {
    e.preventDefault();
    let response = await axios.post("/create/admin", formData);
    console.log(response);
  };

  // convert file to binary
  const toBase64 = (file) => {
    if (file.type === "image/jpeg" || file.type === "image/jpg") {
      const reader = new FileReader();
      reader.onload = function () {
        setFormData({ idcard: reader.result });
      };
      if (file) reader.readAsDataURL(file);
    } else {
      //!USE NOTIFICATION LIBRARY
      return alert(CONST.WRONG_FILE_FORMAT);
    }
  };
  // Form JSX
  return (
    <>
      <Helmet>
        <title>Hotel Quinto Nivel RD | Registracion</title>
        <meta name="description" content="Registracion de usuario" />
        <meta property="og:title" content="Hotel Quinto Nivel RD | Registracion" />
        <meta property="og:image" content="path/to/image.jpg" />
      </Helmet>
      <FormMainStyled SignUp>
        <FormContentStyled>
          <FormHeaderStyled>
            <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
            <h1>Hotel Quinto Nivel RD</h1>
            <p>Como estar en casa !!!</p>
          </FormHeaderStyled>

          <form onSubmit={handleForm}>
            <FormInputFileStyled htmlFor="idcard">
              <p>
                Foto de Identidad <AiOutlineCloudUpload />
              </p>
              {/* <input type="file" name="idcard" id="idcard" onChange={(e) => setFormData({ ...formData, idcard: e.target.files[0] })} /> */}
              <input type="file" name="idcard" id="idcard" onChange={(e) => toBase64(e.target.files[0])} />
            </FormInputFileStyled>

            <FormInputTwoColStyled>
              <label htmlFor="firstname">
                Nombre
                <input type="text" name="firstname" id="firstname" onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
              </label>

              <label htmlFor="lastname">
                Apellido
                <input type="text" name="lastname" id="lastname" onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
              </label>
            </FormInputTwoColStyled>

            <label htmlFor="dob">
              Fecha de Nacimiento
              <input type="date" name="dob" id="dob" onChange={(e) => setFormData({ ...formData, dob: e.target.value })} />
            </label>

            <label htmlFor="email">
              Correco Electronico
              <input type="email" name="email" id="email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </label>

            <label htmlFor="phone">
              Telefono
              <input
                type="tel"
                name="phone"
                id="phone"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="###-###-####"
              />
            </label>

            <label htmlFor="password">Contraseña</label>

            <input type="password" name="password" id="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />

            <Button type="submit" val="Registrar" btnprops={{ bg: "primary" }} />
          </form>
        </FormContentStyled>
      </FormMainStyled>
    </>
  );
};

export default AdminLoginForm;
