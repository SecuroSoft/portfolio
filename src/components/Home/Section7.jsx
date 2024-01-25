import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SideCard = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div
          className="flex flex-col items-center justify-center gap-[6px] md:gap-4 rounded-md backdrop-blur-[10px] 
        max-w-[300px]  md:w-[240px] md:max-w-full lg:w-[290px] bg-gray-50% gradient-border-white 
        py-8  md:py-5 lg:py-8 px-7 md:px-5 lg:px-7 text-center h-full "
        >
          <h3
            className="text-yellow-50% text-clash-display font-semibold  
                   text-3xl md:leading-7  md:text-[32px]"
          >
            2120
          </h3>
          <p className="text-base md:text-sm lg:text-base font-normal md:leading-6 text-center">
            Project Review and testimonial from
          </p>
        </div>

        {/*  */}

        <div className="flex flex-col items-center justify-center gap-[6px] md:gap-4 rounded-md backdrop-blur-[10px] max-w-[300px] md:w-[240px] md:max-w-full lg:w-[290px] bg-gray-50% gradient-border-white py-8 md:py-5 lg:py-8 px-7 md:px-5 lg:px-7 text-center h-full">
          <h3
            className="text-green-50% text-clash-display font-semibold text-3xl
                    md:leading-7 md:text-[32px]"
          >
            2120
          </h3>
          <p className="text-base md:text-sm lg:text-base font-normal lg:leading-6 text-center">
            Project Clients Work world wide Viverra pharetra vitae congue purus
            Enim
          </p>
        </div>
      </div>
    </>
  );
};

const MainCard = () => {
  return (
    <>
      <div
        className="rounded-xl border-purple-50% border-2  py-[26px] pr-[14px] pl-[30px] 
        md:p-6 md:pl-12 xl:p-[32px] xl:pl-[60px] bg-gray-50% 
      backdrop-blur-[2px] max-w-[350px] md:w-full md:max-w-[554px] relative "
      >
        <div className="flex flex-col gap-6">
          <p
            className="text-white font-normal text-xs md:text-lg lg:text-[20px] 
          leading-4 md:leading-6 lg:leading-[32px] relative flex "
          >
            <div className="absolute -left-[20px] -top-2 md:-left-[27px] md:-top-[3px] z-10">
              <img
                src="/assets/mark.svg"
                alt=""
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] "
              />
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut
              enim sagittis. Sed sed arcu vel pellentesque lobortis pretium
              tortor semper enim. Enim augue enim egestas tellus consectetur
              neque. Viverra pharetra vitae congue purus. Enim habitant et
              faucibus sem viverra lorem ante.
            </span>
            <div className="self-end absolute right-5 z-10">
              <img
                src="/assets/mark.svg"
                alt=""
                className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] rotate-180"
              />
            </div>
          </p>

          <div className="flex gap-4 items-center">
            <div className="bg-gray-400 w-[32px] h-[32px] md:w-16 md:h-16 rounded-full">
              <img
                src="/assets/user.svg"
                className="w-[32px] h-[32px] md:w-16 md:h-16 rounded-full object-cover"
                alt=""
              />
            </div>
            <p className="text-gray-40% font-Neuton font-normal text-base leading-6 md:leading-normal md:text-xl">
              Taro Zizo
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Section7 = () => {
  return (
    <div className="home-seven home-bg pt-[28px] md:py-[87px]">
      <h1 className="max-w-[543px] px-[20px] lg:px-0 text-clash-display mx-auto text-center linear-text text-[32px] lg:text-[48px] leading-[36px] lg:leading-[64px] font-semibold">
        What Our Clients Say & Our Achievement
      </h1>

      <div className="hidden md:block relative py-[50px]">
        {/* <div className="absolute right-0  z-20 h-full w-[50px]  md:w-[200px]  rotate-180 swiper-shadow-box" /> */}
        {/* <div className="absolute -left-5 z-20 h-full w-[50px] md:w-[200px] swiper-shadow-box" /> */}
        <div className="px-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            // className="mySwiper"
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            // className="w-fit"
          >
            {[...new Array(5)].map((_, i) => (
              <SwiperSlide>
                <div className="flex gap-4 z-30 justify-center">
                  <SideCard />
                  <MainCard />
                  <SideCard />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="py-[50px] md:hidden">
        <div className="px-2">
          <Swiper
           slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            centeredSlides={true}
            modules={[Pagination]}
          >
            <SwiperSlide className="flex justify-center">
              <SideCard />
            </SwiperSlide>
            <SwiperSlide className="flex items-center pt-[50px] justify-center">
              <MainCard />
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <SideCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Section7;

{
  /* <div className="flex gap-4">
  <div className="flex flex-col gap-5">
    <div className="flex flex-col gap-4 rounded-md backdrop-blur-[10px] w-[290px] bg-gray-50% gradient-border-white py-8 px-7 text-center">
      <h3 className="text-yellow-50% text-clash-display font-semibold text-2xl">
        2120
      </h3>
      <p className="text-base font-normal">
        Project Review and testimonial from
      </p>
    </div>
    <div
      className="flex flex-col gap-4 rounded-md backdrop-blur-[10px] bg-gray-50% gradient-border-white py-8 
                px-7 w-[290px] text-center"
    >
      <h3 className="text-yellow-50% text-clash-display font-semibold text-2xl">
        2120
      </h3>
      <p className="text-base font-normal">
        Project Review and testimonial from
      </p>
    </div>
  </div>
</div>; */
  {
    /* {[...Array(6)].map((_, i) => {
              return (
                <SwiperSlide key={i}>
                  <MainCard />
                </SwiperSlide>
              );
            })} */
  }
}
