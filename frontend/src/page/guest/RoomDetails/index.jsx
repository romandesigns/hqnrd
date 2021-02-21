// Dependencies
import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

// Components
import Header from "../../../components/layout/Header";
import Brand from ".././../../components/ui-elements/Brand";
import Button from "./../../../components/ui-elements/Button";
import Modal from "../../misc/modal";
import RoomExtras from "./RoomExtras";
import RoomSpecs from "./RoomSpecs";
// Utilities
import { MetaTags } from "../../../utils/apps";
// Style Component
import * as GALLERY from "../../../components/layout/PhotoGallery/styles";
import * as ROOM from "./styles";
import { HeaderWrapper } from "../../../components/layout/Header/styles";
import { BTNStyles } from "../../../components/ui-elements/styles";
// API
import { rooms } from "../../../data";

const RoomDetails = ({ match }) => {
  const [room, setRoom] = useState(() => rooms.filter((x) => x.unit === parseInt(match.params.id)));
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    let result = rooms.filter((x) => x.unit === parseInt(match.params.id));
    setRoom(result);
    window.localStorage.setItem("room", JSON.stringify(`unit:${room[0].unit}`));
  }, [match.params.id, room]);

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
        <HeaderWrapper>{<Brand heading="h1" />}</HeaderWrapper>
      </Header>

      <ROOM.MainWrapper>
        {/* Room Details - Aside */}
        <ROOM.Specs>
          {/* Room Specs items */}
          <RoomSpecs room={room} />
          <ROOM.BtnGroup>
            <br />
            <Button type="whatsapp">Llamanos</Button>
            <small>
              <em>
                <strong>Tel:</strong> 809-753-7500
              </em>
            </small>
            <Button type="email">Escribenos</Button>
            <button style={BTNStyles.btn} open={modalIsOpen} onClick={() => setModalIsOpen(true)}>
              <FaCalendarAlt style={BTNStyles.btn_icon} />
              Reservar
            </button>
          </ROOM.BtnGroup>
        </ROOM.Specs>

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

          {/* Room Features */}
          <ROOM.Features>
            <ROOM.Extras>
              <h4>Extras</h4>
              <RoomExtras room={room} />
            </ROOM.Extras>

            {/* Room Decription */}
            <ROOM.Illustration>
              <h4>Illustracion</h4>
              <figure title={`Illustracion de la habitacion ${room[0].unit}`}>
                <img src={room[0].img.diagram} alt="diagram-03-b" />
              </figure>
              <Modal reservation_modal open={modalIsOpen} close={() => setModalIsOpen(false)}>
                <ROOM.DetailsModal>
                  <header>
                    <Brand />
                    <figure>
                      <img src={room[0].img.hero} alt={room[0].img.hero} />
                    </figure>
                  </header>
                  <main>
                    <ROOM.Calendar>
                      <label htmlFor="timein">
                        <span>Fecha de entrada</span>
                        <input type="date" name="timein" id="timein" />
                      </label>
                      <label htmlFor="timeout">
                        <span>Fecha de salida</span>
                        <input type="date" name="timeout" id="timeout" />
                      </label>
                    </ROOM.Calendar>
                    <ROOM.ModalRoomDetails>
                      <p>
                        <ROOM.Label>Precio:</ROOM.Label> ${room[0].price} / 1 Dia
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
                    </ROOM.ModalRoomDetails>
                  </main>
                  <footer>
                    {/* <Button type="google">Google</Button>
                    <Button type="facebook">Facebook</Button> */}
                    <Button type="usar-correo">Iniciar Session</Button>
                  </footer>
                </ROOM.DetailsModal>
              </Modal>
            </ROOM.Illustration>
          </ROOM.Features>
        </ROOM.Details>
      </ROOM.MainWrapper>

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
