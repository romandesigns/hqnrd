// Dependencies
import styled from "styled-components";

export const Header = styled.section`
  margin-bottom: var(--margin);
  padding: var(--padding) 0;
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const Wrapper = styled.section`
  padding: var(--padding);
  background-color: var(--light);
  box-sizing: border-box;
  border-radius: var(--radius);
  width: 100%;
  max-width: 40rem;
  box-shadow: var(--shadow);
`;
