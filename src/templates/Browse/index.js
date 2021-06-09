import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/Header'
import Heading from '../../components/Typography/heading'
import Profile from '../../components/Profile'
import { GlobalContext } from '../../context/globalContext'

import profiles from '../../data/profiles.json'

import * as S from './styles'

function getProfiles() {
  return profiles.map(({ name, avatar }) => (
    <Profile key={name} name={name} avatar={avatar} />
  ))
}

const BrowseTemplate = () => {
  const { profileClicked } = useContext(GlobalContext)
  const [hasProfileSelected, setHasProfileSelected] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('profileSelected')) setHasProfileSelected(true)
  }, [])

  function showProfileOrFeed() {
    if (profileClicked || hasProfileSelected) {
      return (
        <Heading level="1" color="secondary">
          Meu Feed
        </Heading>
      )
    } else {
      return (
        <>
          <Heading level="1" color="secondary" size="xlarge">
            Quem está assistindo?
          </Heading>
          <S.ChoosePerfil>
            {getProfiles()}
            <Profile name="Infantil" className="infantil" />
          </S.ChoosePerfil>
        </>
      )
    }
  }

  return (
    <>
      <Header />
      <S.MainProfile>{showProfileOrFeed()}</S.MainProfile>
    </>
  )
}

export default BrowseTemplate
