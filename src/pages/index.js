import React from 'react'
import { NextSeo } from 'next-seo'

import HomeTemplate from '../templates/Home'

const Home = () => {
  return (
    <>
      <NextSeo
        title="Netflix Clone"
        description="Netflix clone in Nextjs"
        canonical="https://meusite.com.br/"
        openGraph={{
          url: 'https://meusite.com.br/',
          title: 'Template',
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
      <HomeTemplate />
    </>
  )
}

export default Home
