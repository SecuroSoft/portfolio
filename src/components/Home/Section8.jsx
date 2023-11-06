import React from "react";

const Section8 = () => {
  return (
    <div className="py-[80px] max-w-7xl w-full mx-auto space-y-[60px]">
      <div className="flex items-end justify-between">
        <div className="space-y-[12px]">
          <h1 className="text-clash-display linear-text text-[48px] leading-[64px] font-semibold">
            Simple, Transparent Pricing
          </h1>
          <div className="text-lg max-w-[608px] font-normal leading-[28px]">
            Passionately interested in Smart Contract Auditing & Development,
            Cyber Security Services, Software Solutions, Website.
          </div>
        </div>
        <div className="gradient-border-white rounded-[50px] flex items-center gap-[12px]">
          <button className="py-[12px] px-[18px] rounded-[50px] text-[20px] font-semibold leading-[28px]">
            Yearly
          </button>
          <button className="py-[12px] px-[18px] rounded-[50px] text-[20px] font-semibold leading-[28px] gradient-button">
            Monthly
          </button>
        </div>
      </div>
      <div className="flex items-center gap-[32px]">
        <div className="py-[32px] px-[48px] card-subs border-[2px] gradient-border-white flex flex-col items-center gap-9 max-w-[392px] w-full">
          <div className="text-[24px] font-semibold leading-[36px]">
            Starter
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-[36px] font-semibold leading-[46px] text-clash-display ">
              $89
            </span>
            <span className="text-[24px] font-medium leading-[28px]">
              /month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
