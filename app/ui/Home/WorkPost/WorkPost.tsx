import React from 'react'
import CardWork from '../../CardWorks/CardWork'
type Props = {}

const WorkPost = (props: Props) => {
  const title = "Designing Dashboards"
  const year = 2020
  const detail = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
  const subject = "Dashboard"
  const image = "/image.png"

  return (
    <div className='w-full justify-center content-center items-center flex flex-col p-10'>
      <div className='w-[858px] text-start'>
        <h1 className="text-[22px] text-slate-800">Works</h1>
      </div>
      <div>
        <CardWork title={title} year={year} subject={subject} image={image} detail={detail} />
        <CardWork title={title} year={year} subject={subject} image={image} detail={detail} />
        <CardWork title={title} year={year} subject={subject} image={image} detail={detail} />
      </div>
    </div>
  )
}

export default WorkPost