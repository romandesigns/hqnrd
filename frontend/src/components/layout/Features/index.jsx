//  Dependencies
import React from "react";
// Styled Components
import * as HOME from "./styles";
// Components
import Card from "../../ui-elements/Card";
// API
import { features } from "../../../data";

function Features() {
  return (
    <HOME.Features>
      {features.map((feature, index) => (
        <Card
          key={index}
          alt_value={feature.alt}
          description={feature.description}
          img_src={feature.img_uri}
          heading={feature.title}
          type="featured"
          bg="light"
        />
      ))}
    </HOME.Features>
  );
}

export default Features;
