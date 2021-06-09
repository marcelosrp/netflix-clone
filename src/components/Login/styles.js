import styled from 'styled-components'

export const WrapperLogin = styled.div`
  position: relative;
  width: 100%;
`

export const ItemForm = styled.div`
  display: ${({ ajuda }) => ajuda && 'flex'};
  justify-content: ${({ ajuda }) => ajuda && 'space-between'};
  margin-bottom: 1.5rem;
  width: 100%;

  button {
    border-radius: 5px;
    font-size: var(--normal);
    margin-top: 2rem;
    padding: 1.2rem;
    width: 100%;
  }
`

export const Label = styled.label`
  align-items: center;
  cursor: pointer;
  display: flex;
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--xsmall);
`

export const Checkbox = styled.input`
  margin-right: 0.5rem;
`

export const LinkAjuda = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: var(--xsmall);
`

export const InfosLoginWrapper = styled.div`
  margin-top: 4rem;
  position: relative;
  width: 100%;
`

export const FBLogin = styled.a`
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  font-size: var(--xsmall);
  img {
    margin-right: 1rem;
    width: 2rem;
  }
`

export const AssineAGora = styled.p`
  color: rgba(255, 255, 255, 0.5);
  margin: 2rem 0;

  a {
    color: var(--branco);
  }
`

export const TextoSeguranca = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;

  button {
    background-color: transparent;
    border: none;
    color: #0071eb;
    cursor: pointer;
  }

  span {
    color: rgba(255, 255, 255, 0.5);
    display: block;
    font-size: 1.1rem;
    margin-top: 1.5rem;

    a {
      color: #0071eb;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
