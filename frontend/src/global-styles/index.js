// Dependencies
import styled from "styled-components";
import { media } from "./media-quries";

export const AppStyled = styled.div`
  display: grid;
  height: 100%;
  ${media.mobile`background-color:red`};
  ${media.tablet`background-color:purple`};
  ${media.laptop`background-color:green`};
  ${media.desktop`background-color:blue`};
`;
