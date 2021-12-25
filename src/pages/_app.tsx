import Head from 'next/head'
import { AppProps } from 'next/app'
import { useEffect } from 'react'
import axios from 'axios'

import '@fake-db'

import '../styles/main.scss'

axios.defaults.baseURL = '/api'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const nextElement = document.getElementById('__next')
    if (nextElement) {
      nextElement.id = 'root'
    }
  }, [])

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Test Site</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
