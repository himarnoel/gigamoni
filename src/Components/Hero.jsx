import React from "react";

import circle from "../assets/hero/circle.svg";
import card from "../assets/hero/card.svg";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="">
        {/* global text */}
        <div
          className="mx-2 text-white z-40 text-2xl left-0 right-0 md:right-[50rem]   md:text-left sm:text-4xl   leading-loose absolute top-24  lg:top-72 md:top-[8rem] md:left-8  lg:left-10 xl:left-24
  "
        >
          <div className="">
            <p> Transfer globally, finance </p>
            <div className="flex items-center">
              <span className="relative  sm:w-[20rem] flex">
                <p>locally</p>
                <img
                  src={circle}
                  alt=""
                  className="object-contain w-36 top-[0.1] left-[4.2rem] md:w-[13.5rem] md:left-[6.5rem] md:top-0  absolute z-[60]"
                />
                <p className="relative left-1"> with ease</p>
              </span>
            </div>
          </div>
          <p className="text-[1rem] w-full  md:font-[600]   md:w-[28rem] leading-[1.7] mt-4">
            Make international transactions with ease. Get money across to
            family, friends, and business partners faster and easier{" "}
          </p>

          <ol className="md:text-sm ml-4 mt-8 text-sm  font-light list-disc leading-[2.3]">
            <li>Transfer money online in African currencies</li>
            <li>Payment received in USD, GBP, and EUR </li>
          </ol>
          <img
            src={card}
            alt=""
            className="mx-auto  md:hidden    mt-10    object-contain   w-[16rem]  xl:w-[23rem]  md:w-[15rem] lg:w-[20rem] lg:right-10 md:right-8 md:top-64    xl:right-24 z-[20]  lg:top-[24rem] xl:top-[20rem] "
          />
          <button className="w-full md:w-fit  mt-5  px-8 py-[0.7rem] font-bold  text-sm rounded-lg bg-[#87ACA3] md:mt-2 text-[#262626]">
            Send Money
          </button>
        </div>

        <div>
            <img
              src={card}
              alt=""
              className="absolute object-contain hidden md:block   w-[16rem]  xl:w-[23rem]  md:w-[15rem] lg:w-[20rem] lg:right-10 md:right-8 md:top-64    xl:right-24 z-[200]  lg:top-[24rem] xl:top-[18rem] "
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;
