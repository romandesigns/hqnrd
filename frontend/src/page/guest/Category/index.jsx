// Dependenciens
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// Components
import Header from "../../../components/layout/Header";
import Brand from "../../../components/ui-elements/Brand";
import Button from "../../../components/ui-elements/Button";
import Card from "../../../components/ui-elements/Card";
// Utilities
import { MetaTags } from "../../../utils/apps";
// Styled Components
import * as CATEGORY from "./styles";

// Api
import { rooms, categories } from "../../../data";

const Category = ({ match }) => {
  const { params, url } = match;
  const { cat } = params;
  const matchedRooms = rooms.filter((room) => room.category === cat);

  // Checking for valid param
  let categories = ["doble-cama", "master", "doble", "standard", "basica", "familiar"];
  let param = categories.find((type) => (type === cat ? true : false));
  const history = useHistory();
  if (param === undefined) history.push("/");

  // Sanitizing param
  const sanitizedParam = cat === "doble-cama" ? cat.replace("-", " ") : cat;

  return (
    <>
      {/* Category Page metadata */}
      <MetaTags
        ogDescription="Disfruta de las acomodidades que te ofrecemos; Habitaciones amplias y modernas, Smart TV, control de seguridad y mucho mas"
        ogImagePath="path/to/image.jpg"
        ogTitle="Hotel Quinto Nivel RD"
        pageDescription="Mas que un hotel, nosotros te proveemos la seguridad, comforte y la mejor experiencia posible; Habitaciones modernas y amplias, sistema de seguridad disponible y mucho mas."
        pageTitle={`Habitaciones ${sanitizedParam}`}
      />

      {/* Header Component */}
      <Header img_src={`/img/category/${cat}.jpg`}>
        <CATEGORY.HeaderWrapper>{<Brand heading="h1" />}</CATEGORY.HeaderWrapper>
      </Header>

      {/* Category Description*/}
      <CATEGORY.Content>
        <CATEGORY.Description>
          <h2>{`Habitaciones ${sanitizedParam}`}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tempora sunt magnam a optio aspernatur nobis exercitationem perspiciatis? Soluta quod
            officia mollitia. Esse modi velit aliquam illo sed, reprehenderit enim.
          </p>
          <Button type="goback">Regresar</Button>
        </CATEGORY.Description>

        {/* Category Rooms*/}
        <CATEGORY.Rooms>
          {matchedRooms.map((room, index) => (
            <Card
              key={index}
              type="room"
              price={room.price}
              bg="light"
              category={sanitizedParam}
              img_src={room.img.hero}
              path_to={`${url}/habitacion/${room.unit}`}
              unit={room.unit}
            />
          ))}
        </CATEGORY.Rooms>
      </CATEGORY.Content>
    </>
  );
};

export default Category;
