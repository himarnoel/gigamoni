import React from "react";

import circle from "../assets/hero/circle.svg";
import card from "../assets/hero/card.svg";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className=" w-full  ">
        {/* global text */}
        <div
          className="  text-white z-40 text-4xl  leading-loose absolute lg:top-72 md:top-[9rem] md:left-8  lg:left-10 xl:left-24
  "
        >
          <div>
            <p> Transfer globally, finance </p>
            <div className="flex items-center">
              <span className="relative w-[20rem] flex">
                <p>locally</p>
                <img
                  src={circle}
                  alt=""
                  className="object-contain w-[13.5rem] left-[6.5rem] top-0  absolute z-[60]"
                />
                <p className="relative left-1"> with ease</p>
              </span>
            </div>
          </div>
          <p className="text-[1rem] font-[600] w-[28rem] leading-[1.7] mt-4">
            Make international transactions with ease. Get money across to
            family, friends, and business partners faster and easier{" "}
          </p>

          <ol className="text-sm ml-4 mt-8 text-light list-disc leading-[2.3]">
            <li>Transfer money online in African currencies</li>
            <li>Payment received in USD, GBP, and EUR </li>
          </ol>
          <button className="px-8 py-[0.7rem] font-bold  text-sm rounded-lg bg-[#009186] mt-2 text-[#262626]">
            Send Money
          </button>
        </div>

        <div>
          <img
            src={card}
            alt=""
            className="absolute object-contain  xl:w-[23rem]  md:w-[15rem] lg:w-[20rem] lg:right-10 md:right-8 md:top-72    xl:right-24 z-[200]  lg:top-[24rem] xl:top-[20rem] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
