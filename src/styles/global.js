import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --container: 100rem;
    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;

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
