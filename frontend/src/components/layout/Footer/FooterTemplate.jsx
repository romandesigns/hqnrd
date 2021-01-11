// Dependencies
import React from "react";

import { TiLocationOutline } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { SiAirbnb } from "react-icons/si";

import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";

// Styled Components
import {
  FooterStyled,
  FooterBrandAndAddressStyled,
  FooterBrandStyled,
  FooterContactStyled,
  FooterSocialStyled,
  FooterCopyAndAddressStyled,
  FooterCopyStyled,
  FooterSignatureStyled,
  FooterAddressStyled,
  FooterBrandText,
  FooterAddressWrapper,
} from "./styles";

const Footer = () => (
  <FooterStyled>
    <FooterBrandAndAddressStyled>
      <FooterBrandStyled>
        <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
        <FooterBrandText>
          <h4>Hotel Quinto Nivel RD</h4>
          <p>Como estar en casa!!!</p>
        </FooterBrandText>
      </FooterBrandStyled>
      <FooterAddressStyled>
        <FooterAddressWrapper>
          <FooterContactStyled>
            <address>
              <ul>
                <li>
                  <TiLocationOutline />
                  Calle de la mujer #2, Salcedo, Republica Dominican&nbsp;
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.google.com/maps/place/Hotel+Quinto+Nivel+RD/@19.3806194,-70.4253245,17z/data=!4m18!1m9!3m8!1s0x8eae296e50e06303:0x4141e3bda5d73fec!2sHotel+Quinto+Nivel+RD!5m2!4m1!1i2!8m2!3d19.3806194!4d-70.4231358!3m7!1s0x8eae296e50e06303:0x4141e3bda5d73fec!5m2!4m1!1i2!8m2!3d19.3806194!4d-70.4231358">
                    <strong>Google Map</strong>
                  </a>
                </li>
                <li>
                  <FaWhatsapp /> <a href="tel:809-753-7500">809 753 7500</a>
                </li>
                <li>
                  <BsEnvelope />

                  <a href="mailto:hotelquintonicelrd@gmail.com">hotelquintonivelrd@gmail.com</a>
                </li>
                <li>
                  <SiAirbnb /> Si deceas, as click&nbsp;
                  <a href="https://www.airbnb.es/rooms/38047428?source_impression_id=p3_1609609837_9PmBeeF2XD%2Fc9BLZ">
                    <strong>AQUI</strong>
                  </a>
                  &nbsp;para reservar atraves de Air BnB
                </li>
              </ul>
            </address>
          </FooterContactStyled>
          <FooterSocialStyled>
            <h5>Siguenos en nuestras redes</h5>
            <ul>
              <li>
                <RiFacebookBoxLine />
                <a href="https://www.facebook.com/hotelquintonivelsalcedo/">Facebook</a>
              </li>
              <li>
                <RiInstagramLine />
                <a href="https://www.instagram.com/hotelquintonivel_rd/">Instagrama</a>
              </li>
            </ul>
          </FooterSocialStyled>
        </FooterAddressWrapper>
      </FooterAddressStyled>
    </FooterBrandAndAddressStyled>
    <FooterCopyAndAddressStyled>
      <FooterCopyStyled>All Rights Reserved &#169; 2021</FooterCopyStyled>
      <FooterSignatureStyled>
        Designed and Developed by&nbsp;
        <a href="mailto:romandesigns.us@gmail.com">romandesigns.us@gmail.com</a>
      </FooterSignatureStyled>
    </FooterCopyAndAddressStyled>
  </FooterStyled>
);

export default Footer;
