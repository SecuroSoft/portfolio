import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Section1 = () => {
  return (
    <div className="py-[71px]">
      <div className="space-y-4">
        <h1 className="text-[80px] text-center font-semibold leading-[92px] text-clash-display">
          Engaging Skills To Meet <br />
          <span className="linear-text">Modern Challenges</span>
        </h1>
        <div className="max-w-[853px] w-full mx-auto text-center text-lg leading-[28px]">
          Passionately interested in Smart Contract Auditing & Development,
          Cyber Security Services, Software Solutions, Website and Mobile
          Application Design, Smart Contract Auditing & Development, Cyber
          Security Auditing and Development
        </div>
      </div>
      <button className="mt-[48px] border border-[#CAB7F7] mx-auto py-4 px-9 rounded-[36px] flex items-center">
        <span className="text-base font-semibold">Check Out Our Work</span>
        <ArrowRightIcon className="w-[24px] h-[24px]" />
      </button>
      <img className="w-full -mt-[15%]" src="./assets/circle-glow.png" alt="" />
    </div>
  );
};

export default Section1;
