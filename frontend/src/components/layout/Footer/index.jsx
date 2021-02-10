// Dependecies
import React from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaAirbnb, FaWhatsapp } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
// Style Components
import * as FOOTER from "./styles";
import Brand from "../../ui-elements/Brand";
// Components

const Footer = () => {
  const location = useLocation();
  let isAdminOrUserLogin = location.pathname.indexOf("admin") > -1 ? true : location.pathname.indexOf("user") > -1 ? true : false;

  if (isAdminOrUserLogin === false) {
    return (
      <FOOTER.Container>
        <FOOTER.MainContent>
          <FOOTER.Brand>
            <Brand />
          </FOOTER.Brand>
          <FOOTER.Details>
            <FOOTER.DetailsWrapper>
              <address>
                <strong>Nuestra Direcccion</strong>
                <br />
                Calle de la Mujer #45
                <br />
                Salcedo, Provincia Hermanas Mirabal{" "}
                <strong>
                  <a href="https://www.google.com/maps/place/Hotel+Quinto+Nivel+RD/@19.3806194,-70.4253245,17z/data=!3m1!4b1!4m8!3m7!1s0x8eae296e50e06303:0x4141e3bda5d73fec!5m2!4m1!1i2!8m2!3d19.3806194!4d-70.4231358">
                    Google Map
                  </a>
                </strong>
                <br />
                <br />
              </address>
              <strong>Contactos</strong>
              <br />
              <BiEnvelope />{" "}
              <a href="mailto:hotelquintonivelrd@gmail.com" target="_blank" rel="noopener noreferrer">
                hotelquintonivelrd@gmail.com
              </a>
              <br />
              <FaWhatsapp /> <a href="tel:809-878-5789">809-878-5789</a>
              <br />
              <br />
              <strong>Siguenos en nuestras redes sociales</strong>
              <br />
              <AiOutlineFacebook />{" "}
              <a href="https://www.facebook.com/hotelquintonivelsalcedo/" alt="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <br /> <AiOutlineInstagram /> <a href="tel:809-878-5789">Instagram</a>
              <br />
              <br />
              <strong>Reserva atraves de Airbnb (Opcional)</strong>
              <br />
              <FaAirbnb />{" "}
              <a href="https://www.airbnb.com/rooms/38047428?adults=16&check_in=2021-01-20&check_out=2021-01-21&locale=en&currency=USD&source_impression_id=p3_1611095329_wRdCUHhZj/8bFKih&guests=1">
                airbnb
              </a>
            </FOOTER.DetailsWrapper>
          </FOOTER.Details>
          <FOOTER.DeveloperInfo>
            <p>All rights reserved 2021</p>
            <p>
              Designed and developed by: <a href="mailto:hotelquintonivelrd@gmail.com">romandesigns.us@gmail.com</a>
            </p>
          </FOOTER.DeveloperInfo>
        </FOOTER.MainContent>
      </FOOTER.Container>
    );
  } else {
    return "";
  }
};

export default Footer;
