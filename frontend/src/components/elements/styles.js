import styled from "styled-components";

export const NavToggleBtn = styled.button`
  position: absolute;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
  z-index: 2000;
  top: 2rem;
  width: 10rem;
  height: 4rem;
  box-shadow: ${({ theme }) => theme.layout.boxShadow};
  font-weight: 800;
  color: ${({ theme }) => theme.palette.text_color};
  display: none;
  cursor: pointer;
  svg {
    fill: ${({ theme }) => theme.palette.third} !important;
    font-size: 1.8rem;
  }
  p {
    margin: 0 0.3rem 0 0;
  }

  @media only screen and (max-width: 58rem) {
    display: flex;
  }

  @media (orientation: landscape) {
    @media only screen and (max-width: 58rem) {
      right: 2rem;
      top: 1rem;
    }
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled.button`
  a {
    background-color: ${({ bg, theme }) =>
      bg === "dark" ? theme.palette.dark : bg === "primary" ? theme.palette.primary : bg === "secondary" ? theme.palette.secondary : theme.palette.gray4};
  }
`;

export const ButtonSubmitStyled = styled.div`
  padding: calc(${({ theme }) => theme.layout.innerPadding} - 1rem);

  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.layout.radius};
  text-align: center;
  font-weight: 700;
  line-height: 4rem;

  button {
    color: ${(props) => props.theme.palette.white};
    background-color: ${({ bg, theme }) => (bg === "primary" ? theme.palette.primary : theme.palette.gray4)};
  }
`;

export const MainStyled = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
