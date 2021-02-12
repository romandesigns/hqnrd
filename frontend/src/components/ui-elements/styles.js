// Dependencies
import styled from "styled-components";

const setBgColor = {
  bg: (bg) => {
    switch (bg) {
      case "primary":
        return "var(--primary)";
      case "darker-primary":
        return "var(--darker-primary)";
      case "success":
        return "var(--success)";
      case "danger":
        return "var(--danger)";
      case "dark":
        return "var(--dark)";
      case "darker":
        return "var(--darker)";
      case "green":
        return "var(--whatsapp)";
      case "warning":
        return "var(--warning)";
      case "light":
        return "var(--light)";
      case "light-gray":
        return "var(--light-gray)";
      case "lighter-gray":
        return "var(--lighter-gray)";
      case "correo":
        return "var(--darker)";
      case "google":
        return "var(--google)";
      case "facebook":
        return "var(--facebook)";
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
  color: ${({ bgColor }) => (bgColor === "dark" || bgColor === "darker" ? setBgColor.bg("gray") : "inherit")};
  cursor: pointer;
  display: inline-block;
  margin: ${({ bgColor }) => (bgColor === "darker" ? "var(--margin) 0 !important" : "var(--margin) 0")};
  max-height: 4rem;
  max-width: 17rem;
  outline: none;
  padding: ${({ bgColor }) => (bgColor === "dark" ? "1rem 3rem" : bgColor === "darker" ? "1.25rem 3rem" : "")};
  width: 100%;
  svg {
    margin-right: calc(var(--margin) 0.5rem);
  }
  a {
    padding: 1rem 2rem;
    text-decoration: none;
    color: var(--light);
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    box-sizing: border-box;
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

export const BTNStyles = {
  btn: {
    backgroundColor: "var(--darker)",
    borderRadius: "var(--radius)",
    border: "none",
    boxShadow: "var(--shadow)",
    color: "var(--light)",
    cursor: "pointer",
    display: "inline-block",
    margin: "var(--margin) 0",
    maxHeight: "4rem",
    outline: "none",
    padding: "1.25rem 3rem",
    width: "100%",
  },
  btn_icon: {
    marginRight: "calc(var(--margin) 0.5rem)",
  },
};

export const Feature = styled.article`
  /* background: ${({ bg }) => (bg === "light" ? setBgColor.bg(bg) : bg === "light-gray" ? setBgColor.bg(bg) : "")}; */

  border-radius: var(--radius);
  border: 0.1rem solid var(--gray);
  a {
    display: block;
    height: 100%;
    text-decoration: none;
    width: 100%;
  }
  figure {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    height: 0;
    padding-top: calc(100% / (var(--aspect-ratio169)));
    font-size: 0;
    border-radius: 0 0 var(--radius) var(--radius);
    position: relative;
    * {
      box-shadow: var(--shadow);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: cover;
    }
  }
  h3 {
    margin-bottom: calc(var(--margin) - 1rem);
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
  box-shadow: var(--shadow);
  color: var(--light);
  font-size: 1.5rem;
  font-weight: 600;
  padding: calc(var(--padding) - 1.5rem) var(--padding);
  position: absolute;
  right: 0;
  top: -20px;
`;

export const Details = styled.figcaption``;

export const BrandWrapper = styled.div`
  a {
    align-items: center;
    display: flex;
    justify-content: end;
    text-decoration: none;
    &:hover {
      color: var(--darker-primary);
    }
    img {
      max-width: 6rem !important;
    }

    h1 {
      margin-top: 0.7rem;
    }

    h2 {
      margin-top: 1rem;
    }
  }
`;
