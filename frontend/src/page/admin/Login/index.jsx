// Dependencies
import React from "react";
// Components
import Brand from "../../../components/ui-elements/Brand";
// Styled components
import * as FORM from "./styles.js";

const Login = () => {
  return (
    <>
      <FORM.Header>
        <Brand />
      </FORM.Header>
      <FORM.Container>
        <form>
          <label htmlFor="usuario">Usuario</label>
          <input type="text" name="usuario" id="usuario" />
          <select name="role" id="role">
            <option value="">Seleccione Cargo</option>
            <option value="supervisor">Supervisor</option>
            <option value="maintnance">Mantenimiento</option>
            <option value="owner">Propietario</option>
          </select>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
          <input type="submit" value="Entrar" />
        </form>
      </FORM.Container>
    </>
  );
};

export default Login;
