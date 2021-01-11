// Dependencies
import styled from "styled-components";

export const NavBarNav = styled.nav`
  width: 90%;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.layout.radius};
  padding: 0 ${({ theme }) => theme.layout.innerPadding};
  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  justify-content: center;
  position: relative;
  transition: left 0.5s ease-in-out;
  z-index: 1000;

  &,
  div a,
  ul {
    display: flex;
  }

  div a {
    align-items: center;
    justify-content: center;
    margin: 0;
    flex-direction: row;
    color: ${({ theme }) => theme.palette.text_color};
    img {
      max-width: 3.5rem;
      margin: 1rem;
      display: none;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: 600;
      margin: 0;
      display: none;
    }

    p {
      display: none;
    }
  }

  @media only screen and (max-width: 929px) {
    background-color: red;
  }

  @media only screen and (max-width: 58rem) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgb(45 124 181 / 40%);
    border-radius: 0 0 0 0;
    backdrop-filter: ${({ theme }) => theme.layout.blur};
    position: fixed;
    top: 0;
    left: ${({ toggleNavBar }) => (toggleNavBar ? -100 : 0)}vw;
    bottom: 0;
    right: 0;

    div a,
    ul {
      display: flex;
      flex-direction: column;
    }

    div a {
      margin-bottom: 1rem;
      padding: 1.5rem 1rem;
      font-size: 1.5rem;
      img {
        display: flex;
        max-width: 11rem;
        margin-bottom: 1rem;
      }
      h1 {
        font-size: 2.3rem;
        color: white;
        font-weight: revert;
        padding: 0 0.8rem;
      }
      h1,
      p {
        margin: 0;
        display: block;
      }
      p {
        color: ${({ theme }) => theme.palette.text_color};
      }
    }
  }

  @media (orientation: landscape) {
    @media only screen and (max-width: 58rem) {
      flex-direction: row;
      justify-content: space-around;
      div a {
        margin: 0;
        padding: 0;
      }
      ul {
        li {
          a {
            padding: 1rem 4rem;
          }
        }
      }
    }
  }
`;

export const BrandDiv = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.4rem;
    font-weight: 600;
  }
`;

export const NavBarUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  .active {
    color: ${({ theme }) => theme.palette.primary};
    position: relative;
    text-align: center;
    &::before {
      content: "";
      background-color: ${({ theme }) => theme.palette.primary};
      position: absolute;
      width: 100%;
      height: 0.5rem;
      bottom: -1px;
      right: 0;
      left: 0;
      border-radius: 7px 7px 0 0;
    }
  }

  @media only screen and (max-width: 58rem) {
    margin-top: 1rem;
    li {
      width: 100%;
      display: block;
      margin-bottom: 1rem;
      text-align: center;
      a {
        padding: 1.8rem 7rem;
        background-color: ${({ theme }) => theme.palette.white};
        box-shadow: ${({ theme }) => theme.layout.boxShadow};
        border-radius: 5rem;
        overflow: hidden;
      }
    }
  }
`;

export const NavBarLi = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  a {
    display: block;
    padding: 1.6rem 1rem;
    color: ${({ theme }) => theme.palette.text_color};
    text-decoration: none;
  }
`;
