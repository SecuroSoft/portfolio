import React from "react";

const Cards = () => {
  return (
    <>
      <div className="col-span-1 p-6 flex gap-5 flex-col rounded-lg 
      gradient-border-white bg-gray-50% backdrop-blur-[2px] hover:bg-gray-30% group">
        <div className="p-[6px] service-card flex items-center justify-center h-[60px] w-[60px]">
          <img src="/assets/qr-code.png" alt="" />
        </div>

        <h1 className="font-semibold text-[28px] leading-9">
        Source Code Analysis
        </h1>

        <p className="font-normal text-base leading-6">Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis pretium tortor semper enim Enim nim sagittis. Sed sed arcu vel Lorem ipsum dolor sit amet consectetur.</p>

        <button className="py-[10px] px-6 flex items-center justify-center 
        border-[1px] border-white w-fit rounded-[26px] font-semibold text-base
        group-hover:bg-purple-dark group-hover:border-purple-dark group-hover:text-white
        ">
        Know More
        </button>


      </div>
    </>
  );
};

const Section2 = () => {
  return (
    <>
      <div className="service-bg service-two pt-[62px] pb-[128px]">
        <div className="px-10 md:px-[123px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10  md:gap-6">
        {
          [...Array(9)].map((_, i) => <Cards key={i} />)
        }
        </div>
      </div>
    </>
  );
};

export default Section2;
