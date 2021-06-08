import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Logo from '../Logo'
import NavLink from '../Nav'

import * as S from './styles'

const Header = () => {
  const router = useRouter()

  return (
    <S.HeaderWrapper>
      <S.HeaderItem>
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>
      </S.HeaderItem>
      {router.pathname === '/' && (
        <S.HeaderItem>
          <NavLink href="/login">Entrar</NavLink>
        </S.HeaderItem>
      )}
    </S.HeaderWrapper>
  )
}

export default Header
