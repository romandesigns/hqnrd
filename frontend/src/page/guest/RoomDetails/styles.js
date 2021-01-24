// Dependencies
import styled from "styled-components";

export const RoomDetails = styled.main``;

export const PhotoGallery = styled.ul`
  border-radius: var(--radius);
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: 18rem;
  grid-gap: var(--gap);
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  padding-left: 0;
  padding: 1rem var(--padding) 0 var(--padding);
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
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--radius);
  height: 100%;
  width: 100%;
`;
