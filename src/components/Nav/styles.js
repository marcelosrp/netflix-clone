import styled from 'styled-components'

export const CustomLink = styled.a`
  background-color: ${(props) =>
    props.primary ? 'var(--primary-color)' : 'var(--branco)'};
  border-radius: 0.3rem;
  color: ${(props) =>
    props.primary ? 'var(--branco)' : 'var(--primary-color)'};
  font-weight: 400;
  padding: 0.5rem 1.5rem;
  text-decoration: none;
`
