import styled from 'styled-components'

export const DestaqueHome = styled.section`
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url('https://assets.nflxext.com/ffe/siteui/vlv3/8dc3f88b-a96a-4d8a-af9a-a69e6f3b2506/5c809235-fe67-4a98-af86-95a0a5a51e74/BR-pt-20210524-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 75vh;
  width: 100%;

  @media screen and (max-height: 750px) {
    background-attachment: fixed;
    min-height: 100vh;
  }

  @media (max-width: 700px) {
    min-height: 75vh;

    h1 {
      font-size: 2.5rem;
      line-height: 30px;
    }

    h2 {
      font-size: 1.8rem;
      line-height: 30px;
      margin-top: 1.5rem;
    }
  }
`
