import React from 'react'
import Header from '../../components/Header'
import Destaque from '../../components/Destaque'
import Features from '../../components/Features'

import Heading from '../../components/Typography/heading'
import Texting from '../../components/Typography/texting'

import features from '../../data/features.json'

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
      <Texting color="secondary" size="large">
        Pronto para assistir? Informe seu email para criar ou reiniciar sua
        assinaura.
      </Texting>
    </Destaque>
    {getFeatures()}
  </S.MainHome>
)

export default HomeTemplate
