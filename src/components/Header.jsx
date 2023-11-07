import React from 'react'
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"

const Header = () => {
  return (
    <div className='px-[100px] pt-[20px] pb-[12px] flex items-center justify-between border-b border-header'>
        <div className='space-x-[20px] flex items-center'>
            <div className='space-x-2 flex items-center'>
                <EnvelopeIcon className='w-[24px] h-[24px]' />
                <div className='text-base font-medium'>Contact@Securesoft.com</div>
            </div>
            <div className='space-x-2 flex items-center'>
                <MapPinIcon className='w-[24px] h-[24px]' />
                <div className='text-base font-medium'>India/UAE</div>
            </div>
        </div>
        <div className='flex items-center space-x-[15px]'>
            <img className='w-[24px] h-[24px]' src="./assets/linkedin.svg" alt="" />
            <img className='w-[24px] h-[24px]' src="./assets/x.svg" alt="" />
        </div>
    </div>
  )
}

export default Header