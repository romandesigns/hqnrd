// Dependencies
import React, { useState, useEffect } from "react";
import { FaEdit, FaSave } from "react-icons/fa";
import { useParams, Link, NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Components
import Header from "../../../components/layout/Header";
import * as PERFIL from "../../../components/layout/Header/styles";
import Brand from "../../../components/ui-elements/Brand";
import Button from "../../../components/ui-elements/Button";

// Styled components
import * as PROFILE from "./styles";
import { BTNStyles as BTN } from "../../../components/ui-elements/styles";

/**
 * @author
 * @function  GuesProfile
 **/

const GuesProfile = (props) => {
  const [userData, setUserData] = useState();
  const history = useHistory();
  useEffect(() => {
    const getUserData = async () => {
      let localUserData = await window.localStorage.getItem("user");
      if (!localUserData || localUserData === null) return history.push("/huesped/iniciar-session");

      let { data } = JSON.parse(localUserData);
      setUserData(data);
    };
    getUserData();
  }, []);

  if (userData === undefined) return <p>Loading...</p>;
  console.log(userData);

  return (
    <>
      {/* Page Header */}
      <Header img_src={"/img/perfil/profile-banner-1.jpg"} room="detail">
        <PERFIL.HeaderWrapper>{<Brand heading="h1" />}</PERFIL.HeaderWrapper>
      </Header>

      <PROFILE.NavBar>
        <ul>
          <li>
            <NavLink to="/huesped/perfil">Perfil</NavLink>
          </li>{" "}
          /
          <li>
            <NavLink to="/huesped/historial">Historial</NavLink>
          </li>
          <li>
            <button>
              <FaEdit />
              Editar
            </button>
          </li>
        </ul>
      </PROFILE.NavBar>

      <PROFILE.MainDetails>
        <PROFILE.UserDetails>
          <PROFILE.AvatarWrapper>
            <PROFILE.Avatar>
              <img src="/img/perfil/avatar.jpg" alt="foto de perfil" />
            </PROFILE.Avatar>
            <PROFILE.Buttons>
              <Button type="delete">Eliminar</Button>
              <Button type="upload">Subir</Button>
            </PROFILE.Buttons>
          </PROFILE.AvatarWrapper>
        </PROFILE.UserDetails>
        <PROFILE.Details>
          <PROFILE.Heading>
            <p>Hola y Bienvenido</p>
            <h2>{`${userData.name} ${userData.lastname}`}</h2>
          </PROFILE.Heading>
          <PROFILE.DetailsWrapper>
            <p>
              {/* Details */}
              <strong>Genero:</strong>
              <select name="gender" id="cars">
                <option value="male">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </p>
            <p>
              <strong>Telefono:</strong>
              <span>587-287-6589</span>
            </p>
            <p>
              <strong>Fecha de Nacimiento:</strong>
              <span>01/02/2018</span>
            </p>
            <p>
              <strong>Pais de Origen:</strong>
              <select name="nacionality">
                <option value="dominican">Republica Dominicana</option>
                <option value="amaericana">Estados Unidos</option>
                <option value="otro">Otro</option>
              </select>
            </p>
            <p>
              <strong>City:</strong>
              <span>Salcedo</span>
            </p>
            <p>
              <strong>Dirrecion:</strong>
              <span>Calle de la Mujer #2</span>
            </p>
            {/* ID */}
          </PROFILE.DetailsWrapper>
        </PROFILE.Details>
      </PROFILE.MainDetails>
    </>
  );
};

export default GuesProfile;
