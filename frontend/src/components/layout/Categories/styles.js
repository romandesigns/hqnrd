//  Dependencies
import styled from "styled-components";

export const Units = styled.section`
  display: grid;
  grid-row-gap: var(--gap);
  grid-template-columns: 10rem 1fr 1fr 10rem;
  grid-template-rows: 9rem auto;
  padding: var(--padding);
  background-color: var(--light);
`;

export const UnitsHeader = styled.header`
  grid-column: 2 / 4;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: calc(var(--margin) * 2);
  box-shadow: inset 0 -10px 6px -12px rgb(0 0 0 / 59%);
`;

export const UnitsHeaderNav = styled.nav`
  ul {
    display: flex;

    li {
      text-align: center;
      margin: 0 0.7rem;
      text-align: center;
      display: inline-block;

      button {
        text-transform: uppercase;
        text-align: center;
        border: none;
        background-color: var(--primary);
        color: var(--light);
        display: block;
        width: 100%;
        font-size: 1.4rem;
        padding: 1rem 7rem;
        font-weight: 700;
        cursor: pointer;
        border-top-left-radius: var(--radius);
        border-top-right-radius: var(--radius);
        box-shadow: inset 0 -10px 6px -12px rgb(0 0 0 / 59%);
        text-decoration: none;

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
  grid-gap: var(--gap);
  grid-column: 1 / 5;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-auto-rows: auto;

  article {
    background-color: var(--lighter-gray);
    h3 {
      font-size: 2rem;
    }
  }
`;

export const Rooms = styled.main`
  display: grid;
  grid-row-gap: var(--gap);
  grid-column: 1 / 5;
  grid-template-columns: 1fr;
  grid-template-rows: 8rem auto;
`;

export const Filter = styled.section`
  grid-column: 1/4;
  align-self: center;
  justify-self: center;
`;

export const RoomsList = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: var(--gap);
  grid-auto-rows: 33rem;
`;
