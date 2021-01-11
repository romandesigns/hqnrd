import styled from "styled-components";

export const FeaturesSectionStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  border-radius: ${({ theme }) => theme.layout.radius};
  background-color: ${({ theme }) => theme.palette.white};
  margin: 2rem 0;
  padding: ${({ theme }) => theme.layout.innerPadding};
  /* justify-content: center; */
  /* align-items: center; */
`;

export const FeaturesArticleStyled = styled.article`
  /* border: 1px solid ${({ theme }) => theme.palette.border}; */
  border-radius: ${({ theme }) => theme.layout.radius};
  /* margin: 1rem; */
`;

export const FeatureHeaderStyled = styled.header`
  padding: ${({ theme }) => theme.layout.innerPadding} 0;

  h3 {
    margin: 0;
  }
`;

export const FeatureMainStyled = styled.main`
  figure {
    margin: 0;
  }
`;

export const FeatureFooterStyled = styled.footer`
  margin: 0;
  padding: ${({ theme }) => theme.layout.innerPadding} 0;
`;
