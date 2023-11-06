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
    <div className="py-[54px] max-w-7xl w-full mx-auto flex flex-col items-center space-y-[72px]">
      <h1 className="text-clash-display linear-text text-5xl font-semibold">
        Let’s Show Our Works
      </h1>
      {/* DISPALY PROFESSIONAL WORK */}
      <div className="space-y-[48px] w-full flex flex-col items-center">
        <div className="px-[40px] py-[18px] flex items-center gap-[40px] border border-white rounded-[50px]">
          {Options?.map((option, index) => (
            <div
              key={index}
              className={`rounded-[50px] py-[12px] px-[18px] cursor-pointer ${
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
