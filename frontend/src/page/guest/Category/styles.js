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
  grid-auto-rows: 32rem;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 6rem 32rem;

  & > button {
    align-self: center;
  }
`;
