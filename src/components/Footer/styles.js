import styled from 'styled-components'

export const Footer = styled.footer`
  border-top: 8px solid var(--cinza);
  padding: 5rem 0;
  width: 100%;

  @media (max-width: 700px) {
    padding: 2rem;
  }

  & a {
    color: var(--cinza2);
  }
`

export const Container = styled.div`
  margin: 0 auto;
  width: var(--container);

  @media (max-width: 700px) {
    width: 100%;
  }
`

export const LinksWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 1.5rem;
  width: 100%;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 1rem;
  }

  a {
    font-size: var(--xsmall);
    margin-bottom: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`
