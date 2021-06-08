import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Hero = ({ children }) => <S.Hero>{children}</S.Hero>

Hero.propTypes = {
  children: PropTypes.any.isRequired
}

export default Hero
