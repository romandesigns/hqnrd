// Dependencies
import React from "react";
import { FaHome } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
// Components
import Brand from "../../../components/ui-elements/Brand";
// Styled components
import * as FORM from "./styles.js";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";

const Login = () => {
  const { role } = useParams();

  return (
    <>
      <FORM.Container>
        <FORM.Wrapper>
          <Brand />
          <Link to="/">
            <FaHome /> Inicio
          </Link>
          <form>
            <input type="text" name="usuario" placeholder="Usuario / Correo Electronico" />
            <input type="password" name="password" placeholder="Contraseña" />
            <input type="password" name="password_confirm" placeholder="Verifique Contraseña" />
            {role !== "huesped" && (
              <select name="role" id="role">
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
      </FORM.Container>
    </>
  );
};

export default Login;
