import React from 'react'

import * as S from './styles'

const Button = ({ type, children }) => (
  <S.Button primary type={type}>
    {children}
  </S.Button>
)

export default Button
