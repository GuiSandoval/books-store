import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: ${({ theme }) => theme["white-1"]};
  color: ${({ theme }) => theme["black"]};
}

input {
  color: ${({ theme }) => theme["black"]};
}
`;
