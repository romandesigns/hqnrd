import styled from "styled-components";

export const FooterStyled = styled.footer`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.layout.radius};
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  margin-bottom: 2rem;
  a {
    color: ${({ theme }) => theme.palette.primary};
  }
`;

export const FooterBrandAndAddressStyled = styled.section`
  display: flex;
  /* border: 1px solid pink; */
  padding: 4rem 0;
  & > article {
    flex: 1 1 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const FooterBrandStyled = styled.article`
  display: flex;
  /* border: 1px solid yellow; */
  img {
    max-width: ${({ theme }) => theme.layout.imgWidth1};
    margin: 0 0.8rem 0 0;
  }
  h4 {
    display: block;
  }
`;

export const FooterBrandText = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    color: ${({ theme }) => theme.palette.primary};
    margin: 0 1.4rem 0 0;
    font-size: 1.8rem;
  }
`;

export const FooterContactStyled = styled.article`
  /* border: 1px solid blue; */
  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 1rem 0.5rem;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        display: inline-block;
        font-size: 1.3rem;
        margin: 0 1rem;
      }
    }
  }
`;

export const FooterAddressWrapper = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
`;

export const FooterAddressStyled = styled.article`
  /* border: 1px solid hotpink; */
  display: flex;
  flex-direction: column;
`;

export const FooterSocialStyled = styled.article`
  /* border: 1px solid blue; */
  h5 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      margin: 1rem 0.5rem;
      padding: 0;
      list-style: none;
      display: flex;
      align-items: center;

      svg {
        width: 1.5rem;
        height: 1.5rem;
        display: inline-block;
        margin: 0 1rem;
      }
    }
  }
`;

export const FooterCopyAndAddressStyled = styled.section`
  background-color: ${({ theme }) => theme.palette.fourth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.layout.innerPadding};
  border-bottom-left-radius: ${({ theme }) => theme.layout.radius};
  border-bottom-right-radius: ${({ theme }) => theme.layout.radius};
`;

export const FooterCopyStyled = styled.article`
  color: ${({ theme }) => theme.palette.gray3};
`;

export const FooterSignatureStyled = styled.article`
  color: ${({ theme }) => theme.palette.gray3};
`;
