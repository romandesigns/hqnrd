// Dependenciens
import React, { useEffect, useState } from "react";
// Utilities
import { MetaTags } from "../../../utils/apps";
// Components
import Header from "../../../components/layout/Header";
import Brand from "../../../components/ui-elements/Brand";
import Button from "../../../components/ui-elements/Button";

// Styled Components
import * as CATEGORY from "./styles";

const Category = ({ match }) => {
  const [roomType, setRoomSType] = useState();
  // !ENSURE URL PARAMETER IS VALID ELSE REDIRECT USER TO HOME PAGE
  return (
    <>
      <MetaTags
        ogDescription="Disfruta de las acomodidades que te ofrecemos; Habitaciones amplias y modernas, Smart TV, control de seguridad y mucho mas"
        ogImagePath="path/to/image.jpg"
        ogTitle="Hotel Quinto Nivel RD"
        pageDescription="Mas que un hotel, nosotros te proveemos la seguridad, comforte y la mejor experiencia posible; Habitaciones modernas y amplias, sistema de seguridad disponible y mucho mas."
        pageTitle={`Habitaciones ${roomType}`}
      />
      <Header img_src={`/img/cat/${match.params.cat}.jpg`}>
        <CATEGORY.HeaderWrapper>{<Brand heading="h1" />}</CATEGORY.HeaderWrapper>
      </Header>
      <CATEGORY.Content>
        <Button type="goback">Regresar</Button>
      </CATEGORY.Content>
    </>
  );
};

export default Category;
