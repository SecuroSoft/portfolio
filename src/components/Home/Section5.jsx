import React, { useState } from "react";

const Options = [
  "UI/UX",
  "API Dev",
  "App & IOS",
  "Web Dev",
  "Software Design",
  "Hosting",
];

const Section5 = () => {
  const [active, setActive] = useState("Web Dev");
  return (
    <div className="py-[54px] max-w-7xl w-full mx-auto flex flex-col items-center space-y-[48px] lg:space-y-[72px]">
      <h1 className="text-clash-display linear-text text-[32px] lg:text-5xl font-semibold max-w-[207px] mx-auto lg:max-w-none ">
        Let’s Show Our Works
      </h1>
      {/* DISPALY PROFESSIONAL WORK */}
      <div className="space-y-[48px] w-full flex flex-col items-center">
        <div className="px-[16px] lg:px-[40px] py-[6px] lg:py-[18px] flex items-center gap-[16px] lg:gap-[40px] border border-white rounded-[50px]">
          {Options?.map((option, index) => (
            <div
              key={index}
              className={`rounded-[50px] px-[12px] py-[6px] lg:py-[12px] text-xs lg:text-[20px] lg:px-[18px] cursor-pointer ${
                active === option && "gradient-bg"
              }`}
              onClick={() => setActive(option)}
            >
              {option}
            </div>
          ))}
        </div>
        {/* DISPALY CONTAINER */}
        <div className="border border-white p-[60px] w-full shadow-1 rounded-xl">

        </div>
      </div>
    </div>
  );
};

export default Section5;
