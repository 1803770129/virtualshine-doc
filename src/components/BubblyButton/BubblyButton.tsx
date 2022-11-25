import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/btn.module.scss'
interface IBubblyButton{
    
}

export default function BubblyButton({}:IBubblyButton) {
  return (
    <>
        <button className={styles.bubblyButton}>Click me!</button>
    </>
  )
}
