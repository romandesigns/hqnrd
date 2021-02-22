// Dependencies
import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Components
import Brand from "../../../components/ui-elements/Brand";
// Styled components
import * as FORM from "./styles.js";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";

const SignIn = () => {
  const { role } = useParams();
  const history = useHistory();

  const [credentials, setCredentials] = useState();

  if (role !== "admin" && role !== "huesped") history.push("/");

  // User registration form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // Handling user submission data
  const handleSubmit = function (e) {
    e.preventDefault();
    POSTData();
  };

  const POSTData = async () => {
    let { status, data } = await axios.post("/sigin/user", formData);
    window.localStorage.setItem("user", JSON.stringify(data));

    if (status === 200) {
      history.push("/huesped/perfil");
      setFormData({
        email: "",
        password: "",
        role: "",
      });
      return;
    }
  };
  return (
    <>
      <FORM.Container>
        <FORM.OutterWrapper>
          <Brand />
          <FORM.Wrapper>
            <FORM.Header>
              <h2>Iniciar Session</h2>
              <Link to="/">
                <FaHome /> Inicio
              </Link>
            </FORM.Header>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              {role === "admin" && (
                <select name="role" id="role" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })}>
                  <option value="">Seleccione Cargo</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="maintnance">Mantenimiento</option>
                  <option value="owner">Propietario</option>
                </select>
              )}
              <button style={BTN.btn} type="submit">
                Entrar
              </button>
            </form>
            <div>
              <Link to="/recuperar-clave">Olvide Contraseña</Link>
              <Link to="/registracion">Crear Cuenta</Link>
            </div>
          </FORM.Wrapper>
        </FORM.OutterWrapper>
      </FORM.Container>
      <ToastContainer />
    </>
  );
};

export default SignIn;
