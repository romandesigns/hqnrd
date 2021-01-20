// Dependencies
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
      case "dark":
        return "#444444";
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
  padding: ${({ bgColor }) => (bgColor === "dark" ? "1rem 5rem" : "")};
  color: ${({ bgColor }) => (bgColor === "dark" ? "#f9f9f9" : "inherit")};
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  svg {
    margin-right: calc(var(--margin) 0.5rem);
  }
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

export const Feature = styled.article`
  border-radius: var(--radius);
  border: 0.1rem solid var(--gray);
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  figure {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    span {
      display: block;
      font-size: 0;
      overflow: hidden;
      border-radius: 0 0 var(--radius) var(--radius);
      img {
        width: 100%;
        box-shadow: var(--shadow);
      }
    }
    h3 {
      margin-bottom: calc(var(--margin) - 1rem);
    }
  }
`;

export const FeatureFigCaption = styled.figcaption`
  padding: var(--padding);
`;

export const RoomDetails = styled.div`
  font-size: 1.35rem;
  position: relative;
`;

export const RoomDetailPrice = styled.div`
  position: absolute;
  font-size: 1.35rem;
  bottom: 0;
  right: 0;
  padding: 2rem;
  background: var(--success);
  color: var(--light);
  font-weight: 800;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  box-shadow: var(--shadow);
`;

export const Details = styled.figcaption``;

export const BrandWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 10%;
  }
  h2 {
    margin-top: 1rem;
  }
`;
