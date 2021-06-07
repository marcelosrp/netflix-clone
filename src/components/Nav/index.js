import React from 'react'
import Link from 'next/link'

import * as S from './styles'

const NavLink = ({ children, href }) => (
  <Link href={href} passHref>
    <S.CustomLink primary>{children}</S.CustomLink>
  </Link>
)

export default NavLink
