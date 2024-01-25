import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const Section3 = () => {
  return (
    <>
      <div className="home-three home-bg">
        <div className="flex flex-col-reverse lg:flex-row items-center py-[90px] md:py-[126px] gap-[48px] lg:gap-[81px] max-w-7xl w-full mx-auto">
          <img
            className="h-[358px] lg:h-[500px] w-auto object-contain"
            src="/assets/design.png"
            alt=""
          />
          {/*  */}
          <div className="space-y-[32px] lg:space-y-[48px] px-[20px] lg:px-0">
            <div className="space-y-[18px] lg:space-y-4">
              <h2 className="text-clash-display linear-text text-center lg:text-start text-[32px] lg:text-5xl font-semibold leading-[42px] lg:leading-[64px]">
                Why Choose Us?
              </h2>
              <div className="opacity-60 max-w-[712px]">
                Embark on a transformative journey with Securosoft Technologies,
                where our expertise effortlessly aligns with the diversity of
                your project demands. Infused with a strong commitment to
                security and AI-driven innovation, our core focus is on
                delivering tailored, transparent, and timely solutions that
                exceed your unique tech requirements with confidence.
              </div>
            </div>
            <div className="space-y-4">
              <div className="py-[16px] lg:py-[20px] px-[20px] lg:px-[32px] choose-card flex items-center gap-[24px] max-w-[597px]">
                <div className="checkbox w-[26px] h-[26px] lg:w-[40px] lg:h-[40px] lg:p-2 flex items-center justify-center">
                  <CheckIcon className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" />
                </div>
                <div className="text-clash-display font-semibold leading-[21px] lg:leading-[28px] text-sm lg:text-[20px] tracking-[1px]">
                  Versatile Tech Expertise for Tailored Solutions
                </div>
              </div>
              <div className="py-[16px] lg:py-[20px] px-[20px] lg:px-[32px] choose-card gradient-border flex items-center gap-[24px] max-w-[597px]">
                <div className="checkbox w-[26px] h-[26px] lg:w-[40px] lg:h-[40px] gradient-border lg:p-2 flex items-center justify-center">
                  <CheckIcon className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" />
                </div>
                <div className="text-clash-display font-semibold leading-[21px] lg:leading-[28px] text-sm lg:text-[20px] tracking-[1px]">
                  Client-Focused Approach with Open Communication
                </div>
              </div>
              <div className="py-[16px] lg:py-[20px] px-[20px] lg:px-[32px] choose-card flex items-center gap-[24px] max-w-[597px]">
                <div className="checkbox w-[26px] h-[26px] lg:w-[40px] lg:h-[40px] lg:p-2 flex items-center justify-center">
                  <CheckIcon className="w-[16px] h-[16px] lg:w-[24px] lg:h-[24px]" />
                </div>
                <div className="text-clash-display font-semibold leading-[21px] lg:leading-[28px] text-sm lg:text-[20px] tracking-[1px]">
                  Cost-Effective Solutions with Dedicated, Timely Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
