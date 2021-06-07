import React from 'react'
import Form from '../Form'
import Input from '../Form/input'
import Button from '../Button'

import Texting from '../Typography/texting'

import * as S from './styles'

const Assinatura = () => (
  <S.WrapperAssinatura>
    <Texting color="secondary" size="large">
      Pronto para assistir? Informe seu email para criar ou reiniciar sua
      assinaura.
    </Texting>
    <Form>
      <Input
        type="email"
        id="email"
        name="email"
        label="Email"
        className="login"
      />
      <Button type="button">Vamos lá!</Button>
    </Form>
  </S.WrapperAssinatura>
)

export default Assinatura
