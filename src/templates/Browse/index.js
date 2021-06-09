import React from 'react'
import Header from '../../components/Header'
import Heading from '../../components/Typography/heading'
import Profile from '../../components/Profile'

import profiles from '../../data/profiles.json'

import * as S from './styles'

function getProfiles() {
  return profiles.map(({ name, avatar }) => (
    <Profile key={name} name={name} avatar={avatar} />
  ))
}

const BrowseTemplate = () => (
  <>
    <Header />

    <S.MainProfile>
      <Heading level="1" color="secondary" size="xlarge">
        Quem está assistindo?
      </Heading>

      <S.ChoosePerfil>
        {getProfiles()}
        <Profile name="Infantil" className="infantil" />
      </S.ChoosePerfil>
    </S.MainProfile>
  </>
)

export default BrowseTemplate
