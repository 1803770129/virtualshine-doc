import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/host.module.scss'
interface IContentHighlighter {
    backgroundColor:string;
    textColor:string;
    borderColor:string;
    content:any;
    emoji:string;
}

export default function ContentHighlighter({ backgroundColor="#fff5eb", textColor="black", borderColor="#fed4a4", content, emoji="🤓" }: IContentHighlighter) {
    return (
        <>
            <div className='w-full m-h-30 p-10 rounded-8 flex mt-10' style={{backgroundColor:backgroundColor,color:textColor,borderWidth:'2px',borderStyle:'solid',borderColor:borderColor}}>
                <div className="text-20 mr-10">{emoji}</div>
                <div>{content}</div>
            </div>
        </>
    )
}
