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
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
      order: 1;
      padding: 0 2rem 2rem 2rem;
    }
    h3 {
      margin-bottom: calc(var(--margin) - 1rem);
    }
  }
`;

export const FeatureFigCaption = styled.figcaption`
  padding: var(--padding);
`;
