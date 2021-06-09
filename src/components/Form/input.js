import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Input = ({ type, id, name, label, className }) => (
  <S.InputWrapper>
    <S.Input type={type} name={name} id={id} required className={className} />
    <S.InputLabel className={className} htmlFor={id}>
      {label}
    </S.InputLabel>
  </S.InputWrapper>
)

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired
}

export default Input
