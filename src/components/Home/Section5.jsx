import React, { useState } from "react";

const Options = [
  "UI/UX",
  "API Dev",
  "App & IOS",
  "Web Dev",
  "Software Design",
  "Hosting",
];

const tagsList = [
  "Tags",
  "Frontend",
  "Html",
  "Name",
  "Backend",
  "Database",
  "Name",
];

const Tags = ({ tag }) => {
  return (
    <>
      <div
        className="flex px-3 py-[2px] justify-center items-center rounded-[34px] w-fit bg-gray-50% font-normal 
      text-[10px] leading-3 service-card"
      >
        {tag}
      </div>
    </>
  );
};

const Section5 = () => {
  const [active, setActive] = useState("API Dev");
  return (
    <>
      <div className="home-five home-bg">
        <div className="py-[54px] max-w-7xl w-full mx-auto flex flex-col items-center">
          <h1 className="text-clash-display text-center linear-text text-[32px] lg:text-5xl font-semibold max-w-[207px] md:max-w-full">
            Let’s Show Our Works
          </h1>
          <div className="pt-[48px] md:pt-[72px] max-w-full w-full md:w-fit overflow-hidden md:overflow-auto">
            <div
              className="flex items-center backdrop-blur-[4px] bg-gray-50% relative 
          overflow-scroll md:overflow-auto px-3 md:px-10 py-[18px] gap-4 md:gap-10 slider-border md:rounded-[50px]
          "
            >
              {Options?.map((option, index) => (
                <div
                  key={index}
                  className={`py-[6px] text-center md:py-3 rounded-[50px] px-[12px] md:px-[18px] cursor-pointer transition-all whitespace-nowrap  ${
                    active === option && "gradient-bg"
                  }`}
                  onClick={() => setActive(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {/*  */}
          <div className="px-5 pt-[48px] md:px-0">
            <div className="border border-white px-5 py-9 md:p-[60px] bg-gray-50% w-full shadow-1 rounded-xl flex gap-6 flex-col">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 ">
                <div className="p-5 project-show-card w-full project-card-one col-span-1 md:col-span-2 relative rounded-md shadow-1">
                  <div className="pt-16 xl:pt-14">
                    <h3 className="text-clash-display leading-9 text-2xl font-semibold text-white">
                      Project Name
                    </h3>
                    <p className="text-xs font-normal leading-[18px] pt-1 max-h-[43px] overflow-hidden md:max-h-[116px] xl:max-h-full">
                      Lorem ipsum dolor sit amet consectetur. Sapien sit nec
                      morbi ut enim sagittis. Sed sed arcu vel pellentesque
                      lobortis.Lorem ipsum dolor sit amet consectetur. Sapien
                      sit nec morbi ut enim sagittis. Sed sed arcu vel
                      pellentesque lobortis. Sed sed arcu vel pellentesque
                      lobortis.Lorem ipsum dolor sit amet consectetur. Sapien
                      sit nec morbi ut enim sagittis. Sed sed arcu vel
                      pellentesque lobortis.
                    </p>

                    <div className="pt-3 flex gap-[5px] flex-wrap max-w-[250px]">
                      {tagsList?.map((tag, index) => (
                        <Tags tag={tag} key={tag} />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 col-span-1 md:col-span-3 relative rounded-md shadow-1 project-show-card project-card-two">
                  <div className="absolute bottom-8 right-5 left-5">
                    <h3 className="text-clash-display text-2xl leading-9 font-semibold text-white">
                      Project Name
                    </h3>
                    <p className="pt-1 text-xs leading-[18px] font-normal">
                      Lorem ipsum dolor sit amet consectetur. Sapien sit nec
                      morbi ut enim sagittis.Sed sed arcu vel pellentesque
                      lobortis.Lorem ipsum dolor sit amet consectetur ...
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid  grid-cols-1 md:grid-cols-5 gap-6">
                <div className="p-5 col-span-1 md:col-span-3 relative rounded-md shadow-1 project-show-card project-card-third">
                  <div className="absolute bottom-8 right-5 left-5">
                    <h3 className="text-clash-display text-2xl font-semibold text-white leading-9">
                      Project Name
                    </h3>
                    <p className="pt-1 text-sm font-normal leading-[18px]">
                      Lorem ipsum dolor sit amet consectetur. Sapien sit nec
                      morbi ut enim sagittis.Sed sed arcu vel pellentesque
                      lobortis.Lorem ipsum dolor sit amet consectetur ...
                    </p>
                  </div>
                </div>

                <div className="p-5 project-show-card project-card-four col-span-1 md:col-span-2 relative rounded-md shadow-1">
                  <div className="absolute bottom-8 right-5 left-5">
                    <h3 className="text-clash-display text-2xl font-semibold text-white leading-9">
                      Project Name
                    </h3>
                    <p className="pt-1 text-sm leading-[18px] font-normal">
                      Lorem ipsum dolor sit amet consectetur. Sapien sit nec
                      morbi ut enim sagittis. Sed sed arcu vel pellentesque
                      lobortis.Lorem ipsum dolor sit amet consectetur ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
