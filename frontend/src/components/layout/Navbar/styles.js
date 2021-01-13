// Dependencies
import styled from "styled-components";

export const NavbarPageStyled = styled.nav`
  background-color: white;
  width: 85%;
  display: grid;
  justify-content: center;
  align-items: center;
  /* margin: var(--margin) auto 0; */
  border-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const NavbarPageUlStyled = styled.ul`
  margin: 0;
  padding-left: 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, auto));
  li {
    display: inline-block;
    a {
      display: block;
      padding: calc(var(--padding) - 0.4rem) var(--padding);
    }
  }
`;
