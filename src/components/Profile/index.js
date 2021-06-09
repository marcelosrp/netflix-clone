import React from 'react'
import PropTypes from 'prop-types'
import Texting from '../../components/Typography/texting'

import * as S from './styles'

const Profile = ({ name, avatar = '', className = '' }) => (
  <S.Profile>
    <S.ButtonProfile>
      <S.ProfileThumb bg={avatar} className={className}></S.ProfileThumb>
      <Texting color="cinza2">{name}</Texting>
    </S.ButtonProfile>
  </S.Profile>
)

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  className: PropTypes.string
}

export default Profile
