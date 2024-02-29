import React from 'react'
import Image from 'next/image'

type Props = {
  title: string;
  year: number;
  subject: string;
  image: string;
  detail: string;
}

const CardWork = (props: Props) => {
  return (
    <div>
      <div className='w-[858px] h-[200px] flex flex-row m-5'>
        <div className='mr-5 justify-center content-center items-center self-center'>
          <Image className='rounded-md' alt={props.subject} src={props.image} height={180} width={246}/>
        </div>
        <div className='w-[594px] h-[93px]'>
          <h1 className="text-[30px] font-bold w-[418px] text-slate-800 mb-5">{props.title}</h1>
          <div className='flex flex-row mb-5'>
            <div className='rounded-xl w-[62px] h-[25px] bg-blue-950 text-center self-center content-center justify-center font-bold mr-5'>{props.year}</div>
            <p className='text-slate-400 text-[20px]'>{props.subject}</p>
          </div>
          <p className='text-black text-[20px]'>{props.detail}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default CardWork