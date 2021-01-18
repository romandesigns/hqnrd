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
  margin-bottom: var(--margin);
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
  grid-template-columns: 9rem 1fr 1fr 9rem;
  grid-template-rows: 35rem 35rem;
`;

export const UnitsCategory = styled.article`
  border-radius: var(--radius);
  overflow: hidden;
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: var(--light);
    text-decoration: none;
    font-size: 2rem;
    position: relative;
    h4 {
      position: absolute;
      bottom: 0.6rem;
      left: 0.6rem;
      z-index: 8;
      color: var(--text-color);
      background: white;
      padding: 1.2rem var(--padding);
      font-size: 1.4rem;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }
    &::before {
      content: "";
      position: absolute;
      display: block;
      height: 100%;
      width: 100%;
      background-color: var(--faded-dark);
      transition: background var(--transition);
      z-index: 0;
    }
    &:hover::before {
      background-color: transparent;
    }
  }
  &:nth-child(1) {
    grid-column: 2 / 3;
    a {
      background: var(--primary) url("./img/cat/familiar.jpg") no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &:nth-child(2) {
    a {
      background: var(--primary) url("./img/cat/doble-bed.jpg") no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &:nth-child(3) {
    grid-column: 2 / 3;
    a {
      background: var(--primary) url("./img/cat/master.jpg") no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &:nth-child(4) {
    a {
      background: var(--primary) url("./img/cat/basic.jpg") no-repeat center center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
