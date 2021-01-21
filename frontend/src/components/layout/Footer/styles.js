// Dependencies
import styled from "styled-components";

export const Container = styled.footer`
  background-color: var(--light);
`;

export const MainContent = styled.main`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: var(--padding);
`;

export const Brand = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Details = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const DetailsWrapper = styled.div`
  padding-bottom: var(--padding);
  padding-top: var(--padding);

  svg {
    transform: translateY(3px);
  }
`;

export const DeveloperInfo = styled.section`
  background-color: var(--gray);
  border-radius: var(--radius);
  display: flex;
  grid-column: 1/3;
  justify-content: space-between;
  padding: var(--padding);
`;
