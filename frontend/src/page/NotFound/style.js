// Dependencies
import styled from "styled-components";

export const Main = styled.main`
  height: calc(100vh - 45rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius);

  h2 {
    margin-bottom: calc(var(--margin));
  }
`;
