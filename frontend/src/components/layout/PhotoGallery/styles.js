//  Dependencies
import styled from "styled-components";

export const Gallery = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1fr;
  background-color: var(--light);
`;

export const GalleryDescription = styled.div`
  padding: var(--padding);
  align-self: center;
  grid-row: 1;
  h3 {
    padding-top: 1rem;
  }
`;

export const PhotoGallery = styled.ul`
  padding-left: 0;
  display: grid;
  padding: 1rem var(--padding) 0 var(--padding);
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-auto-flow: dense;
  grid-auto-rows: 18rem;
  grid-gap: var(--gap);
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

export const GalleryFigure = styled.figure`
  background: ${({ img }) => (img ? `url(${img})` : "")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: var(--radius);
  height: 100%;
  width: 100%;
`;
