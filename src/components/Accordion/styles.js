import styled from 'styled-components'

export const FaqTabs = styled.div`
  margin: 5rem auto 0 auto;
  overflow: hidden;
  width: var(--container);
`
export const FaqTab = styled.div`
  color: white;
  margin-bottom: 1rem;
  overflow: hidden;
  width: 100%;
`
export const FaqTabLabel = styled.label`
  background-color: var(--cinza);
  cursor: pointer;
  display: flex;
  font-size: var(--large);
  font-weight: bold;
  justify-content: space-between;
  padding: 1.5rem 3rem;

  svg {
    transition: transform 0.3s ease;
  }
`
export const FaqTabContent = styled.div`
  color: var(--branco);
  background-color: var(--cinza);
  font-size: var(--normal);
  max-height: 0;
  padding: 0 3rem;
  transition: all 0.35s;
`
export const FaqInput = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked {
    & + ${FaqTabLabel} {
      svg {
        transform: rotate(-45deg);
      }
    }

    & ~ ${FaqTabContent} {
      margin-top: 0.1rem;
      max-height: 100vh;
      padding: 3rem;
    }
  }
`
