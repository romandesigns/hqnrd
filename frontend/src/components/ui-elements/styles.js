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

export const Feature = styled.article`
  border-radius: var(--radius);
  padding: var(--padding);
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
      border-radius: var(--radius);
      margin: var(--padding) 0 0 0;
      img {
        width: 100%;
        box-shadow: var(--shadow);
      }
    }
    h3 {
      ${({ cardType }) => console.log(cardType)}
      margin-bottom: calc(var(--margin) - 1rem);
    }
  }
`;

export const FeatureFigCaption = styled.figcaption``;

export const RoomDetails = styled.div``;
export const Details = styled.figcaption``;
