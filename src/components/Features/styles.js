import styled from 'styled-components'

export const FeatureWrapper = styled.section`
  align-items: center;
  border-top: 8px solid var(--cinza);
  display: flex;
  flex-direction: ${(props) => (props.isFliped ? 'row-reverse' : 'row')};
  justify-content: center;
  padding: 4.3rem 5rem;
  width: 100%;

  @media (max-width: 700px) {
    padding: 2.5rem;
    flex-direction: column;

    h1,
    p {
      text-align: center;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 30px;
    }
  }
`

export const FeatureItem = styled.div`
  margin: 0 2rem;
  position: relative;

  &.texto {
    width: 56rem;

    @media (max-width: 700px) {
      width: 100%;
    }
  }
`

export const FeatureImg = styled.img`
  width: 50rem;

  @media (max-width: 700px) {
    max-width: 100%;
    width: 100%;
  }
`
