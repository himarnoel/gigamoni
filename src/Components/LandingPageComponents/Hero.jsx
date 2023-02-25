import React from "react";

import circle from "../../assets/hero/circle.svg";
import card from "../../assets/hero/card.svg";

const Hero = () => {
  return (
    <div>
      {" "}
      <div className="">
        {/* global text */}
        <div
          className="flex flex-col items-center  xl:left-[10rem] 2xl:left-[10rem] mx-2 sm:mx-8 md:mx-1 text-white z-40 text-2xl left-0 right-0  md:right-[16rem]  lg:right-[27rem] xl:right-[40rem]  xl:top-[18rem]   md:text-left sm:text-4xl   leading-loose absolute top-24  lg:top-[16rem] md:top-[10rem] md:left-8  lg:left-10 
  "
        >
          <div className="leading-[2] self-start ">
            <p> Transfer globally, finance </p>
            <div className="flex items-center">
              <span className="relative  sm:w-[20rem] flex">
                <p>locally</p>
                <img
                  src={circle}
                  alt=""
                  className="object-contain w-36 sm:w-[13rem] sm:left-[6.3rem] sm:top-[0.2rem] top-[0.1] left-[4.2rem] md:w-[13.5rem] md:left-[6.5rem] md:top-0  absolute z-[60]"
                />
                <p className="relative left-1"> with ease</p>
              </span>
            </div>
          </div>
          <p className="text-[1rem] w-full sm:w-[22rem] font-medium   md:w-[28rem] leading-[1.7] mt-4 md:mt-4 sm:mt-3">
            Make international transactions with ease. Get money across to
            family, friends, and business partners faster and easier{" "}
          </p>

          <ol className=" self-start md:text-sm ml-4 sm:mt-3 md:mt-6 lg:mt-3 sm:text-sm text-xs mt-8  font-light list-disc leading-[2.3]">
            <li>Transfer money online in African currencies</li>
            <li>Payment received in USD, GBP, and EUR </li>
          </ol>
          <img
            src={card}
            alt=""
            className="mx-auto  md:hidden    mt-10 lg:mt-5   object-contain   w-[16rem]  xl:w-[23rem]  md:w-[15rem] lg:w-[20rem] lg:right-10 md:right-8 md:top-64    xl:right-24 z-[20]  lg:top-[2rem] xl:top-[20rem] "
          />
          <button className="w-[14rem] xss:w-[14rem] xs:w-[16rem]  md:w-fit  mt-5   py-[0.7rem] font-bold xl:mt-6  text-sm rounded-lg bg-[#87ACA3] md:mt-8 lg:mt-3 text-[#262626]">
            Send Money
          </button>
        </div>

        <div>
          <img
            src={card}
            alt=""
            className="absolute object-contain hidden md:block   w-[16rem]  xl:w-[23rem]  md:w-[15rem] lg:w-[20rem] lg:right-10 md:right-8 md:top-64 2xl:right-[10rem]    xl:right-24   lg:top-[19rem] xl:top-[18.5rem] z-[60]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
