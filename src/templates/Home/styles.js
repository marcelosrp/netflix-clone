import styled from 'styled-components'

import destaque from '../../assets/images/destaque.jpg'

export const MainHome = styled.main`
  min-height: 100vh;
  position: relative;
  width: 100%;
`

export const DestaqueHome = styled.section`
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 100%),
    url(${destaque});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 75vh;
  width: 100%;
`
