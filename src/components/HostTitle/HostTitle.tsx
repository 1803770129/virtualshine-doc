import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/host.module.scss'
interface IBubblyButton {

}

export default function BubblyButton({ }: IBubblyButton) {
    return (
        <>
            <div className={styles.hostMain}>
                <h1 data-text="Text Crack">
                    <span>Text Crack</span>
                </h1>
            </div>
        </>
    )
}
