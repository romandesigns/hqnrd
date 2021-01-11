// Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/elements/Button";

// Styled Components
import { FormMainStyled, FormHeaderStyled, FormContentStyled, FormTypesStyled } from "../../../global-styles/forms";

const AdminLoginForm = () => {
  // Form Data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // Handle form data
  const handleForm = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Form JSX
  return (
    <FormMainStyled>
      <FormContentStyled SignIn>
        <FormHeaderStyled>
          <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
          <h1>Hotel Quinto Nivel RD</h1>
          <p>Como estar en casa !!!</p>
        </FormHeaderStyled>
        <form onSubmit={handleForm}>
          <label htmlFor="admin_email">Correo Electronico</label>
          <input type="email" name="admin_email" id="admin_email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <label htmlFor="admin_password">Contraseña de seguridad</label>
          <input type="password" name="admin_password" id="admin_password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <FormTypesStyled>
            <label htmlFor="admin_type_manager">
              <span>Manager</span>
              <input
                type="radio"
                value="manager"
                name="admin_type"
                id="admin_type_manager"
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </label>

            <label htmlFor="admin_type_propietario">
              <span>Propietario</span>
              <input
                type="radio"
                value="propietario"
                name="admin_type"
                id="admin_type_propietario"
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              />
            </label>
          </FormTypesStyled>
          <Button type="submit" val="Acceder" btnprops={{ bg: "primary" }} />
        </form>
        <Link to="resetear-clave">Resetear Contraseña</Link>
      </FormContentStyled>
    </FormMainStyled>
  );
};

export default AdminLoginForm;
