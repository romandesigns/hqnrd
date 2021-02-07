// Dependencies
import styled from "styled-components";

export const Label = styled.strong``;

export const BtnGroup = styled.div`
  button {
    display: block;
    margin: 0;
    max-width: 100%;
  }
  small {
    display: block;
    margin-bottom: calc(var(--margin) - 1rem);
  }
`;

export const Extras = styled.article`
  margin-right: calc(var(--margin) * 3);
`;

export const ExtrasWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & ul:first-child {
    margin-right: 7rem;
  }
  ul li span {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

export const Illustration = styled.article`
  grid-column: 1;
  h4 {
    padding-left: 2rem;
  }
  img {
    max-width: 20rem;
  }
`;

export const Description = styled.article`
  border-bottom: 1px solid var(--border-color);
  padding: var(--padding) 0;
`;

export const Features = styled.article`
  align-items: start;
  display: flex;
  justify-content: end;
  margin-top: var(--margin);
  h4 {
    margin-bottom: calc(var(--margin) - 1rem);
  }
`;

export const MainWrapper = styled.div`
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;
`;

export const Details = styled.main`
  margin-top: 2rem;
  padding: var(--padding);
  background-color: var(--light);
  grid-row: 1;
  section ul {
    padding: 0;
  }
`;

export const Specs = styled.aside`
  border-radius: var(--radius);
  background-color: var(--light);
  grid-column: 2/-1;
  margin: var(--margin) 0 0 0;
  padding: var(--padding);
  p {
    margin-bottom: calc(var(--margin) - 1rem);
  }
  & p:first-child {
    font-size: 2.7rem;
  }
`;
