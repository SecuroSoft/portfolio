import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
const Section1 = () => {
  return (
    <>
      <div className="service-bg service-one">
        <Header />
        <Navbar />

        <div className="pt-[81px] pb-[130px] max-w-4xl w-full mx-auto space-y-[60px] px-5 md:px-0">
          <div className="flex flex-col items-center space-y-4">
            <div
              className="text-[55px] sm:text-[65px] md:text-[80px] font-semibold 
        leading-[55px] sm:leading-[65px] md:leading-[92px] text-clash-display text-center"
            >
              <span className="linear-text block md:inline-block">
                Services
              </span>{" "}
              We Provide
            </div>
            <div className="text-lg font-normal leading-[28px] max-w-[853px] text-center">
              Passionately interested in Smart Contract Auditing & Development,
              Cyber Security Services, Software Solutions, Website and Mobile
              Application Design, Smart Contract Auditing & Development, Cyber
              Security Auditing and Development
            </div>
          </div>
          <div className="max-w-[751px] mx-auto h-[63px] w-full flex items-center py-[8px] pl-[32px] pr-[8px] rounded-[40px] gradient-border-white space-x-3">
            <EnvelopeIcon className="w-[20px] h-[20px] text-[#8C8C8C]" />
            <input
              className="w-full h-full bg-inherit outline-none border-none"
              placeholder="Message ..."
              type="text"
            />
            <button className="py-[10px] px-[24px] rounded-[27px] bg-[#6741FE] font-semibold w-[136px] text-center">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
