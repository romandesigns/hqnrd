// Dependencies
import styled from "styled-components";

export const NavbarPageStyled = styled.nav`
  background-color: white;
  display: grid;
  justify-self: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 80%;
  margin: var(--margin);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  position: relative;
  z-index: 1;
`;

export const NavbarPageUlStyled = styled.ul`
  margin: 0;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, auto));
  li {
    display: inline-block;
    a {
      text-decoration: none;
      display: block;
      color: var(--text-color);
      padding: calc(var(--padding) - 0.4rem) var(--padding);
    }
  }
`;
