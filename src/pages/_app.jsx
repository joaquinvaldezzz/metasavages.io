import { Fragment } from 'react'
import Head from 'next/head'
import '../styles/main.scss'

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
