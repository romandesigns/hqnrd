// Dependencies
import styled from "styled-components";

export const Header = styled.section`
  padding: 5rem 0 1rem;
`;

export const Container = styled.main`
  padding: var(--padding);
  background-color: var(--light);
  width: 100%;
  max-width: 40rem;
  margin: 0 auto;
  border-radius: var(--radius);

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    label,
    input {
      display: block;
    }
  }
`;
