import React from 'react'
import Header from '../../components/Header'
import Destaque from '../../components/Destaque'
import Assinatura from '../../components/Assinatura'
import Features from '../../components/Features'
import Accordion from '../../components/Accordion'
import TabAccordion from '../../components/Accordion/tab'

import Heading from '../../components/Typography/heading'

import features from '../../data/features.json'
import faq from '../../data/faq.json'

import * as S from './styles'

function getFeatures() {
  return features.map(({ titulo, texto, imagem, isFliped }) => (
    <Features
      key={titulo}
      titulo={titulo}
      texto={texto}
      imagem={imagem}
      isFliped={isFliped}
    />
  ))
}

function getFaqQuestions() {
  return faq.map(({ pergunta, resposta }) => (
    <TabAccordion key={pergunta} pergunta={pergunta} resposta={resposta} />
  ))
}

const HomeTemplate = () => (
  <S.MainHome>
    <Header />
    <Destaque>
      <Heading level="1" color="secondary" size="xlarge">
        Filmes, séries e muito mais. <br /> Sem limites.
      </Heading>
      <Heading level="2" color="secondary" size="large" fontWeight="400">
        Assista onde quiser. Cancele quando quiser.
      </Heading>
      <Assinatura />
    </Destaque>
    {getFeatures()}
    <S.FaqWrapper>
      <Heading level="1" color="secondary" size="xlarge">
        Perguntas frequentes
      </Heading>

      <Accordion>{getFaqQuestions()}</Accordion>

      <Assinatura />
    </S.FaqWrapper>
  </S.MainHome>
)

export default HomeTemplate
