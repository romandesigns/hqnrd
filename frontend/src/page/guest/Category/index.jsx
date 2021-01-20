// Dependenciens
import React from "react";
// Components
import Header from "../../../components/layout/Header";
// Styled Components
import * as CATEGORY from "./styles";

const Category = ({ match }) => {
  return (
    <Header img_src={`/img/cat/${match.params.cat}.jpg`}>
      <CATEGORY.Wrapper>
        <h1>Habitaciones {match.params.cat}</h1>
        <p>Como estar en casa!!!</p>
      </CATEGORY.Wrapper>
    </Header>
  );
};

export default Category;
