//  Dependencies
import styled from "styled-components";

export const Features = styled.section`
  display: grid;
  grid-column-gap: var(--gap);
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 1fr;

  article {
    background-color: var(--light);
  }
`;

// export const Feature = styled.article`
//   background-color: var(--light);
//   border-radius: var(--radius);
//   padding: var(--padding);
//   figure {
//     margin: 0;
//     padding: 0;
//     display: flex;
//     flex-direction: column;
//     span {
//       display: block;
//       font-size: 0;
//       overflow: hidden;
//       border-radius: var(--radius);
//       margin: var(--padding) 0 0 0;
//       img {
//         width: 100%;
//       }
//     }
//     h3 {
//       margin-bottom: calc(var(--margin) - 1rem);
//     }
//   }
// `;

export const FeatureFigCaption = styled.figcaption``;
