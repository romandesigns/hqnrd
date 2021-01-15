import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: red;
  cursor: pointer;
  &:focus,
  &:hover {
    outline: none;
    border: none;
  }
`;
