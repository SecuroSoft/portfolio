import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Section1 = () => {
  return (
    <div className="py-[71px]">
      <div className="space-y-4 mx-[20px]">
        <h1 className="text-[42px] lg:text-[80px] text-center font-semibold leading-[50px] lg:leading-[92px] text-clash-display">
        Turning Ideas into<br />
          <span className="linear-text">Digital Reality, Seamlessly</span>
        </h1>
        <div className="max-w-[853px] w-full mx-auto text-center text-sm lg:text-lg leading-[28px]">
        Crafting secure, intelligent digital experiences with cutting-edge AI innovation. From sleek designs to powerful development, we specialize in bringing your ideas to life in the ever-evolving tech realm. Committed to excellence, trust us to seamlessly amplify your vision.
        </div>
      </div>
      <button className="mt-[48px] border border-[#CAB7F7] mx-auto py-4 px-9 rounded-[36px] flex items-center">
        <span className="text-base lg:text-base font-semibold">Check Out Our Work</span>
        <ArrowRightIcon className="w-[24px] h-[24px]" />
      </button>
      <img className="w-full -mt-[15%]" src="./assets/circle-glow.png" alt="" />
    </div>
  );
};

export default Section1;
