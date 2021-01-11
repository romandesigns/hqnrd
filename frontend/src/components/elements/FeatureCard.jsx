import React from "react";
import { FeatureArticle, Figure } from "../../styled/sections";
import { FeaturedDetails, FeaturedDescription, HeadingH5 } from "../../styled/typo";

const FeatureCard = (props) => {
  return (
    <FeatureArticle>
      <Figure>
        <img src={props.imgUrl} alt={props.alt} />
      </Figure>
      <FeaturedDetails>
        <HeadingH5>{props.heading}</HeadingH5>
        <featuredDescription>{props.description}</featuredDescription>
      </FeaturedDetails>
    </FeatureArticle>
  );
};

export default FeatureCard;
