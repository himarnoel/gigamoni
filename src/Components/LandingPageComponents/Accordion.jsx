import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
const Accordion = () => {
  return (
    <div className="border mt-10 border-solid px-3 sm:px-3  md:px-10 py-4 text-xs  md:text-sm border-[#009186] rounded-[8px] md:rounded-[16px] flex items-center justify-between">
      <p className="text-left ">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <HiOutlinePlus className="text-xl  md:text-3xl text-[#333333]" />
    </div>
  );
};

export default Accordion;
