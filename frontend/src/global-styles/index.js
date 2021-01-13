// Dependencies
import styled from "styled-components";
// Style component
import { media } from "./media-quries";

export const AppStyled = styled.div`
  height: 100%;
  display: grid;
  ${media.mobile`background-color:red`};
  ${media.tablet`background-color:purple`};
  ${media.laptop`background-color:green`};
  ${media.desktop`background-color:blue`};
`;
