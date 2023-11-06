import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const Section3 = () => {
  return (
    <div className="flex items-center py-[126px] gap-[81px] max-w-7xl w-full mx-auto">
      <img
        className="h-[500px] w-auto object-contain"
        src="/assets/design.png"
        alt=""
      />
      <div className="space-y-[48px]">
        <div className="space-y-4">
          <h2 className="text-clash-display linear-text text-5xl font-semibold leading-[64px]">
            Why Choose Us?
          </h2>
          <div className="opacity-60 max-w-[712px]">
            SecuroSoft believes in securing the Interwebs using advanced Tools,
            Technologies, and accredited Talent. We aim to Transform Cyber
            Security by Cutting through technological threats to match the speed
            of Business Ecosystems.
          </div>
        </div>
        <div className="space-y-4">
          <div className="py-[20px] px-[32px] choose-card flex items-center gap-[24px] max-w-[597px]">
            <div className="checkbox w-[40px] h-[40px] p-2">
              <CheckIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="text-clash-display font-semibold leading-[28px] text-[20px] tracking-[1px]">
              Over 30 years of combined professional Work Experience.
            </div>
          </div>
          <div className="py-[20px] px-[32px] choose-card gradient-border flex items-center gap-[24px] max-w-[597px]">
            <div className="checkbox w-[40px] h-[40px] gradient-border p-2">
              <CheckIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="text-clash-display font-semibold leading-[28px] text-[20px] tracking-[1px]">
              Competitive Cost, Dedicated & timely services.
            </div>
          </div>
          <div className="py-[20px] px-[32px] choose-card flex items-center gap-[24px] max-w-[597px]">
            <div className="checkbox w-[40px] h-[40px] p-2">
              <CheckIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="text-clash-display font-semibold leading-[28px] text-[20px] tracking-[1px]">
              Competitive Cost, Dedicated & timely services.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
