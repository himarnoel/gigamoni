import React, { useEffect, useRef } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

import { accordionData } from "../../Service/accordion";
import { useState } from "react";
const Accordion = () => {
  const [activeIndex, setactiveIndex] = useState(null);
  let showAccordionRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!showAccordionRef.current.contains(e.target)) {
        setactiveIndex(null);
      }
    });
    return () => {
      document.removeEventListener("mousedown", (e) => {
        if (!showAccordionRef.current.contains(e.target)) {
          setactiveIndex(null);
        }
      });
    };
  }, []);
  return (
    <>
      {accordionData.map((section, index) => (
        <div key={index}>
          <div
            // onClick={
            //   activeIndex === index
            //     ? () => setactiveIndex(null)
            //     : () => setactiveIndex(index)
            // }
            ref={showAccordionRef}
            className="border mt-10 cursor-pointer border-solid px-3 sm:px-3  md:px-10 py-4 flex-col  text-xs  md:text-sm border-[#009186] rounded-[8px] md:rounded-[16px] flex items-center justify-between"
          >
            <div
              ref={showAccordionRef}
              className="flex items-center justify-between w-full"
            >
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

            <div
              className={
                activeIndex === index
                  ? "text-sm top-[100%]  duration-300 ease-in-out  text-left mt-10 leading-6 "
                  : "top-[-100%] duration-300 ease-in-out "
              }
            >
              {activeIndex === index ? section.content : ""}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
