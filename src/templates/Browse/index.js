import React from 'react'
import Header from '../../components/Header'

import Heading from '../../components/Typography/heading'
import Texting from '../../components/Typography/texting'

import * as S from './styles'

const BrowseTemplate = () => (
  <>
    <Header />

    <S.MainProfile>
      <Heading level="1" color="secondary" size="xlarge">
        Quem está assistindo?
      </Heading>

      <S.ChoosePerfil>
        <S.Profile>
          <S.ButtonProfile>
            <S.ProfileThumb className="perfil1"></S.ProfileThumb>
            <Texting color="cinza2">Perfil 1</Texting>
          </S.ButtonProfile>
        </S.Profile>
        <S.Profile>
          <S.ButtonProfile>
            <S.ProfileThumb className="perfil2"></S.ProfileThumb>
            <Texting color="cinza2">Perfil 2</Texting>
          </S.ButtonProfile>
        </S.Profile>
        <S.Profile>
          <S.ButtonProfile>
            <S.ProfileThumb className="infantil"></S.ProfileThumb>
            <Texting color="cinza2">Infantil</Texting>
          </S.ButtonProfile>
        </S.Profile>
      </S.ChoosePerfil>
    </S.MainProfile>
  </>
)

export default BrowseTemplate
