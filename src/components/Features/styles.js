import styled from 'styled-components'

export const FeatureWrapper = styled.section`
  align-items: center;
  border-top: 8px solid var(--cinza);
  display: flex;
  flex-direction: ${(props) => (props.isFliped ? 'row-reverse' : 'row')};
  justify-content: space-between;
  padding: 5rem;
  width: 100%;
`

export const FeatureItem = styled.div`
  position: relative;

  &.texto {
    width: 56rem;
  }
`

export const FeatureImg = styled.img`
  width: 50rem;
`
