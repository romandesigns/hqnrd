//  Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  align-self: center;
  backdrop-filter: var(--blur);
  background-color: var(--faded-light);
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-self: center;
  padding: var(--padding) calc(var(--padding) + 2rem);

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

export const Content = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: var(--padding);
  width: 100%;
  z-index: 2;
`;
