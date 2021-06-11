import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Texting from '../../components/Typography/texting'
import { GlobalContext } from '../../context/globalContext'

import * as S from './styles'

const Profile = ({ id, name, avatar = null, className = null }) => {
  const { handleSelectProfile } = useContext(GlobalContext)
  return (
    <S.Profile>
      <S.ButtonProfile onClick={() => handleSelectProfile(id, name, avatar)}>
        <S.ProfileThumb bg={avatar} className={className}></S.ProfileThumb>
        <Texting color="cinza2">{name}</Texting>
      </S.ButtonProfile>
    </S.Profile>
  )
}

Profile.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  className: PropTypes.string
}

export default Profile
