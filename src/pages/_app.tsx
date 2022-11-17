import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react'
import { followingDotCursor } from '../utils/global';
import Head from 'next/head';
import Nav from '../components/Nav/nav'
import { useRouter } from 'next/router';
import 'katex/dist/katex.min.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  console.log(router);
  
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
        <Nav back={router.pathname.includes('slug')?true:false} />
        <Component {...pageProps} />
      </main>
    </>
  )
}
