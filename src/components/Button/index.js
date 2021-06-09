import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Button = ({ children, type = 'button' }) => (
  <S.Button primary type={type}>
    {children}
  </S.Button>
)

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string
}

export default Button
