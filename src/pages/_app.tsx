import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react'
import { followingDotCursor } from '../utils/global';
import Head from 'next/head';
import Nav from '../components/Nav/nav'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const targetElement = document.querySelector("window")
    new followingDotCursor({ color: ["#ffffff"], element: targetElement })
  }, [])
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main style={{minHeight:'100vh'}}>
        <Nav />
        <Component {...pageProps} />
      </main>
    </>
  )
}
