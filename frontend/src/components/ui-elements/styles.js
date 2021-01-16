import styled from "styled-components";

const setBtnBgColor = {
  bg: (bg) => {
    switch (bg) {
      case "primary":
        return "#1873b0";
      case "success":
        return "#31b0be";
      case "danger":
        return "#be316e";
      case "warning":
        return "#9fa936";
      default:
        return "#e8e8e8";
    }
  },
};

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${({ bgColor }) => (bgColor ? setBtnBgColor.bg(bgColor) : setBtnBgColor.bg(null))};
  cursor: pointer;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  a {
    display: block;
    text-decoration: none;
    color: var(--light);
    padding: 1rem 2rem;
    &:hover {
      color: var(--light);
    }
  }
  &:focus,
  &:hover {
    outline: none;
    border: none;
  }
`;
