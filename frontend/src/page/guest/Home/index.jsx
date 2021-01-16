//  Dependencies
import React from "react";

// Utilities
import { MetaTags } from "../../../utils/apps";

// Styled Components
import * as HOME from "./styles";

// Components
import Header from "../../../components/layout/Header";
import Button from "../../../components/ui-elements/Button";

const Home = () => {
  return (
    <>
      <MetaTags
        pageTitle="Inicio"
        pageDescription="Mas que un hotel, nosotros te proveemos la seguridad, comforte y la mejor experiencia posible; Habitaciones modernas y amplias, sistema de seguridad disponible y mucho mas."
        ogTitle="Hotel Quinto Nivel RD"
        ogDescription="Disfruta de las acomodidades que te ofrecemos; Habitaciones amplias y modernas, Smart TV, control de seguridad y mucho mas"
        ogImagePath="path/to/image.jpg"
      />
      <Header>
        <HOME.Wrapper>
          <img src="/logo512.png" alt="Hotel Quinto Nivel RD Logo" />
          <h1>Hotel Quinto Nivel RD</h1>
          <p>Como estar en casa!!!</p>
          <Button path="/reservacion" type="reservation">
            Crear Reservacion
          </Button>
        </HOME.Wrapper>
      </Header>
      <HOME.Main>
        <HOME.Features>
          <HOME.Feature>
            <figure>
              <img src="/img/public-area/room-01.jpg" alt="HQNRD Habitacion" />
              <HOME.FeatureFigCaption>
                <h3>Comodidad y Comforte</h3>
                <p>Esta es una breve description de la habitaciones que provee el hotel quinto nivel rd.</p>
              </HOME.FeatureFigCaption>
            </figure>
          </HOME.Feature>
          <HOME.Feature>
            <figure>
              <img src="/img/public-area/roof-top.jpg" alt="HQNRD Roof Top" />
              <HOME.FeatureFigCaption>
                <h3>Area de Recreacion</h3>
                <p>Disfruta de hermosas atardeceres o anocheceres desde nuestro roof top.</p>
              </HOME.FeatureFigCaption>
            </figure>
          </HOME.Feature>
          <HOME.Feature>
            <figure>
              <img src="/img/public-area/security-camera.jpg" alt="HQNRD Camara de vigilancia" />
              <HOME.FeatureFigCaption>
                <h3>Servcio de vigilancia exterior</h3>
                <p>Vigilando por ti para proveerte el la tranquilidad que mereces.</p>
              </HOME.FeatureFigCaption>
            </figure>
          </HOME.Feature>
        </HOME.Features>
        <HOME.Reputation className="reputation">
          <article className="about">
            <figure>
              <img src="/img/public-area/public-area_3.jpg" alt="HQNRD fachada" />
            </figure>
            <div className="description">
              <h4>Hotel Quinto Nive RD</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis numquam, maxime maiores ratione quam cupiditate itaque incidunt
                consequuntur, porro ducimus culpa debitis, quae distinctio id excepturi veniam eveniet earum soluta.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </article>
          <article className="testimonials"></article>
        </HOME.Reputation>
        <section className="unites"></section>
      </HOME.Main>
    </>
  );
};

export default Home;
