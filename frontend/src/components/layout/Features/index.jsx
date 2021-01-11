// Dependencies
import React from "react";

// Styles components
import { FeaturesSectionStyled, FeaturesArticleStyled, FeatureHeaderStyled, FeatureMainStyled, FeatureFooterStyled } from "./styles";

const Features = () => {
  return (
    <FeaturesSectionStyled>
      <FeaturesArticleStyled>
        <FeatureHeaderStyled>
          <h3>Unidades Modernas y Espaciosas</h3>
        </FeatureHeaderStyled>
        <FeatureMainStyled>
          <figure>
            <img src="/img/public-area/featured-room.jpg" alt="featured-image" />
          </figure>
        </FeatureMainStyled>
        <FeatureFooterStyled>
          <p>Ofreciendote unidades con una sostification y un comforte impecable</p>
        </FeatureFooterStyled>
      </FeaturesArticleStyled>
      <FeaturesArticleStyled>
        <FeatureHeaderStyled>
          <h3>Servicio de vigilancia 24/7</h3>
        </FeatureHeaderStyled>
        <FeatureMainStyled>
          <figure>
            <img src="/img/public-area/security-camera.jpg" alt="featured-image" />
          </figure>
        </FeatureMainStyled>
        <FeatureFooterStyled>
          <p>No importa el tipo the unidad que elijas. Todas nuestras unidades te proveen una sostification y un comforte impecable</p>
        </FeatureFooterStyled>
      </FeaturesArticleStyled>
      <FeaturesArticleStyled>
        <FeatureHeaderStyled>
          <h3>Disfruta la vista de nuestro Roof Top</h3>
        </FeatureHeaderStyled>
        <FeatureMainStyled>
          <figure>
            <img src="/img/public-area/roof-top.jpg" alt="featured-image" />
          </figure>
        </FeatureMainStyled>
        <FeatureFooterStyled>
          <p>No importa el tipo the unidad que elijas. Todas nuestras unidades te proveen una sostification y un comforte impecable</p>
        </FeatureFooterStyled>
      </FeaturesArticleStyled>
      <FeaturesArticleStyled>
        <FeatureHeaderStyled>
          <h3>Unidades Modernas y Espaciosas</h3>
        </FeatureHeaderStyled>
        <FeatureMainStyled>
          <figure>
            <img src="/img/public-area/featured-room.jpg" alt="featured-image" />
          </figure>
        </FeatureMainStyled>
        <FeatureFooterStyled>
          <p>No importa el tipo the unidad que elijas. Todas nuestras unidades te proveen una sostification y un comforte impecable</p>
        </FeatureFooterStyled>
      </FeaturesArticleStyled>
    </FeaturesSectionStyled>
  );
};

export default Features;
