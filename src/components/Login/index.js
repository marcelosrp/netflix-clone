import React, { useState } from 'react'
import Form from '../Form'
import Input from '../Form/input'
import Button from '../Button'

import * as S from './styles'

const LoginWrapper = () => {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <S.WrapperLogin>
      <Form className="login">
        <S.ItemForm>
          <Input
            type="text"
            id="login"
            name="login"
            label="Email ou número de telefone"
            className="login"
          />
        </S.ItemForm>
        <S.ItemForm>
          <Input
            type="password"
            id="senha"
            name="senha"
            label="Senha"
            className="login"
          />
        </S.ItemForm>
        <S.ItemForm>
          <Button type="submit">Entrar</Button>
        </S.ItemForm>
        <S.ItemForm ajuda>
          <S.Label htmlFor="lembrar">
            <S.Checkbox
              type="checkbox"
              name="lembrar"
              id="lembrar"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            Lembre-se de mim
          </S.Label>
          <S.LinkAjuda href="#">Precisa de ajuda?</S.LinkAjuda>
        </S.ItemForm>
      </Form>
    </S.WrapperLogin>
  )
}
export default LoginWrapper
