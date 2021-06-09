import React, { useState } from 'react'
import Link from 'next/link'

import * as S from './styles'

const InfosLogin = () => {
  const [saibaMais, setSaibaMais] = useState(false)

  return (
    <S.InfosLoginWrapper>
      <S.FBLogin
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
          alt="Facebook"
        />
        Conectar com o Facebook
      </S.FBLogin>

      <S.AssineAGora>
        Novo por aqui?{' '}
        <Link href="/">
          <a>Assine agora</a>
        </Link>
      </S.AssineAGora>

      <S.TextoSeguranca>
        Esta página é protegida pelo Google reCAPTCHA para garantir que você não
        é um robô.{' '}
        <button onClick={() => setSaibaMais(!saibaMais)}>Saiba mais.</button>
        {saibaMais && (
          <span>
            As informações recolhidas pelo Google reCAPTCHA estão sujeitas à{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Política de Privacidade
            </a>{' '}
            e{' '}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
            >
              Termos de Uso
            </a>
            , e são usadas para oferecer, manter e melhorar o serviço reCAPTCHA
            e por questões de segurança (não são usadas para exibir anúncios
            personalizados pelo Google).
          </span>
        )}
      </S.TextoSeguranca>
    </S.InfosLoginWrapper>
  )
}

export default InfosLogin
