// Dependencies
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: var(--padding);
  background-color: var(--light);
  box-sizing: border-box;
  border-radius: var(--radius);
  width: 100%;
  max-width: 40rem;
  box-shadow: var(--shadow);

  & > div {
    padding: var(--padding) 0;

    & + a {
      display: block;
      margin-top: var(--margin);
      margin-bottom: 1rem;
      text-decoration: none;
      text-align: right;
    }
  }
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

    & + div {
      padding: 0;
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
    }
  }
`;
