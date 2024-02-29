import Link from 'next/link';
import React from 'react'

type Props = {
  title: string;
  link: string;
  description: string;
  detail: string;
  date: string;
}

const Post = (props: Props) => {
  
  return (
    <Link href={props.link} className='hover:shadow'>
      <div className='bg-white w-[418px] h-[295px] font-heebo p-8 text-black'>
        <div className='font-bold text-[26px] w-[374px] h-auto mb-5'>
          {props.title}
        </div>
        <div className='text-[18px] w-[374px] h-[34px] leading-6 flex flex-row space-x-8 mb-5'>
          <div>{props.date}</div>
          <div>|</div>
          <div>{props.detail}</div>
        </div>
        <div className='text-[16px]'>
          {props.description}
        </div>
      </div>
    </Link>
  )
}

export default Post