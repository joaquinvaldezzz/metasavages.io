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
        <meta name="description" content="The Web 3.0 tribe for digital entrepreneurs." />
        <meta name="keywords" content="nft" />
        <meta property="og:description" content="The Web 3.0 tribe for digital entrepreneurs." />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="undefined" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_banners/1485597459271360519/1651224804/1500x500"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content="The Web 3.0 tribe for digital entrepreneurs." />
        <meta name="twitter:site" content="@metasavagesnft" />
        <meta name="twitter:creator" content="@metasavagesnft" />
        <meta
          name="twitter:image"
          content="https://pbs.twimg.com/profile_banners/1485597459271360519/1651224804/1500x500"
        />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}
