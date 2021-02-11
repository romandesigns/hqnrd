// Dependencies
import React from "react";
// Components
import Brand from "../../../components/ui-elements/Brand";
// Styled components
import * as FORM from "./styles.js";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";
const Login = () => {
  return (
    <>
      <FORM.Container>
        <FORM.Wrapper>
          <FORM.Header>
            <Brand />
          </FORM.Header>
          <form>
            <input type="text" name="usuario" placeholder="Usuario / Correo Electronico" />
            <input type="password" name="password" placeholder="Contraseña" />
            <input type="password" name="password_confirm" placeholder="Verifique Contraseña" />
            <select name="role" id="role">
              <option value="">Seleccione Cargo</option>
              <option value="supervisor">Supervisor</option>
              <option value="maintnance">Mantenimiento</option>
              <option value="owner">Propietario</option>
            </select>
            <button style={BTN.btn} type="submit">
              Entrar
            </button>
          </form>
        </FORM.Wrapper>
      </FORM.Container>
    </>
  );
};

export default Login;
