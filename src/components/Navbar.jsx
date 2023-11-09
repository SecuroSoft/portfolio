import React from "react";

const menu = [
  {
    name: "About",
  },
  {
    name: "Services",
  },
  {
    name: "Resources",
  },
  {
    name: "Careers",
  },
];

const Navbar = () => {
  return (
    <div className="py-[12px] px-[20px] lg:px-[100px] lg:py-[24px] flex items-center justify-between gap-6">
      <div>Securosoft</div>
      <div className="hidden lg:flex items-center space-x-[24px]">
        {menu?.map((item, key) => (
          <div className="text-lg font-semibold">{item?.name}</div>
        ))}
      </div>
      {/* Buttons */}
      <div className="hidden lg:flex items-center space-x-[24px]">
        <button className="px-[24px] py-[10px] text-base font-semibold border border-white rounded-[26px]">
          Our Pricing
        </button>
        <button className="px-[24px] py-[10px] text-base font-semibold bg-[#6741FE] rounded-[26px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
