// Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Styled Components
import * as Brand from "./styles";

const HQNRDBrand = (props) => {
  if (props.heading === "h1") {
    return (
      <Brand.BrandWrapper>
        <Link to="/">
          <img src="/logo512.png" alt="Hotel Quinto Nivel Brand" />
          <div>
            <h1>Hotel Quinto Nivel RD</h1>
            <p>Como estar en casa!!!</p>
          </div>
        </Link>
      </Brand.BrandWrapper>
    );
  } else {
    return (
      <Brand.BrandWrapper>
        <Link to="/">
          <img src="/logo512.png" alt="Hotel Quinto Nivel Brand" />
          <div>
            <h2>Hotel Quinto Nivel RD</h2>
            <p>Como estar en casa!!!</p>
          </div>
        </Link>
      </Brand.BrandWrapper>
    );
  }
};

export default HQNRDBrand;
