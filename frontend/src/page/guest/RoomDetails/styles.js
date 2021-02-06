// Dependencies
import styled from "styled-components";

export const Details = styled.main`
  margin-top: 2rem;
  section ul {
    padding: 0;
  }
`;

// export const Details = styled.section`
//   background-color: var(--light);
//   display: grid;
//   grid-gap: var(--gap);
//   grid-template-columns: 2fr 1fr;
//   margin: 3rem 0 var(--margin) 0;
//   padding: var(--padding);
// `;

export const Label = styled.strong``;

export const BtnGroup = styled.div`
  button {
    display: block;
    margin: 0;
    max-width: 100%;
  }
  small {
    display: block;
    margin-bottom: calc(var(--margin) - 1rem);
  }
`;

export const Extras = styled.article`
  margin-right: calc(var(--margin) * 3);
`;

export const Illustration = styled.article`
  grid-column: 1;
  h4 {
    padding-left: 2rem;
  }
  img {
    max-width: 20rem;
  }
`;

export const Description = styled.article`
  border-bottom: 1px solid var(--border-color);
  padding: var(--padding) 0;
`;

export const Features = styled.article`
  align-items: start;
  display: flex;
  justify-content: end;
  margin-top: var(--margin);
`;

export const Specs = styled.aside`
  border-radius: var(--radius);
  border: 1px solid var(--border-color);
  grid-column: 2/-1;
  grid-row: 1/3;
  margin: var(--margin) 0 0 0;
  padding: var(--padding);
  p {
    margin-bottom: calc(var(--margin) - 1rem);
  }
  & p:first-child {
    font-size: 2.7rem;
  }
`;
