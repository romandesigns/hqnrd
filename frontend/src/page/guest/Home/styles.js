//  Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding) calc(var(--padding) + 2rem);
  border-radius: var(--radius);
  backdrop-filter: var(--blur);
  background-color: var(--faded-light);

  img {
    max-width: 7rem;
  }

  h1 {
    color: var(--text-color);
    margin-top: 1rem;
  }
  p {
    font-size: 19px;
    margin-bottom: 10px;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
`;

export const Features = styled.section`
  display: grid;
  grid-column-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
`;

export const Feature = styled.article`
  background-color: var(--light);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
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

export const Reputation = styled.section`
  background-color: var(--light);
  border-radius: var(--radius);
  padding: var(--padding);
`;
