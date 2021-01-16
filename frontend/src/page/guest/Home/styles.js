//  Dependencies
import styled from "styled-components";

export const Wrapper = styled.div`
  align-self: center;
  justify-self: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--padding) calc(var(--padding) + 2rem);
  border-radius: var(--radius);
  backdrop-filter: var(--blur);
  background-color: var(--faded-light);

  img {
    max-width: 7rem;
  }

  h1 {
    color: var(--text-color);
    margin-top: 1rem;
  }
  p {
    font-size: 19px;
    margin-bottom: 10px;
  }
`;

export const Main = styled.main`
  display: grid;
  grid-gap: var(--gap);
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
`;

export const Features = styled.section`
  display: grid;
  grid-column-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
`;

export const Feature = styled.article`
  background-color: var(--light);
  border-radius: var(--radius);
  overflow: hidden;
  figure {
    margin: 0;
    padding: 0;
    img {
      max-width: 100%;
    }
    h3 {
      margin-bottom: calc(var(--margin) - 1rem);
    }
  }
`;

export const FeatureFigCaption = styled.figcaption`
  padding: var(--padding);
`;

export const PhotoGallery = styled.ul`
  padding-left: 0;
  display: grid;
  padding: var(--padding);
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1));
  grid-auto-flow: dense;
  grid-auto-rows: 18rem;
  gap: var(--gap);
  background-color: var(--light);
  border-radius: var(--radius);
`;

export const GalleryItem = styled.li`
  &:nth-child(1) {
    grid-column: 2 / span 3;
  }
  &:nth-child(4) {
    grid-row: 1 / span 3;
    background-position: -50rem center;
  }
  &:nth-child(5) {
    grid-row: 1 / span 2;
  }
`;

export const GalleryFifure = styled.figure`
  background: ${({ img }) => (img ? `url(${img})` : "")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: var(--radius);
  height: 100%;
  width: 100%;
`;
export const Units = styled.section`
  display: grid;
  grid-row-gap: var(--gap);
  grid-template-columns: 20rem 1fr 1fr 20rem;
  grid-template-rows: 9rem auto;
  padding: var(--padding);
  background-color: var(--light);

  header {
    border: 1px solid red;
    grid-column: 1 / span 4;
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      display: grid;
      grid-template-columns: 20rem 20rem;
      grid-column-gap: var(--gap);

      li {
        text-align: center;

        button {
          background-color: transparent;
          border: none;
          box-shadow: 0 14px 0 -10px #444;
          display: inline-block;
          width: 100%;
          font-size: 3rem;
          padding-bottom: 0.5rem;
          font-weight: 700;
          cursor: pointer;
          color: #444;
          &:focus {
            border: none;
            outline: none;
          }
        }
      }
    }
  }

  section {
    display: grid;
    gap: var(--gap);
    grid-column: 1 / 5;
    grid-template-columns: 0.2fr 1fr 1fr 0.2fr;
    grid-template-rows: 25rem 25rem;

    article {
      &:nth-child(1) {
        grid-column: 2 / 3;
        border: 1px solid red;
      }
      &:nth-child(3) {
        grid-column: 2 / 3;
        border: 1px solid green;
      }
      border: 1px solid purple;
    }
  }
`;
