// Dependencies
import styled from "styled-components";

export const HeaderPageStyled = styled.header`
  background-color: var(--gradient_prime);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 9rem 40rem;
  border-radius: var(--radius);
  overflow: hidden;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }
  &::before {
    background: ${({ img_src }) => `url(${img_src})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  &::after {
    background: var(--gradient_sec);
  }
`;

export const HeaderPageContentStyled = styled.div`
  justify-self: center;
  align-self: center;
  position: relative;
  z-index: 2;
`;
