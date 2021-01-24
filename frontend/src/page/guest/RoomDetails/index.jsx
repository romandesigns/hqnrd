// Dependencies
import React from "react";
// Components
import Header from "../../../components/layout/Header";
import Brand from ".././../../components/ui-elements/Brand";
import Button from "./../../../components/ui-elements/Button";
// Utilities
import { MetaTags } from "../../../utils/apps";
// Style Component
import * as CATEGORY from "../../guest/Category/styles";
import * as GALLERY from "../../../components/layout/PhotoGallery/styles";
import * as ROOM from "./styles";

const RoomDetails = (props) => {
  const RoomDetail = {
    img_src: "/img/cat/familiar.jpg",
    unit: 201,
  };
  return (
    <>
      <MetaTags
        ogDescription="Disfruta de las acomodidades que te ofrecemos; Habitaciones amplias y modernas, Smart TV, control de seguridad y mucho mas"
        ogImagePath="path/to/image.jpg"
        ogTitle="Hotel Quinto Nivel RD"
        pageDescription="Mas que un hotel, nosotros te proveemos la seguridad, comforte y la mejor experiencia posible; Habitaciones modernas y amplias, sistema de seguridad disponible y mucho mas."
        pageTitle={`Habitacion # ${RoomDetail.unit}`}
      />

      <Header img_src={RoomDetail.img_src} room="detail">
        <CATEGORY.HeaderWrapper>{<Brand heading="h1" />}</CATEGORY.HeaderWrapper>
      </Header>

      <ROOM.RoomDetails>
        <GALLERY.Container room="detail">
          <GALLERY.GalleryList room="detail">
            <GALLERY.GalleryItem>
              <GALLERY.GalleryFigure img="/img/public-area/public-area_4.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
            </GALLERY.GalleryItem>
            <GALLERY.GalleryItem>
              <GALLERY.GalleryFigure img="/img/public-area/public-area_8.jpg" title="Area Comun - Intercom"></GALLERY.GalleryFigure>
            </GALLERY.GalleryItem>
            <GALLERY.GalleryItem>
              <GALLERY.GalleryFigure img="/img/public-area/public-area_5.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
            </GALLERY.GalleryItem>
            <GALLERY.GalleryItem>
              <GALLERY.GalleryFigure img="/img/public-area/public-area_1.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
            </GALLERY.GalleryItem>
            <GALLERY.GalleryItem>
              <GALLERY.GalleryFigure img="/img/public-area/public-area_3.jpg" title="Area Comun - Edificio Lateral"></GALLERY.GalleryFigure>
            </GALLERY.GalleryItem>
            <GALLERY.GalleryItem>
              <GALLERY.GalleryFigure img="/img/public-area/public-area_2.jpg" title="Area Comun - Escalera"></GALLERY.GalleryFigure>
            </GALLERY.GalleryItem>
            <GALLERY.GalleryItem>
              <GALLERY.GalleryFigure img="/img/public-area/public-area_6.jpg" title="Area Comun - Pasillo"></GALLERY.GalleryFigure>
            </GALLERY.GalleryItem>
          </GALLERY.GalleryList>
        </GALLERY.Container>

        <ROOM.Details>
          <ROOM.Description>
            <h3>Habitacion doble cama #{RoomDetail.unit}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi est adipisci assumenda velit minima iure accusantium tenetur vel quia,
              doloribus expedita rerum voluptate quaerat consectetur asperiores quidem tempora! Iusto, eos!
            </p>
            <Button type="goback">Regresar</Button>
          </ROOM.Description>
          <ROOM.RoomSpecs>
            <p>
              <ROOM.Label>Precio:</ROOM.Label> 3,600 / 1 Dia
            </p>
            <p>
              <ROOM.Label>Spacio:</ROOM.Label> 77.24 metros cuadrados
            </p>
            <p>
              <ROOM.Label>Cama:</ROOM.Label> 1
            </p>
            <p>
              <ROOM.Label>Sofa Cama:</ROOM.Label> 1
            </p>
            <p>
              <ROOM.Label>Baño Privado:</ROOM.Label> 1
            </p>
            <p>
              <ROOM.Label>Tipo de Cama:</ROOM.Label> Twin
            </p>
            <p>
              <ROOM.Label>Capacidad:</ROOM.Label> 4 Personas
            </p>
            <ROOM.BtnGroup>
              <br />
              <Button type="whatsapp">Llamanos</Button>
              <small>
                <em>
                  <strong>Tel:</strong> 809-753-7500
                </em>
              </small>
              <Button type="email">Escribenos</Button>
            </ROOM.BtnGroup>
          </ROOM.RoomSpecs>
          <ROOM.Features>
            <ROOM.Extras>
              <h4>Extras</h4>
              <ul>
                <li>Aire Acondicionado</li>
                <li>Smart TV</li>
                <li>Intercom</li>
                <li>Agua fria y caliente</li>
                <li>Balcon</li>
                <li>Cocina</li>
              </ul>
            </ROOM.Extras>
            <ROOM.Illustration>
              <h4>Illustracion</h4>
              <figure>
                <img src="/img/diagram-03-b.jpg" alt="diagram-03-b" />
                <figcaption>Illustracion de la habitacion</figcaption>
              </figure>
            </ROOM.Illustration>
          </ROOM.Features>
        </ROOM.Details>
      </ROOM.RoomDetails>
    </>
  );
};

export default RoomDetails;
