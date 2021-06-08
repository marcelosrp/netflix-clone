import React from 'react'
import Link from 'next/link'
import Heading from '../Typography/heading'

import links from '../../data/links.json'

import * as S from './styles'

function getLinks() {
  return links.map((link, key) => (
    <Link href={link.url} key={`${link.label}-${key}`}>
      <a>{link.label}</a>
    </Link>
  ))
}

const Footer = () => (
  <S.Footer>
    <S.Container>
      <Heading
        level="3"
        color="cinza2"
        size="small"
        fontWeight="600"
        textAlign="left"
      >
        Dúvidas? Ligue <a href="tel:08007614631">0800-761-4631</a>
      </Heading>
      <S.LinksWrapper>{getLinks()}</S.LinksWrapper>
    </S.Container>
  </S.Footer>
)

export default Footer
