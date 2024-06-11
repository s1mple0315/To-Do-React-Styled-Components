import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background: #f0f2f5;
    margin: 0;
    padding: 0;
    color: #333;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
