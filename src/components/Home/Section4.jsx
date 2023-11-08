import React from "react";

const Section4 = () => {
  return (
    <div className="py-[18px] flex flex-col items-center justify-center gap-[72px]">
      <div className="space-y-[12px]">
        <h1 className="text-clash-display linear-text text-center text-5xl font-semibold leading-[64px]">
          Our Services
        </h1>
        <div className="text-lg font-normal text-center max-w-[770px]">
        At Securosoft, we transform aspirations into digital realities. From cutting-edge Cyber Security to innovative Tech Solutions, we ensure seamless experiences. Our commitment to quality and prompt delivery, all at unbeatable prices, defines the essence of Securosoft—where every idea is realized with digital brilliance.
        </div>
      </div>
      {/* CAROUSEL */}
      {/* TODO */}
      {/* VIEW ALL BUTTON */}
      <button className="py-[10px] px-[24px] rounded-[26px] border border-white text-base font-semibold">
        View All
      </button>
    </div>
  );
};

export default Section4;
