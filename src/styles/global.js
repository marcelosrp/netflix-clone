import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --container: 100rem;

    --normal: 1.9rem;
    --large: 2.5rem;
    --xlarge: 5re;

    --primary-color: #e50914;
    --preto: #000;
    --branco: #FFF;
    --cinza: #303030;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    background-color: var(--preto);
    color: var(--branco);
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
`

export default GlobalStyles
