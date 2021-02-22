// Dependencies
import styled from "styled-components";

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  ul {
    width: 100%;
    display: flex;
    margin: var(--margin) 0;
    li {
      a {
        font-weight: 600;
        font-size: 1.3rem;
        &:hover {
          box-shadow: 0px 3px 0 0px var(--success);
          color: var(--success);
          text-decoration: none;
        }
      }
      a.active {
        color: var(--success);
        display: block;
        box-shadow: 0px 3px 0 0px var(--success);
        width: 100%;
      }
      &:nth-child(1) {
        margin-right: calc(var(--margin) - 1rem);
      }
      &:nth-child(2) {
        margin-left: calc(var(--margin) - 1rem);
      }
      &:last-child {
        margin-left: auto;
      }
    }
    li:last-child {
    }
  }
`;

export const MainDetails = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: auto;
  grid-column-gap: calc(var(--gap) + 2rem);
`;
export const UserDetails = styled.section``;
export const AvatarWrapper = styled.div``;
export const Avatar = styled.figure`
  margin-bottom: calc(var(--margin) + 2rem);
`;
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin: 0;
    display: block;
    max-width: 100%;
    margin: 0.5rem 0;
  }
`;
export const Details = styled.section`
  p {
    font-size: 3rem;
  }
`;

export const Heading = styled.div`
  margin-bottom: var(--margin);
  h2 {
    font-size: 3.5rem;
  }
`;

export const DetailsWrapper = styled.div`
  p {
    margin-bottom: calc(var(--margin) - 1rem);
    font-size: 1.5rem;
    strong {
      display: inline-block;
      margin-right: 0.7rem;
    }
  }
`;
