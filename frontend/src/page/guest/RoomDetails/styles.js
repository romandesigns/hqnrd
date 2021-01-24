// Dependencies
import styled from "styled-components";

export const RoomDetails = styled.main``;

export const Details = styled.section`
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 2fr 1fr;
  background-color: var(--light);
  margin: var(--margin) 0;
  padding: var(--padding);
`;
export const Label = styled.strong``;
export const BtnGroup = styled.strong``;

export const Extras = styled.article``;
export const Illustration = styled.article`
  grid-column: 1;
  img {
    max-width: 25rem;
  }
`;

export const Description = styled.article`
  padding: var(--padding) 0;
  border-bottom: 1px solid var(--border-color);
`;

export const Features = styled.article`
  display: flex;
  justify-content: space-around;
  align-items: start;
`;

export const RoomSpecs = styled.article`
  background-color: pink;
  margin: var(--margin) 0 0 0;
  padding: var(--padding);
  grid-row: 1/3;
  grid-column: 2/-1;
`;
