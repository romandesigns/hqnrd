// Dependencies
import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--light);
`;

export const MainContent = styled.main`
  padding: var(--padding);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export const Brand = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  div img {
    max-width: 10%;
  }
`;

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    margin-top: 1rem;
  }
`;

export const Details = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsWrapper = styled.div`
  padding-top: var(--padding);
  padding-bottom: var(--padding);
`;

export const DeveloperInfo = styled.section`
  display: flex;
  background-color: var(--gray);
  justify-content: space-between;
  grid-column: 1/3;
  padding: var(--padding);
  border-radius: var(--radius);
`;
