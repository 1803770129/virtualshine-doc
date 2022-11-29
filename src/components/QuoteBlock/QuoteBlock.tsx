import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/host.module.scss'
interface IQuoteBlock {
    text:string;
}

export default function QuoteBlock({ text }: IQuoteBlock) {
    return (
        <>
            <div className="flex items-center mb-10">
                <div className="h-25 w-3 mr-10" style={{backgroundColor:'#bbbfc4'}}></div>
                <div style={{color:'#bbbfc4'}}>{text}</div>
            </div>
        </>
    )
}
