import React from 'react'
import Logo from '../Logo'
import NavLink from '../Nav'

import * as S from './styles'

const Header = () => (
  <S.HeaderWrapper>
    <S.HeaderItem>
      <Logo />
    </S.HeaderItem>
    <S.HeaderItem>
      <NavLink href="/">Entrar</NavLink>
    </S.HeaderItem>
  </S.HeaderWrapper>
)
export default Header
