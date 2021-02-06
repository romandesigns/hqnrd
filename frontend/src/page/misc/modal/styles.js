// Dependencies
import styled from "styled-components";

export const Container = styled.section`
  padding: 4rem;
  background-color: red;
  position: fixed;
  inset: 0px;
  z-index: 1;
  overflow: hidden;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr 50rem 1fr;
  grid-template-rows: 2rem 1fr;
`;
