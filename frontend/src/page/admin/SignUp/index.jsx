// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// Components
import Brand from "../../../components/ui-elements/Brand";
// Styled components
import * as FORM from "./styles.js";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";

const Login = () => {
  const history = useHistory();

  // User registration form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passCheck: "",
    name: "",
    lastName: "",
    phone: "",
  });

  // Handling user submission data
  const handleSubmit = function (e) {
    e.preventDefault();
    if (formData.password !== formData.passCheck) return toast.dark("Las contraseñas no son identicas, trate de nuevo!");
    POSTData();
  };

  const POSTData = async () => {
    formData.passCheck = undefined;
    let res = await axios.post("/create/admin", formData);
    console.log();

    if (res.data.error) {
      return toast.error(res.data.error);
    }

    if (res.status === 200) {
      history.push("/perfil");
    }
    setFormData({});
  };

  return (
    <>
      <FORM.Container>
        <FORM.Wrapper>
          <FORM.Header>
            <Brand />
          </FORM.Header>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Informacion de Cuenta</legend>

              {/* Username */}
              <input
                type="text"
                name="username"
                placeholder="Nombre de Usuario"
                value={formData.user}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                required
              />

              {/* User email */}
              <input
                type="email"
                name="email"
                placeholder="Correo Electronico"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />

              {/* Password */}
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />

              {/* Password Verification */}
              <input
                type="password"
                name="passCheck"
                placeholder="Verifique Contraseña"
                value={formData.passCheck}
                onChange={(e) => setFormData({ ...formData, passCheck: e.target.value })}
                required
              />
            </fieldset>
            <fieldset>
              <legend>Informacion de Personal</legend>

              {/* User name */}
              <input type="text" name="name" placeholder="Nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />

              {/* User last name */}
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />

              {/* User Tel */}
              <input
                type="tel"
                name="phone"
                placeholder="Numero de telefono"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </fieldset>
            <button style={BTN.btn} type="submit" onClick={handleSubmit}>
              Listo!
            </button>
          </form>
          <div>
            <Link to="/huesped/iniciar-session">Iniciar Session</Link>
          </div>
        </FORM.Wrapper>
      </FORM.Container>
      <ToastContainer />
    </>
  );
};

export default Login;
