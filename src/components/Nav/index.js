import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'

import * as S from './styles'

const NavLink = ({ children, href }) => (
  <Link href={href} passHref>
    <S.CustomLink primary>{children}</S.CustomLink>
  </Link>
)

NavLink.propTypes = {
  children: PropTypes.any.isRequired,
  href: PropTypes.string.isRequired
}

export default NavLink
