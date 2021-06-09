import React from 'react'
import BaseTemplate from '../Base'
import Hero from '../../components/Hero'
import LoginWrapper from '../../components/Login'

import Heading from '../../components/Typography/heading'

import * as S from './styles'

const LoginTemplate = () => (
  <BaseTemplate>
    <Hero>
      <S.LoginBox>
        <Heading level="1" color="secondary" size="xlarge" textAlign="left">
          Entrar
        </Heading>

        <LoginWrapper />
      </S.LoginBox>
    </Hero>
  </BaseTemplate>
)

export default LoginTemplate
