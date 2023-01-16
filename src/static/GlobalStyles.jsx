import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;  
    font-family: 'GowunDodum-Regular';
    color: #000000;
    background: #eaeaea;
  }

  body {
    box-sizing: border-box;
  }

  * {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  *::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
