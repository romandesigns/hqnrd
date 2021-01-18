//  Dependencies
import styled from "styled-components";

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
