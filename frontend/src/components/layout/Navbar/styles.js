// Dependencies
import styled from "styled-components";

export const NavbarPageStyled = styled.nav`
  background-color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  align-self: center;
  justify-self: center;
  width: 100%;
  max-width: 80%;
  margin: var(--margin) var(--margin) 0 var(--margin);
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
      position: relative;
      overflow: hidden;
      &::before {
        content: "";
        height: 20px;
        position: absolute;
        bottom: -2rem;
        left: 0;
        right: 0;
        transition: bottom var(--transition);
        background-color: red;
        border-radius: var(--radius);
      }
      &:hover::before {
        bottom: -1.5rem;
      }
      &:hover {
        color: red;
      }
    }
  }
`;
