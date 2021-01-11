import styled from "styled-components";

export const RootAppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: 100%;
  max-width: 76%;
  margin: auto;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.layout.innerPadding};

  @media only screen and (max-width: 1274px) {
    max-width: 97%;
  }
`;
