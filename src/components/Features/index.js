import React from 'react'
import PropTypes from 'prop-types'
import Heading from '../Typography/heading'
import Texting from '../Typography/texting'

import * as S from './styles'

const Features = ({ titulo, texto, imagem, isFliped }) => (
  <S.FeatureWrapper isFliped={isFliped}>
    <S.FeatureItem className="texto">
      <Heading level="1" color="secondary" size="xlarge" textAlign="left">
        {titulo}
      </Heading>
      <Texting color="secondary" textAlign="left" margin="2rem 0" size="xlarge">
        {texto}
      </Texting>
    </S.FeatureItem>
    <S.FeatureItem className="imagem">
      <S.FeatureImg src={imagem} alt={titulo} />
    </S.FeatureItem>
  </S.FeatureWrapper>
)

Features.propTypes = {
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  isFliped: PropTypes.bool.isRequired
}

export default Features
