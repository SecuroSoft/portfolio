import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

const Section3 = () => {
  return (
    <div className="flex items-center py-[126px] gap-[81px] max-w-7xl w-full mx-auto">
      <img
        className="h-[500px] w-auto object-contain"
        src="./assets/design.png"
        alt=""
      />
      <div className="space-y-[48px]">
        <div className="space-y-4">
          <h2 className="text-clash-display linear-text text-5xl font-semibold leading-[64px]">
            Why Choose Us?
          </h2>
          <div className="opacity-60 max-w-[712px]">
          Embark on a transformative journey with Securosoft Technologies, where our expertise effortlessly
          aligns with the diversity of your project demands. Infused with a strong commitment to security 
          and AI-driven innovation, our core focus is on delivering tailored, transparent, and timely solutions 
          that exceed your unique tech requirements with confidence.
          </div>
        </div>
        <div className="space-y-4">
          <div className="py-[20px] px-[32px] choose-card flex items-center gap-[24px] max-w-[597px]">
            <div className="checkbox w-[40px] h-[40px] p-2">
              <CheckIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="text-clash-display font-semibold leading-[28px] text-[20px] tracking-[1px]">
              Versatile Tech Expertise for Tailored Solutions
            </div>
          </div>
          <div className="py-[20px] px-[32px] choose-card gradient-border flex items-center gap-[24px] max-w-[597px]">
            <div className="checkbox w-[40px] h-[40px] gradient-border p-2">
              <CheckIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="text-clash-display font-semibold leading-[28px] text-[20px] tracking-[1px]">
              Client-Focused Approach with Open Communication
            </div>
          </div>
          <div className="py-[20px] px-[32px] choose-card flex items-center gap-[24px] max-w-[597px]">
            <div className="checkbox w-[40px] h-[40px] p-2">
              <CheckIcon className="w-[24px] h-[24px]" />
            </div>
            <div className="text-clash-display font-semibold leading-[28px] text-[20px] tracking-[1px]">
              Cost-Effective Solutions with Dedicated, Timely Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
