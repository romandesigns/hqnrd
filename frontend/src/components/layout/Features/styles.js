//  Dependencies
import styled from "styled-components";

export const Features = styled.section`
  display: grid;
  grid-column-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
`;

export const Feature = styled.article`
  background-color: var(--light);
  border-radius: var(--radius);
  overflow: hidden;
  figure {
    margin: 0;
    padding: 0;
    img {
      max-width: 100%;
    }
    h3 {
      margin-bottom: calc(var(--margin) - 1rem);
    }
  }
`;

export const FeatureFigCaption = styled.figcaption`
  padding: var(--padding);
`;
