// Dependencies
import styled from "styled-components";

export const ReviewsSectionStyled = styled.section`
  border-radius: ${({ theme }) => theme.layout.radius};
  background-color: ${({ theme }) => theme.palette.white};
  padding: ${({ theme }) => theme.layout.innerPadding};

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
`;

export const ReviewArticleStyled = styled.article`
  border: 1px solid red;
  display: grid;
  grid-template-columns: auto 1fr;

  figure {
    margin: 0;
    padding: 0;
    border-radius: ${({ theme }) => theme.layout.radius};
    img {
      max-width: 100%;
    }
  }
`;

export const ReviewDetailsStyled = styled.article`
  figure {
    margin: 0;
    padding: 0;
    border-radius: ${({ theme }) => theme.layout.radius};
    img {
      max-width: 100%;
    }
  }
`;

export const ReviewDetailsTopStyled = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    margin: 0;
  }
`;

export const ReviewDetailsCenterStyled = styled.div``;

export const ReviewDetailsBottomStyled = styled.div``;
