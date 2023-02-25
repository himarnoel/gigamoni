import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import Accordion from "./Accordion";
const Faqs = () => {
  return (
    <div className="mt-20 text-center  mb-[40rem] w-full pb-20  px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem]  py-[1rem] ">
      <p className="text-[#2B7C85] text-sm  md:text-[20px] text-center">
        Frequently Asked Questions
      </p>
      <p className="text-center text-[#175873] font-semibold text-xl md:text-[1.8rem] lg:text-[1.7rem]  xl:text-2xl 2xl:text-3xl md:mt-4  mt-4 ">
        Everything you need to know about sending money with Gigamoni
      </p>
      <div className="mt-10">
        {" "}
        <div className="border mt-10 border-solid px-10 py-4 border-[#009186] rounded-[16px] flex items-center justify-between">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <HiOutlinePlus className="text-3xl text-[#333333]" />
        </div>
        <Accordion /> <Accordion /> <Accordion />
      </div>
    </div>
  );
};

export default Faqs;
