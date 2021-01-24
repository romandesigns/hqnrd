// Dependencies
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  align-items: flex-end;
  background: var(--dark_gradient);
  color: var(--light);
  display: flex;
  justify-content: center;
  padding: var(--padding);
  position: relative;
  box-sizing: border-box;
  width: 100%;
  z-index: 1;
  & > div {
    height: 10rem;
    justify-content: flex-start;
    max-width: 84%;
    width: 100%;
    img {
      max-width: 6%;
    }
  }
`;

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
  grid-column: 1/-1;
  padding: var(--padding);
  margin-bottom: calc(var(--margin) * 3);
  padding-bottom: var(--padding);
  border-bottom: 1px solid var(--border-color);
  button {
    margin-top: 1rem;
  }
`;

export const Rooms = styled.div`
  grid-column: 1/-1;
  grid-gap: var(--gap);
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
`;
