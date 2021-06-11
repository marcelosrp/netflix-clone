import React from 'react'
import Header from '../../components/Header'
import Heading from '../../components/Typography/heading'

import * as S from './styles'

const BrowseTemplate = () => {
  return (
    <>
      <Header />
      <Heading level="1" color="secondary">
        Feed
      </Heading>
    </>
  )
}

export default BrowseTemplate
