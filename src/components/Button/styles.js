import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${(props) =>
    props.primary ? 'var(--primary-color)' : 'var(--branco)'};
  border: none;
  color: ${(props) =>
    props.primary ? 'var(--branco)' : 'var(--primary-color)'};
  cursor: pointer;
  font-size: var(--large);
  font-weight: 400;
  padding: 1.5rem 2.5rem;
  text-decoration: none;
`
