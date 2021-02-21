// Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FaHome } from "react-icons/fa";

// Components
import Brand from "../../../components/ui-elements/Brand";
// Styled components
// import * as FORM from "./styles.js";
import * as FORM from "./styles";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";

const SignUp = () => {
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
    if (formData.password !== formData.passCheck) return toast.warning("Las contraseñas no son identicas, trate de nuevo!");
    POSTData();
  };

  const POSTData = async () => {
    formData.passCheck = undefined;
    let res = await axios.post("/create/user", formData);
    if (res.data.error) {
      return toast.error("Se a encontrado un error, revise la informacion proveida y trate nuevamente");
    }

    if (res.status === 200) {
      // history.push("/perfil");
      setFormData({
        username: "",
        email: "",
        password: "",
        passCheck: "",
        name: "",
        lastName: "",
        phone: "",
      });
      toast.info(`Revise su correo ${formData.email} y confirme su nueva cuenta`, {
        autoClose: 8000,
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
              <h2>Registracion</h2>
              <Link to="/">
                <FaHome /> Inicio
              </Link>
            </FORM.Header>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <legend>Informacion de Cuenta</legend>

                {/* Username */}
                <input
                  type="text"
                  name="username"
                  placeholder="Nombre de Usuario"
                  value={formData.username}
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
              <br />
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
        </FORM.OutterWrapper>
      </FORM.Container>
      <ToastContainer />
    </>
  );
};

export default SignUp;
