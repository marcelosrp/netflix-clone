import React from 'react'
import PropTypes from 'prop-types'

import { FaPlus } from 'react-icons/fa'
import * as S from './styles'

const TabAccordion = ({ pergunta, resposta }) => (
  <S.FaqTab>
    <S.FaqInput type="checkbox" id={pergunta} name="faqItem" />
    <S.FaqTabLabel htmlFor={pergunta}>
      {pergunta} <FaPlus />
    </S.FaqTabLabel>
    <S.FaqTabContent>{resposta}</S.FaqTabContent>
  </S.FaqTab>
)

TabAccordion.propTypes = {
  pergunta: PropTypes.string.isRequired,
  resposta: PropTypes.string.isRequired
}

export default TabAccordion
