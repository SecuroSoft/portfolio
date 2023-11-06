import React from "react";

const Section4 = () => {
  return (
    <div className="py-[18px] flex flex-col items-center justify-center gap-[72px]">
      <div className="space-y-[12px]">
        <h1 className="text-clash-display linear-text text-center text-5xl font-semibold leading-[64px]">
          Our Services
        </h1>
        <div className="text-lg font-normal text-center max-w-[770px]">
          We distinguish ourselves in Quality and Timely Delivery. We deliver
          Cyber Security Services, IT Solutions, Websites and Mobile Apps
          tailored to the need of our customers. And we provide these at the
          <b> MOST COMPETITIVE PRICE</b>.
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
