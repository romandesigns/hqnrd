import styled from "styled-components";

export const HeaderStyled = styled.header`
  background: url("../img/assets/402-01.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.layout.radius};
  padding: ${({ theme }) => theme.layout.innerPadding};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: ${({ theme }) => theme.layout.radius};
    background: ${({ theme }) => theme.palette.gradient_sec};
    z-index: 0;
  }
`;

export const HeaderContentWrapper = styled.div`
  width: 90%;
  height: 100%;
  padding: 8rem 0;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
