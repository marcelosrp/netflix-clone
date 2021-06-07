import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Accordion = ({ children }) => <S.FaqTabs>{children}</S.FaqTabs>

Accordion.propTypes = {
  children: PropTypes.any.isRequired
}

export default Accordion
