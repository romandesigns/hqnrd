// Dependencies
import styled from "styled-components";

export const NavbarPageStyled = styled.nav`
  align-items: center;
  align-self: center;
  background-color: white;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  display: grid;
  justify-content: center;
  justify-self: center;
  margin: var(--margin) var(--margin) 0 var(--margin);
  max-width: 91%;
  position: relative;
  width: 100%;
  z-index: 1;
`;

export const NavbarPageUlStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, minmax(auto, auto));
  margin: 0;
  padding-left: 0;
  li {
    display: inline-block;

    a {
      color: var(--text-color);
      display: block;
      padding: calc(var(--padding) - 0.4rem) var(--padding);
      text-decoration: none;
      &:hover {
        color: var(--success);
      }
    }
    .active {
      color: var(--primary);
      overflow: hidden;
      position: relative;
      &::before {
        background-color: var(--primary);
        border-radius: var(--radius);
        bottom: -1.5rem;
        content: "";
        height: 2rem;
        left: 0;
        position: absolute;
        right: 0;
        transition: bottom var(--transition);
      }
      &:hover {
        color: var(--success);
      }
    }
  }
`;
