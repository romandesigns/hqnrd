// Dependencies
import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  padding: 0 11.6rem;

  & > button {
    align-self: center;
  }
`;

export const Description = styled.div`
  border-bottom: 1px solid var(--border-color);
  grid-column: 1/-1;
  margin-bottom: calc(var(--margin) * 3);
  padding-bottom: var(--padding);
  padding: var(--padding);
  button {
    margin-top: 1rem;
  }
  p {
    max-width: 80%;
  }
`;

export const Rooms = styled.div`
  display: grid;
  grid-auto-rows: auto;
  grid-column: 1/-1;
  grid-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
`;
