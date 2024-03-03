import React from 'react'
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <div className='py-[12px] px-[20px] lg:px-[100px] lg:pt-[20px] lg:pb-[12px] flex items-center justify-between border-b border-header'>
        <div className='space-x-[20px] flex items-center'>
            <div className='space-x-2 flex items-center'>
                <EnvelopeIcon className='w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]' />
                <div className='text-[8px] lg:text-base font-medium'><a href="mailto:contact@securosoft.com">contact@securosoft.com</a></div>
            </div>
            <div className='space-x-2 flex items-center'>
                <MapPinIcon className='w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]' />
                <div className='text-[8px] lg:text-base font-medium'>UAE / India</div>
            </div>
        </div>
        <div className='flex items-center space-x-[15px]'>
            <img className='w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]' src="./assets/linkedin.svg" alt="" />
            <img className='w-[12px] h-[12px] lg:w-[24px] lg:h-[24px]' src="./assets/x.svg" alt="" />
        </div>
    </div>
  )
}

export default Header