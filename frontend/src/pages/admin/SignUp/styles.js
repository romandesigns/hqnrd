import styled from "styled-components";

export const FormInputTwoColStyled = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  label {
    width: 100%;
  }
`;

export const FormInputFileStyled = styled.label`
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.palette.gray5};
    border-radius: 2.5rem;
    padding: calc(${({ theme }) => theme.layout.innerPadding} - 1rem) ${({ theme }) => theme.layout.innerPadding};
    max-width: 13rem;
    margin: 0 auto 1.2rem 0;
    box-shadow: ${({ theme }) => theme.layout.boxShadow};
    position: relative;
    cursor: pointer;

    svg {
      width: 1.5em;
      height: 1.5em;
    }
  }

  input[type="file"] {
    opacity: 0;
    position: absolute;
  }
`;
