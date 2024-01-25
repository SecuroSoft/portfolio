import React, { useState, useRef } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// hover:scale-110  hover:gradient-border

const arr = [
  {
    id: 1,
    title: "Source Code Analysis",
    img: "/assets/qr-code.png",
  },
  {
    id: 2,
    title: "Hosting & Domain Services",
    img: "/assets/qr-code.png",
  },
  {
    id: 3,
    title: "Website Development",
    img: "/assets/qr-code.png",
  },
  {
    id: 4,
    title: "Smart Contact Development",
    img: "/assets/qr-code.png",
  },
  {
    id: 5,
    title: "Smart Contact Security",
    img: "/assets/qr-code.png",
  },
  {
    id: 6,
    title: "Smart Contact Development",
    img: "/assets/qr-code.png",
  },
  {
    id: 7,
    title: "Smart Contact Security",
    img: "/assets/qr-code.png",
  },
  {
    id: 8,
    title: "Source Code Analysis",
    img: "/assets/qr-code.png",
  },
];
const Cards = ({ item, activeCardIndex, index }) => {
  return (
    <>
      <div
        className={`m-3 p-6 flex gap-5 flex-col rounded-lg 
      gradient-border-white bg-gray-50% backdrop-blur-[2px]
      transition-all duration-300 ease-in-out 
       hover:scale-110  hover:gradient-border group min-w-[260px]`}
      >
        <div
          className="p-[6px] service-card flex items-center justify-center h-[36px] w-[36px]
        rounded-[4px] 
        "
        >
          <img src={`${item?.img}`} className="w-6 h-6" alt="" />
        </div>
        <h3 className="font-semibold text-[24px] leading-8">{item?.title}</h3>

        <button
          className={`py-[8px] px-5 flex items-center justify-center 
        border-[1px] border-white w-fit rounded-[26px] font-semibold text-sm
        group-hover:bg-purple-dark group-hover:border-purple-dark
        `}
        >
          Know More
        </button>
      </div>
    </>
  );
};

const Section3 = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(1);
  const scrollRef = useRef(null);

  const handleNextBtn = () => {
    scrollRef.current.scrollLeft += 260;
  };
  const handlePrevBtn = () => {
    scrollRef.current.scrollLeft -= 255;
  };

  const handlreScroll = () => {
  };

  return (
    <>
      <div className="hidden md:inline-block service-bg service-third pt-4 pb-5 w-screen relative">
        <div className="flex flex-col justify-center items-center">
          <h3 className=" text-clash-display linear-text font-semibold text-5xl leading-[64px]">
            Our Services
          </h3>
          <p className="pt-3 text-lg font-normal text-center w-[770px]">
            We distinguish ourselves in Quality and Timely Delivery. We deliver
            Cyber Security Services, IT Solutions, Websites and Mobile Apps
            tailored to the need of our customers. And we provide these at the{" "}
            <span className="font-semibold ">MOST COMPETITIVE PRICE</span>.
          </p>
        </div>

        <div className="pt-[100px]  sliderBody scrollbar-hide">
          <div
            ref={scrollRef}
            onScroll={handlreScroll}
            className="flex  overflow-scroll py-2 scroll-smooth"
          >
            {arr.map((item, index) => (
              <Cards
                key={index}
                index={index}
                activeCardIndex={activeCardIndex}
                item={item}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end px-20 pt-[50px]">
          <div className="flex gap-5">
            <button
              className="flex items-center justify-center rounded-[32px] gradient-border-white p-[6px]"
              onClick={handlePrevBtn}
            >
              <ArrowLeftIcon className="h-6 w-6 text-white" />
            </button>
            <button
              className="bg-purple-40% rounded-[32px] flex items-center justify-center p-[6px]
            gradient-border border-[1px]"
              onClick={handleNextBtn}
            >
              <ArrowRightIcon className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button className="border-[1px] border-white py-[10px] px-6 rounded-[26px] font-semibold text-base leading-7 text-center">
            View All
          </button>
        </div>
      </div>
    </>
  );
};

// <Swiper
// slidesPerView={1}
// spaceBetween={50}
// modules={[ Navigation]}
// className="mySwiper"
// navigation={true}
// >
// <SwiperSlide className="flex">
//   {arr.map((item, index) => (
//     <Cards
//       key={index}
//       index={index}
//       activeCardIndex={activeCardIndex}
//       item={item}
//     />
//   ))}
// </SwiperSlide>
// <SwiperSlide className="flex">
//   {arr.map((item, index) => (
//     <Cards
//       key={index}
//       index={index}
//       activeCardIndex={activeCardIndex}
//       item={item}
//     />
//   ))}
// </SwiperSlide>
// </Swiper>

export default Section3;
