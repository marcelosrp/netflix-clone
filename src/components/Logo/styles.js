import styled from 'styled-components'

export const LogoWrapper = styled.div`
  svg {
    fill: var(--primary-color);
    width: 12rem;

    @media (max-width: 700px) {
      width: 10rem;
    }
  }
`
