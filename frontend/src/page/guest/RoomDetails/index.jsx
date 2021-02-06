// Dependencies
import React, { useState, useEffect } from "react";

// Components
import Header from "../../../components/layout/Header";
import Brand from ".././../../components/ui-elements/Brand";
import Button from "./../../../components/ui-elements/Button";
import Modal from "../../misc/modal";

// Utilities
import { MetaTags } from "../../../utils/apps";

// Style Component
import * as CATEGORY from "../../guest/Category/styles";
import * as GALLERY from "../../../components/layout/PhotoGallery/styles";
import * as ROOM from "./styles";

// API
import { rooms } from "../../../data";

const RoomDetails = ({ match }) => {
  const [room, setRoom] = useState(() => rooms.filter((x) => x.unit === parseInt(match.params.id)));
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    let result = rooms.filter((x) => x.unit === parseInt(match.params.id));
    setRoom(result);
  }, [match.params.id]);

  return (
    <>
      {/* Meta data */}
      <MetaTags
        ogDescription={room[0].ogDescription}
        ogImagePath="path/to/image.jpg"
        ogTitle={`Habitacion # ${room[0].unit} | Hotel Quinto Nivel RD`}
        pageDescription={room[0].pageDescription}
        pageTitle={`Habitacion ${room[0].category.replace("-", " ")} #${room[0].unit}`}
      />

      {/* Page Header */}
      <Header img_src={room[0].img.hero} room="detail">
        <CATEGORY.HeaderWrapper>{<Brand heading="h1" />}</CATEGORY.HeaderWrapper>
      </Header>

      {/* Room Details */}
      <ROOM.Details>
        {/* Room Decription */}
        <ROOM.Description>
          <h3>
            Habitacion {room[0].category.replace("-", " ")} #{room[0].unit}
          </h3>
          <p>{room[0].roomDescription}</p>
          <Button type="goback">Regresar</Button>
        </ROOM.Description>
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
              <img src={room[0].img.diagram} alt="diagram-03-b" />
              <figcaption>Illustracion de la habitacion</figcaption>
            </figure>
            <Modal open={modalIsOpen} close={() => setModalIsOpen(false)}>
              <section>
                <header>
                  <Brand />
                </header>
                <main>
                  <figure>
                    <img src={room[0].img.hero} alt={room[0].img.hero} />
                  </figure>
                  <div>
                    <ROOM.Specs>
                      <p>
                        <ROOM.Label>Precio:</ROOM.Label> {room[0].price} / 1 Dia
                      </p>
                      <p>
                        <ROOM.Label>Spacio:</ROOM.Label> 77.24 metros cuadrados
                      </p>
                      <p>
                        <ROOM.Label>Cama:</ROOM.Label> {room[0].bedQty}
                      </p>
                      <p>
                        <ROOM.Label>Sofa Cama:</ROOM.Label> {room[0].sofaBed === true ? "Disponible" : "No Disponible"}
                      </p>
                      <p>
                        <ROOM.Label>Baño:</ROOM.Label> {room[0].sofaBed === true ? "Privado" : "Compartido"}
                      </p>
                      <p>
                        <ROOM.Label>Tipo de Cama:</ROOM.Label> {room[0].bedType}
                      </p>
                      <p>
                        <ROOM.Label>Capacidad:</ROOM.Label> {room[0].capacity} Personas
                      </p>
                    </ROOM.Specs>
                  </div>
                </main>
                <footer>
                  <button>Google</button>
                  <button>Facebook</button>
                  <button>User mi Correo</button>
                </footer>
              </section>
            </Modal>
          </ROOM.Illustration>
        </ROOM.Features>
      </ROOM.Details>

      {/* Room Details - Aside */}
      <ROOM.Specs>
        <p>
          <ROOM.Label>Precio:</ROOM.Label> {room[0].price} / 1 Dia
        </p>
        <p>
          <ROOM.Label>Spacio:</ROOM.Label> 77.24 metros cuadrados
        </p>
        <p>
          <ROOM.Label>Cama:</ROOM.Label> {room[0].bedQty}
        </p>
        <p>
          <ROOM.Label>Sofa Cama:</ROOM.Label> {room[0].sofaBed === true ? "Disponible" : "No Disponible"}
        </p>
        <p>
          <ROOM.Label>Baño:</ROOM.Label> {room[0].sofaBed === true ? "Privado" : "Compartido"}
        </p>
        <p>
          <ROOM.Label>Tipo de Cama:</ROOM.Label> {room[0].bedType}
        </p>
        <p>
          <ROOM.Label>Capacidad:</ROOM.Label> {room[0].capacity} Personas
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
          <button onClick={() => setModalIsOpen(true)}>Register</button>
        </ROOM.BtnGroup>
      </ROOM.Specs>

      {/* Room Gallery */}
      <GALLERY.Container room="detail">
        <GALLERY.GalleryList room="detail">
          {room[0].img.gallery.map((image, index) => (
            <GALLERY.GalleryItem key={index}>{<GALLERY.GalleryFigure img={image.src} title={image.alt}></GALLERY.GalleryFigure>}</GALLERY.GalleryItem>
          ))}
        </GALLERY.GalleryList>
      </GALLERY.Container>
    </>
  );
};

export default RoomDetails;
