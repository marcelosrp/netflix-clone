import React from 'react'

import * as S from './styles'

const Input = ({ type, id, name, label, className }) => (
  <S.InputWrapper>
    <S.Input type={type} name={name} id={id} required className={className} />
    <S.InputLabel htmlFor={id}>{label}</S.InputLabel>
  </S.InputWrapper>
)

export default Input
