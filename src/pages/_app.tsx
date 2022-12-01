import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { useEffect } from 'react'
import { followingDotCursor } from '../utils/global';
import Head from 'next/head';
import Nav from '../components/Nav/nav'
import BubblyButton from '../components/BubblyButton/BubblyButton'
import HostTitle from '../components/HostTitle/HostTitle'
import { useRouter } from 'next/router';
import 'katex/dist/katex.min.css';
import styles from '../styles/Index.module.scss';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
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
      <main style={{ minHeight: '100vh', position: 'relative' }}>
        <div className={styles.light}></div>
        <Nav back={router.pathname.includes('slug') ? true : false} />
        <Component {...pageProps} />
        <div>
          <BubblyButton />
          <HostTitle />
        </div>
        <div></div>
        <div className={styles.fixedMonety}>
          <span className="iconfont icon-qiandai text-28 "></span>
          <div className={styles.money}>￥14</div>
        </div>
      </main>
    </>
  )
}
