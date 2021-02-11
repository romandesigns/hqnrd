// Dependencies
import styled from "styled-components";

export const Container = styled.section`
  backdrop-filter: var(--blur);
  background-color: var(--faded-light);
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  inset: 0px;
  left: 0;
  overflow: hidden;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;
  & > button {
    margin-left: 42rem;
    position: relative;
    top: 6rem;
  }
`;
