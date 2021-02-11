// Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Components
import Brand from "../../../components/ui-elements/Brand";
// Styled components
import * as FORM from "./styles.js";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";
const Login = () => {
  // User registration form data
  const [formData, setFormData] = useState({
    user: "",
    email: "",
    pass: "",
    pass_check: "",
    name: "",
    last_name: "",
    phone: "",
  });

  // Handling user submission data
  const handleSubmit = function (e) {
    e.preventDefault();
    if (formData.pass !== formData.pass_check) return toast.dark("Las contraseñas no son identicas, trate de nuevo!");
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
              <input type="text" name="user" placeholder="Nombre de Usuario" value={formData.user} onChange={(e) => setFormData({ ...formData, user: e.target.value })} required />

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
              <input type="password" name="pass" placeholder="Contraseña" value={formData.pass} onChange={(e) => setFormData({ ...formData, pass: e.target.value })} required />

              {/* Password Verification */}
              <input
                type="password"
                name="pass_check"
                placeholder="Verifique Contraseña"
                value={formData.pass_check}
                onChange={(e) => setFormData({ ...formData, pass_check: e.target.value })}
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
                name="last_name"
                placeholder="Apellido"
                value={formData.last_name}
                onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
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
