import React from 'react'
import Header from '../../components/Header'
import Heading from '../../components/Typography/heading'
import Texting from '../../components/Typography/texting'

import * as S from './styles'

const HomeTemplate = () => (
  <S.MainHome>
    <Header />
    <S.DestaqueHome>
      <Heading level="1" color="secondary" size="xlarge">
        Filmes, séries e muito mais. <br /> Sem limites.
      </Heading>
      <Heading level="2" color="secondary" size="large" fontWeight="400">
        Assista onde quiser. Cancele quando quiser.
      </Heading>
      <Texting color="secondary">
        Pronto para assistir? Informe seu email para criar ou reiniciar sua
        assinaura.
      </Texting>
    </S.DestaqueHome>
  </S.MainHome>
)

export default HomeTemplate
