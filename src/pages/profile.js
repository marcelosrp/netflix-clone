import React from 'react'
import { NextSeo } from 'next-seo'

import ProfileTemplate from '../templates/Profile'

const Browse = () => {
  return (
    <>
      <NextSeo
        title="Netflix Clone"
        description="Netflix clone in Nextjs"
        canonical="https://meusite.com.br/"
        openGraph={{
          url: 'https://meusite.com.br/',
          title: 'Netflix Clone',
          description: 'Netflix clone in Nextjs',
          images: [
            {
              url: 'https://meusite.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Netflix Clone'
            }
          ],
          site_name: 'Netflix Clone'
        }}
      />
      <ProfileTemplate />
    </>
  )
}

export default Browse
