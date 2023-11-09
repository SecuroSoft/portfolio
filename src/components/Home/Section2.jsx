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
    <div className='py-[14px] px-[16px] lg:py-[24px] lg:px-[36px] flex items-center gap-[12px] marquee-card mr-[20px]'>
      <img className='w-[26px] h-[26px] lg:w-[47px] lg:h-[47px] rounded-xl' src="" alt="" />
      <div className='text-[17px] lg:text-[23px] font-normal'>{text}</div>
    </div>
  )
}

export default Section2