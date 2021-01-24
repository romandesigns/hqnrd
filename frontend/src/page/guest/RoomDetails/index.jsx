// Dependencies
import React from "react";
// Components
import Header from "../../../components/layout/Header";
import Brand from ".././../../components/ui-elements/Brand";
// Style Component
import * as CATEGORY from "../../guest/Category/styles";
import * as ROOM from "./styles";

const RoomDetails = (props) => {
  const RoomDetail = {
    img_src: "/img/cat/familiar.jpg",
  };
  return (
    <>
      <Header img_src={RoomDetail.img_src} room="detail">
        <CATEGORY.HeaderWrapper>{<Brand heading="h1" />}</CATEGORY.HeaderWrapper>
      </Header>
      <ROOM.RoomDetails>
        <section>
          <ROOM.PhotoGallery>
            <ROOM.GalleryItem>
              <ROOM.GalleryFigure img="/img/public-area/public-area_4.jpg" title="Area Comun - Pasillo"></ROOM.GalleryFigure>
            </ROOM.GalleryItem>
            <ROOM.GalleryItem>
              <ROOM.GalleryFigure img="/img/public-area/public-area_8.jpg" title="Area Comun - Intercom"></ROOM.GalleryFigure>
            </ROOM.GalleryItem>
            <ROOM.GalleryItem>
              <ROOM.GalleryFigure img="/img/public-area/public-area_5.jpg" title="Area Comun - Pasillo"></ROOM.GalleryFigure>
            </ROOM.GalleryItem>
            <ROOM.GalleryItem>
              <ROOM.GalleryFigure img="/img/public-area/public-area_1.jpg" title="Area Comun - Pasillo"></ROOM.GalleryFigure>
            </ROOM.GalleryItem>
            <ROOM.GalleryItem>
              <ROOM.GalleryFigure img="/img/public-area/public-area_3.jpg" title="Area Comun - Edificio Lateral"></ROOM.GalleryFigure>
            </ROOM.GalleryItem>
            <ROOM.GalleryItem>
              <ROOM.GalleryFigure img="/img/public-area/public-area_2.jpg" title="Area Comun - Escalera"></ROOM.GalleryFigure>
            </ROOM.GalleryItem>
            <ROOM.GalleryItem>
              <ROOM.GalleryFigure img="/img/public-area/public-area_6.jpg" title="Area Comun - Pasillo"></ROOM.GalleryFigure>
            </ROOM.GalleryItem>
          </ROOM.PhotoGallery>
        </section>
        <section>
          <article>
            <div>text</div>
            <div>
              <div>extras</div>
              <div>illustration</div>
            </div>
          </article>
          <article>details</article>
        </section>
      </ROOM.RoomDetails>
    </>
  );
};

export default RoomDetails;
