//  Dependencies
import styled from "styled-components";

export const Units = styled.section`
  display: grid;
  grid-row-gap: var(--gap);
  grid-template-columns: 12rem 1fr 1fr 12rem;
  grid-template-rows: 9rem auto;
  padding: var(--padding);
  background-color: var(--light);
`;

export const UnitsHeader = styled.header`
  grid-column: 2 / 4;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: var(--margin);
  box-shadow: inset 0 -10px 6px -12px rgb(0 0 0 / 59%);
`;

export const UnitsHeaderNav = styled.nav`
  ul {
    display: flex;

    li {
      text-align: center;
      margin: 0 1.7rem;
      text-align: center;
      width: 50%;
      display: inline-block;

      a {
        text-transform: uppercase;
        text-align: center;
        border: none;
        background-color: var(--darker-primary);
        color: var(--light);
        display: block;
        width: 100%;
        font-size: 1.4rem;
        padding: 0.8rem 1rem;
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
  gap: var(--gap);
  grid-column: 1 / 5;
  grid-template-columns: 12rem 1fr 1fr 12rem;
  grid-template-rows: 30rem 30rem;
`;

export const UnitsCategory = styled.article`
  &:nth-child(1) {
    grid-column: 2 / 3;
    border: 1px solid red;
  }
  &:nth-child(3) {
    grid-column: 2 / 3;
    border: 1px solid green;
  }
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  border: 1px solid purple;
`;
