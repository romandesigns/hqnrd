import styled from "styled-components";

export const HomeHeaderStyled = styled.div`
  display: inline-block;
  background-color: rgb(255 255 255 / 45%);
  border-radius: ${({ theme }) => theme.layout.radius};
  padding: 5rem 2rem;
  backdrop-filter: ${({ theme }) => theme.layout.blur};
  text-align: center;
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  width: 100%;
  max-width: 40rem;

  h1 {
    font-weight: 700;
    margin-bottom: -0.5rem;
    color: ${({ theme }) => theme.palette.white};
  }
  p {
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.text_color};
  }
  img {
    display: inline-block;
    max-width: ${(props) => props.theme.layout.imgWidth1};
    margin-bottom: 1rem;
  }
`;
