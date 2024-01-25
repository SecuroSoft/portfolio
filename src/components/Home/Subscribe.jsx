import React from 'react'
import { ArrowRightIcon } from "@heroicons/react/24/solid";




const Subscribe = () => {
  return (
    <>
      <div className='px-[20px] mx:px-[100px] py-[70px]'>
        <div className='py-8 px-12 w-full subscribe-card gap-6 flex flex-col md:flex-row justify-between items-center'>
            <div>
                <h3 className='leading-8 text-2xl font-semibold text-clash-display tracking-[0.72px] text-center md:text-left'>Say hello to us, Buy subscription</h3>
                <p className='font-normal text-base leading-6 max-w-[786px] pt-3 text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis pretium tortor semper enim. 
                </p>
            </div>
            <div>
                <button className='px-6 py-3 rounded-lg font-semibold text-base leading-[27px] bg-[#ffffff1f] flex items-center gap-3'>
                    Subscribe
                    <ArrowRightIcon className="h-6 w-6 text-white" />
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Subscribe
