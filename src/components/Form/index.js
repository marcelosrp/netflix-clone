import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Form = ({ children, className }) => (
  <S.Form className={className}>{children}</S.Form>
)

Form.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired
}

export default Form
