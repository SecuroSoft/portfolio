import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";

const Section1 = () => {
  return (
    <>
      <div className="service-bg deployment-one ">
        <Header />
        <Navbar />
        <div className="about px-5 md:px-0 pt-[48px] pb-[108px] md:pb-0 md:py-[81px] space-y-[48px] md:space-y-[90px] max-w-7xl mx-auto w-full">
          <div className="space-y-4 flex flex-col items-center">
            <div className="text-[42px] leading-[50px] md:text-[80px] font-semibold md:leading-[92px] text-clash-display text-center">
              <span className="linear-text">Website</span> Development
            </div>
            <div className="text-sm sm:text-lg font-normal leading-[20px] sm:leading-[28px] max-w-[853px] text-center">
              Passionately interested in Smart Contract Auditing & Development,
              Cyber Security Services, Software Solutions, Website and Mobile
              Application Design, Smart Contract Auditing & Development, Cyber
              Security Auditing and Development
            </div>
          </div>
          <img className="w-full" src="./assets/Image Wrapper.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Section1;
