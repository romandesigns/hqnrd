// Dependenciens
import React from "react";
// Components
import Header from "../../../components/layout/Header";
import Brand from "../../../components/ui-elements/Brand";
// Styled Components
import * as CATEGORY from "./styles";

const Category = ({ match }) => {
  return (
    <Header img_src={`/img/cat/${match.params.cat}.jpg`}>
      <Brand />
      <CATEGORY.Wrapper>
        <h1>Habitaciones {match.params.cat}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet corporis adipisci sunt iste odit libero totam voluptate voluptatibus tenetur autem.</p>
      </CATEGORY.Wrapper>
    </Header>
  );
};

export default Category;
