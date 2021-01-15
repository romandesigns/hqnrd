//  Dependencies
import styled from "styled-components";

export const HeaderHomeWrapper = styled.div`
  background-color: var(--faded-light);
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: calc(var(--padding) + 2rem);
  border-radius: var(--radius);
  box-shadow: var(--shadow);

  img {
    max-width: 7rem;
  }
`;
