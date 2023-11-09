import React from "react";

const Footer = () => {
  return (
    <div className="py-[36px] px-[20px] lg:px-[100px] gap-6 flex items-start flex-wrap justify-between">
      <div className="max-w-[566px]">
        <div className="space-y-6 max-w-[397px]">
          <h1>SecuroSoft</h1>
          <div className="font-normal leading-[24px]">
            We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat...{" "}
            <span className="font-bold">Read More</span>
          </div>
        </div>
      </div>
      <div className=" space-y-[20px]">
        <h1 className="text-clash-display text-[20px] font-semibold">
          Quick Links
        </h1>
        <div className="space-y-[6px]">
          <div>Contact Us</div>
          <div>About Us</div>
          <div>Careers</div>
          <div>Events</div>
          <div>Privacy</div>
        </div>
      </div>
      <div className="space-y-[20px]">
        <h1 className="text-clash-display text-[20px] font-semibold">
          Contact Us
        </h1>
        <div className="space-y-[10px]">
          <div className="flex space-x-[2px] items-start">
            <img className="w-[32px] h-[32px]" src="./assets/phone.svg" alt="" />
            <div className="space-y-[2px] ">
              <div className="text-[20px] font-semibold">UAE:</div>
              <div className="font-medium">+971 509361672</div>
            </div>
          </div>
          <div className="flex space-x-[2px] items-start">
            <img className="w-[32px] h-[32px]" src="./assets/email.svg" alt="" />
            <div className="space-y-[2px] ">
              <div className="text-[20px] font-semibold">Email:</div>
              <div className="font-medium">contact@securosoft.com</div>
            </div>
          </div>
          <div className="flex space-x-[2px] items-center">
            <img
              className="w-[32px] h-[32px] p-[6px]"
              src="./assets/whatsapp.svg"
              alt=""
            />
            <div className="space-y-[2px] ">
              <div className="text-[20px] font-semibold">Whatsapp Us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
