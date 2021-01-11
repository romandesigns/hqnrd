import styled from "styled-components";

export const FormMainStyled = styled.main`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormHeaderStyled = styled.header`
  width: inherit;
  padding: ${({ theme }) => theme.layout.innerPadding};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    padding: calc(${({ theme }) => theme.layout.innerPadding} - 0.5rem);
    max-width: ${({ theme }) => theme.layout.imgWidth1};
  }
  h1 {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const FormContentStyled = styled.section`
  padding: ${({ theme }) => theme.layout.innerPadding};
  width: 100%;
  max-width: ${({ SignIn }) => (SignIn ? "30rem" : "55rem")};
  &,
  & > form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  a {
    margin-top: 2rem;
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const FormTypesStyled = styled.div`
  &,
  label {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  label {
    margin: 1rem;
    cursor: pointer;
  }
`;
