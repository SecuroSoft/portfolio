import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const subscriptions = [
  {
    list: [
      "Multi-step Zap",
      "Unlimited Premium ",
      "Unlimited Users Team",
      "Advanced Admin",
      "Unlimited Users Team",
      "Custom Data ",
    ],
  },
];

const Section8 = () => {
  return (
    <div className="py-[80px] max-w-7xl w-full mx-auto space-y-[60px] px-[20px] lg:px-0">
      <div className="flex flex-col gap-[36px] lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-[8px] lg:space-y-[12px]">
          <h1 className="text-clash-display linear-text text-[32px] lg:text-[48px] leading-[42px] lg:leading-[64px] font-semibold">
            Simple, Transparent Pricing
          </h1>
          <div className="text-xs lg:text-lg max-w-[608px] font-normal leading-[18px] lg:leading-[28px]">
            Passionately interested in Smart Contract Auditing & Development,
            Cyber Security Services, Software Solutions, Website.
          </div>
        </div>
        <div className="gradient-border-white rounded-[50px] flex items-center gap-[8px] lg:gap-[12px] w-fit">
          <button className="py-[12px] lg:py-[12px] px-[16px] lg:px-[18px] rounded-[50px] text-[18px] lg:text-[20px] font-semibold leading-[20px] lg:leading-[28px]">
            Yearly
          </button>
          <button className="py-[12px] lg:py-[12px] px-[16px] lg:px-[18px] rounded-[50px] text-[18px] lg:text-[20px] font-semibold leading-[20px] lg:leading-[28px] gradient-button">
            Monthly
          </button>
        </div>
      </div>
      <br />
      <br />
      <div className="flex items-center gap-[64px] flex-col lg:flex-row">
        {[...Array(3)]?.map((subs, i) => (
          <div
            key={i}
            className={`${
              i == 1 && "lg:scale-[120%]"
            } py-[36px] lg:py-[32px] px-[20px] lg:px-[48px] card-subs border-[2px] gradient-border-white flex flex-col items-center gap-[20px] lg:gap-9 max-w-[392px] w-full`}
          >
            <div className="text-[18px] lg:text-[24px] font-semibold leading-[24px] lg:leading-[36px]">
              Starter
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-[36px] font-semibold leading-[46px] text-clash-display ">
                $89
              </span>
              <span className="lg:text-[24px] font-medium leading-[28px]">
                /month
              </span>
            </div>
            <div className="space-y-4 w-full">
              {subscriptions[0].list?.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="bg-[#299D00] rounded-full w-[20px] h-[20px] flex items-center justify-center">
                    <CheckIcon className="w-[16px] h-[16px]" />
                  </span>
                  <div className="text-base font-normal leading-[20px]">
                    {item}
                  </div>
                </div>
              ))}
            </div>
            <button className="py-[10px] px-[24px] rounded-[27px] bg-[#6741FE] text-center w-full text-base font-semibold">
              Choose plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section8;
