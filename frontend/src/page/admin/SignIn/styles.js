// Dependencies
import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    fieldset {
      display: block;
      width: 100%;
      max-width: 32rem;
      padding: var(--padding);
      border-color: var(--light);
    }

    & + div {
      padding: 0;
      display: flex;
      justify-content: space-between;
      font-size: 1.2rem;
    }
  }
`;

export const OutterWrapper = styled.section`
  width: 100%;
  max-width: 40rem;
`;

export const Wrapper = styled.section`
  margin-top: calc(var(--margin) * 2);
  background-color: var(--light);
  box-sizing: border-box;
  border-radius: var(--radius);
  width: 100%;
  box-shadow: var(--shadow);
  padding: var(--padding);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--margin);
`;
