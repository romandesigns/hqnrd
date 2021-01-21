// Dependencies
import React from "react";
// Styled Components
import * as Brand from "./styles";

const HQNRDBrand = (props) => {
  if (props.heading === "h1") {
    return (
      <Brand.BrandWrapper>
        <img src="/logo512.png" alt="Hotel Quinto Nivel Brand" />
        <div>
          <h1>Hotel Quinto Nivel RD</h1>
          <p>Como estar en casa!!!</p>
        </div>
      </Brand.BrandWrapper>
    );
  } else {
    return (
      <Brand.BrandWrapper>
        <img src="/logo512.png" alt="Hotel Quinto Nivel Brand" />
        <div>
          <h2>Hotel Quinto Nivel RD</h2>
          <p>Como estar en casa!!!</p>
        </div>
      </Brand.BrandWrapper>
    );
  }
};

export default HQNRDBrand;
