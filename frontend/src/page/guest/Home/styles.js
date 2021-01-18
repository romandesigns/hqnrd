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
