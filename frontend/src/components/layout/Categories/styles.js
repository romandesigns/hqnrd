//  Dependencies
import styled from "styled-components";

export const Units = styled.section`
  background-color: var(--light);
  display: grid;
  grid-row-gap: var(--gap);
  grid-template-columns: 10rem 1fr 1fr 10rem;
  grid-template-rows: 9rem auto;
  padding: var(--padding);
`;

export const UnitsHeader = styled.header`
  align-items: flex-end;
  box-shadow: inset 0 -10px 6px -12px rgb(0 0 0 / 59%);
  display: flex;
  grid-column: 2 / 4;
  justify-content: center;
  margin-bottom: calc(var(--margin) * 2);
`;

export const UnitsHeaderNav = styled.nav`
  ul {
    display: flex;

    li {
      display: inline-block;
      margin: 0 0.7rem;
      text-align: center;
      text-align: center;

      button {
        background-color: var(--primary);
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
        border: none;
        box-shadow: inset 0 -10px 6px -12px rgb(0 0 0 / 59%);
        color: var(--light);
        cursor: pointer;
        display: block;
        font-size: 1.4rem;
        font-weight: 700;
        padding: 1rem 7rem;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        width: 100%;

        &:focus {
          border: none;
          outline: none;
        }
      }
    }
  }
`;

export const UnitsCategories = styled.section`
  display: grid;
  grid-auto-rows: auto;
  grid-column: 1 / 5;
  grid-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;

  article {
    background-color: var(--lighter-gray);
    h3 {
      font-size: 2rem;
    }
  }
`;

export const Rooms = styled.main`
  display: grid;
  grid-column: 1 / 5;
  grid-row-gap: var(--gap);
  grid-template-columns: 1fr;
  grid-template-rows: 8rem auto;
`;

export const Filter = styled.section`
  align-self: center;
  grid-column: 1/4;
  justify-self: center;
`;

export const RoomsList = styled.section`
  display: grid;
  grid-auto-rows: 33rem;
  grid-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;

  article {
    figcaption {
      background-color: var(--lighter-gray);
    }
    a {
      color: var(--text-color);
      text-decoration: none;
    }
  }
`;
