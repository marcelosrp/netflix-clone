import styled from 'styled-components'

export const Form = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`

export const InputWrapper = styled.div`
  position: relative;
`

export const InputLabel = styled.label`
  color: var(--cinza);
  cursor: pointer;
  display: block;
  font-size: var(--small);
  font-weight: 400;
  padding-left: 1rem;
  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all;
  top: 50%;
  transform: translateY(-45%);

  &:invalid {
    color: var(--cinza);
    font-weight: 400;
    padding-left: 1rem;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: translateY(-45%);
    transition: 0.2s ease all;
  }
`

export const Input = styled.input`
  border: none;

  &.login {
    color: var(--cinza);
    font-size: var(--small);
    padding: 2rem 1rem;
    width: 45rem;
  }

  &:focus,
  &:valid {
    outline: none;
    & ~ ${InputLabel} {
      font-size: 1.2rem;
      font-weight: 600;
      top: 0.2rem;
      transform: translateY(0);
    }
  }
`
