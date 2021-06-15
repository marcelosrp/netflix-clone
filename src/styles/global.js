import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --container: 100rem;
    --container-fluid: 100%;

    --xsmall: 1.3rem;
    --small: 1.6rem;
    --normal: 1.9rem;
    --large: 2.5rem;
    --xlarge: 3rem;

    --primary-color: #e50914;
    --preto: #000;
    --preto2: #141414;
    --branco: #FFF;
    --cinza: #303030;
    --cinza2: #757575;
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
  
  a {
    text-decoration: none;
  }

  button {
    border: none;
  }
`

export default GlobalStyles
