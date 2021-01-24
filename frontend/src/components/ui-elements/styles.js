// Dependencies
import styled from "styled-components";

const setBgColor = {
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
      case "light":
        return "#ffffff";
      case "light-gray":
        return "#f9f9f9";
      default:
        return "#e8e8e8";
    }
  },
};

export const Button = styled.button`
  background-color: ${({ bgColor }) => (bgColor ? setBgColor.bg(bgColor) : setBgColor.bg(null))};
  border-radius: var(--radius);
  border: none;
  box-shadow: var(--shadow);
  color: ${({ bgColor }) => (bgColor === "dark" ? "#f9f9f9" : "inherit")};
  cursor: pointer;
  max-height: 4rem;
  max-width: 17rem;
  outline: none;
  padding: ${({ bgColor }) => (bgColor === "dark" ? "1rem 3rem" : "")};
  width: 100%;
  svg {
    margin-right: calc(var(--margin) 0.5rem);
  }
  a {
    color: var(--light);
    display: block;
    padding: 1rem 2rem;
    text-decoration: none;
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
  background: ${({ bg }) => (bg === "light" ? setBgColor.bg("light") : bg === "light-gray" ? setBgColor.bg("light-gray") : "")};
  a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }
  figure {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    span {
      border-radius: 0 0 var(--radius) var(--radius);
      display: block;
      font-size: 0;
      overflow: hidden;
      img {
        box-shadow: var(--shadow);
        width: 100%;
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
  background: var(--text-color);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  bottom: 0;
  box-shadow: var(--shadow);
  color: var(--light);
  font-size: 1.5rem;
  font-weight: 600;
  padding: var(--padding);
  position: absolute;
  right: 0;
`;

export const Details = styled.figcaption``;

export const BrandWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  img {
    max-width: 10%;
  }
  h1 {
    margin-top: 0.7rem;
  }
  h2 {
    margin-top: 1rem;
  }
`;
