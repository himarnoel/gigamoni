import React from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

import { accordionData } from "../../Service/accordion";
import { useState } from "react";
const Accordion = () => {
  const [activeIndex, setactiveIndex] = useState(null);
  return (
    <>
      {accordionData.map((section, index) => (
        <div key={index}>
          <div className="border mt-10 border-solid px-3 sm:px-3  md:px-10 py-4 flex-col  text-xs  md:text-sm border-[#009186] rounded-[8px] md:rounded-[16px] flex items-center justify-between">
            <div className="flex items-center justify-between w-full">
              <p className="text-left ">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
              {activeIndex === index ? (
                <HiOutlineMinus
                  onClick={() => setactiveIndex(null)}
                  className="text-4xl  md:text-2xl text-[#333333] cursor-pointer"
                />
              ) : (
                <HiOutlinePlus
                  onClick={() => setactiveIndex(index)}
                  className="text-4xl  md:text-2xl text-[#333333] cursor-pointer"
                />
              )}
            </div>
            {activeIndex === index ? (
              <div className="text-sm text-left mt-12 leading-6 ">
                {section.content}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
