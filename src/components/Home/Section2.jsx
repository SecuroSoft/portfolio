import React from 'react'
import Marquee from "react-fast-marquee";
import Birdeye from "../../../assets/images/Bird-eye.svg"
import Vs from "../../../assets/images/vs.svg"
import GitLab from "../../../assets/images/gitlab.svg"
import GitHub from "../../../assets/images/gitHub.svg"
import Raycast from "../../../assets/images/Raycast.svg"
import Honey from "../../../assets/images/honey.svg"
import Sentry from "../../../assets/images/Sentry.svg"


const data = [
  {
    id : 1,
    text : 'Bird Eats Bugs 1',
    img : Birdeye,
  },
  {
    id : 2,
    text : "VS Code",
    img : Vs
  },
  {
    id : 3,
    text : 'GitLab',
    img : GitLab
  },
  {
    id : 4,
    text : "GitHub",
    img : GitHub
  },
  {
    id : 5,
    text : "Raycast" ,
    img : Raycast
  },
  {
    id : 6,
    text : "Honey Badger",
    img : Honey
  },
  {
    id : 7,
    text : "Sentry",
    img : Sentry,
  }
]



const Section2 = () => {
  return (
    <div className='space-y-[20px] pt-[71px]  relative home-two home-bg'>
        <Marquee className='space-x-[20px]' direction='right'>
          {
            data.map((item, index) => (
              <Card text={item.text} img={item.img} />
            ))
          }
        </Marquee>
        <Marquee className='space-x-[20px]' direction='left'>
        {
            data.map((item, index) => (
              <Card text={item.text} img={item.img} />
            ))
          }
        </Marquee>

    </div>
  )
}

const Card = ({img, text}) => {
  return (
    <div className='py-[14px] px-[16px] lg:py-[24px] lg:px-[36px] flex items-center gap-[12px] marquee-card mr-[20px]'>
      <img className='w-[26px] h-[26px] lg:w-[47px] lg:h-[47px] rounded-xl' src={img} alt="logo" />
      <div className='text-[17px] lg:text-[23px] font-normal'>{text}</div>
    </div>
  )
}

export default Section2