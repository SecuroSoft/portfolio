import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const dataArr = [
  {
    id: "1",
    name: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis.Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis. Sed sed arcu vel pellentesque lobortis.Lorem ipsum dolor sit amet consectetur.Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis.",
    tags: ["Tags", "Frontend", "Html", "Name", "Backend", "Database", "Name"],
  },
  {
    id: "2",
    name: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis.Lorem ipsum dolor sit amet",
  },
  {
    id: "3",
    name: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis.Lorem ipsum dolor sit amet",
  },
  {
    id: "4",
    name: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis.Lorem ipsum dolor sit amet",
  },
  {
    id: "5",
    name: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis.Lorem ipsum dolor sit amet",
  },
  {
    id: "6",
    name: "Project Name",
    desc: "Lorem ipsum dolor sit amet consectetur. Sapien sit nec morbi ut enim sagittis. Sed sed arcu vel pellentesque lobortis.Lorem ipsum dolor sit amet",
  },
];

const Tags = ({ tag }) => {
  return (
    <>
      <div
        className="flex px-3 py-[2px] justify-center items-center rounded-[34px] border-[1px] w-fit bg-gray-50% font-normal text-[10px] leading-4
      service-card"
      >
        {tag}
      </div>
    </>
  );
};

const Card = ({ item }) => {
  return (
    <>
      <div className="gradient-border w-full h-[450px] relative overflow-hidden rounded-lg ">
        <div className="absolute inset-0 w-full h-full -z-10">
          <img
            src="public/assets/slider-img.png"
            className="md:object-cover w-full h-full"
            alt=""
          />
        </div>
        <div className="project-card z-30 absolute inset-0 w-full h-full ">
          <div className="bottom-10 right-5 left-5 absolute">
            <h3 className="text-clash-display text-base leading-5 md:leading-9 md:text-2xl font-semibold text-white">
              {item.name}
            </h3>
            <p className="text-[10px] md:text-xs leading-[15px] md:leading-[18px] font-normal">
              {item.desc}
            </p>
            {item.tags && (
              <div className="pt-4 flex gap-[5px] flex-wrap max-w-[250px] ">
                {item.tags.map((tag, index) => {
                  return <Tags key={index} tag={tag} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Section3 = () => {
  return (
    <>
      <div className="deployment-third service-bg">
        <div className="py-[60px] md:py-[110px] md:space-y-[60px]">
          <div className="flex justify-center">
            <h1 className="text-[48px] font-semibold text-clash-display linear-text leading-[64px]">
              Our Project
            </h1>
          </div>
          <div className="relative px-5 w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {dataArr.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Card item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
