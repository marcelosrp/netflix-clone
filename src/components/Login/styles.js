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
