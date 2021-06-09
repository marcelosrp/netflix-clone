import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import NextNprogress from 'nextjs-progressbar'
import { GlobalStorage } from '../context/globalContext'

import SEO from '../../next-seo-config'

import GlobalStyles from '../styles/global'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
        <link
          rel="apple-touch-icon"
          href="https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico"
        />
        <meta name="theme-color" content="#06092B" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <DefaultSeo {...SEO} />
      <GlobalStyles />
      <NextNprogress
        color="#e50914"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <GlobalStorage>
        <Component {...pageProps} />
      </GlobalStorage>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired
}

export default App
