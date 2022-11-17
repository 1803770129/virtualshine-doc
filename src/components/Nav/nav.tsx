import { useEffect } from 'react'
import { useRouter } from 'next/router'

interface INav{
  back:Boolean
}

export default function Nav({back}:INav) {
  const router = useRouter()
  return (
    <>
        <div className={back?"px-20 py-20 w-full flex justify-between sticky top-0 ":"px-20 py-20 w-full flex justify-end sticky top-0"}>
          {back&&<div className="select-none w-50 hover:text-skin-900" onClick={()=>router.back()}>back</div>}
          <span className="iconfont icon-github text-white text-40 hover:text-skin-900 "></span>
        </div>
    </>
  )
}
