//  Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  align-self: center;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  padding: var(--padding) calc(var(--padding) + 2rem);

  div {
    display: flex;
    flex-direction: row;
    div {
      display: flex;
      flex-direction: column;
    }
  }

  img {
    max-width: 10rem;
    max-height: 10rem;
    box-shadow: 0 11px 4px -8px rgb(0 0 0 / 32%);
  }

  h1 {
    color: var(--light);
    margin-top: 1rem;
    font-size: 4rem;
  }
  p {
    font-size: 2.5rem;
    color: var(--light);
    margin-bottom: 1rem;
  }

  h1,
  p {
    text-align: left;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
`;

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: start;
  padding: var(--padding);
  width: 100%;
  z-index: 2;
`;
