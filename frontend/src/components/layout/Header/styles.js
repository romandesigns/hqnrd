// Dependencies
import styled from "styled-components";

export const HeaderPageStyled = styled.header`
  background-color: var(--gradient_prime);
  border-radius: var(--radius);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem ${({ room }) => (room === "detail" ? "auto" : "40rem")};
  overflow: hidden;
  position: relative;
  a {
    color: var(--light);
    &:hover {
      color: var(--light);
    }
  }
  &::before,
  &::after {
    bottom: 0;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 0;
  }
  &::before {
    background: ${({ img_src }) => `url(${img_src})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &::after {
    background: var(--gradient_sec);
    backdrop-filter: var(--blur);
  }
`;
