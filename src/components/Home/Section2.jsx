import React from 'react'
import Marquee from "react-fast-marquee";


const Section2 = () => {
  return (
    <div className='space-y-[20px]'>
        <Marquee className='space-x-[20px]' direction='right'>
          {
            [...Array(10)]?.map((item, index) => (
              <Card text={`Bird Eats Bugs ${index+1}`} />
            ))
          }
        </Marquee>
        <Marquee className='space-x-[20px]' direction='left'>
          {
            [...Array(10)]?.map((item, index) => (
              <Card text={`Bird Eats Bugs ${index+1}`} />
            ))
          }
        </Marquee>
    </div>
  )
}

const Card = ({img, text}) => {
  return (
    <div className='py-[24px] px-[36px] flex items-center gap-[12px] marquee-card mr-[20px]'>
      <img className='w-[47px] h-[47px] rounded-xl' src="" alt="" />
      <div className='text-[23px] font-normal'>{text}</div>
    </div>
  )
}

export default Section2