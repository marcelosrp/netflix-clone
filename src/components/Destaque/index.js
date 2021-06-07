import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Destaque = ({ children }) => <S.DestaqueHome>{children}</S.DestaqueHome>

Destaque.propTypes = {
  children: PropTypes.any.isRequired
}

export default Destaque
