// Dependencies
import styled from "styled-components";

export const RoomDetails = styled.main``;

export const Details = styled.section`
  background-color: var(--light);
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 2fr 1fr;
  margin: var(--margin) 0;
  padding: var(--padding);
`;

export const Label = styled.strong``;

export const BtnGroup = styled.div`
  button {
    display: block;
    max-width: 100%;
    margin: 0;
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
  padding: var(--padding) 0;
  border-bottom: 1px solid var(--border-color);
`;

export const Features = styled.article`
  display: flex;
  justify-content: end;
  align-items: start;
  margin-top: var(--margin);
`;

export const RoomSpecs = styled.article`
  border: 1px solid var(--border-color);
  margin: var(--margin) 0 0 0;
  padding: var(--padding);
  grid-row: 1/3;
  grid-column: 2/-1;
  border-radius: var(--radius);
  p {
    margin-bottom: calc(var(--margin) - 1rem);
  }
  & p:first-child {
    font-size: 2.7rem;
  }
`;
