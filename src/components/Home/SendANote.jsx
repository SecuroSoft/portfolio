import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline"

const SendANote = () => {
  return (
    <div className="hidden lg:block py-[36px] max-w-7xl w-full mx-auto space-y-[20px]">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-center">Send A Note</h3>
        <div className="max-w-[557px] mx-auto text-center text-[#8C8C8C] font-normal leading-[24px]">
          Be the first one to know about discounts, offers and events weekly in
          your mailbox. Unsubscribe whenever you like with one click.
        </div>
      </div>
      <div className="max-w-[751px] mx-auto h-[63px] w-full flex items-center py-[8px] pl-[32px] pr-[8px] rounded-[40px] gradient-border-white space-x-3">
        <EnvelopeIcon className="w-[20px] h-[20px] text-[#8C8C8C]" />
        <input 
        className="w-full h-full bg-inherit outline-none border-none"
        placeholder="Message ..."
        type="text" />
        <button className="py-[10px] px-[24px] rounded-[27px] bg-[#6741FE] font-semibold w-[136px] text-center">Submit</button>
      </div>
    </div>
  );
};

export default SendANote;
