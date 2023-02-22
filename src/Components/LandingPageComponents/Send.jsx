import React from "react";
import send from "../../assets/Send/hand.png";
const Send = () => {
  return (
    <div className="  px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem] mt-20 mb-64">
      <h1 className="text-[#175873]  w-full  text-[1.3rem] lg:text-[1.7rem] font-semibold ">
        Send Money Overseas Hassle Free{" "}
      </h1>
      <p className="w-full md:w-[30rem] lg:w-[33rem] font-semibold mt-5 text-lg">
        Quick, efficient method to send and receive money abroad fast and easy
        with good rates.
      </p>
      <div className="flex flex-col sm:flex-row justify-between w-full  mt-14  lg:mt-12">
        <img
          src={send}
          alt=""
          className="object-contain w-[15rem]  mx-auto  md:w-[20rem] md:mt-0"
        />
        <div className=" w-full sm:w-[35rem] flex flex-col justify-between ">
          <div className=" flex flex-col lg:flex-row items-center justify-between lg:mt-14 ">
            <div className="rounded-xl w-full h-[5rem] mt-5 sm:w-[15rem] sm:h-[10rem] lg:w-[16rem] lg:h-[12rem] px-4 flex justify-center items-center text-left  bg-[#2B7C85] text-[#F8F8FF] text-sm font-light">
              Fast and reliable transfer of money across the globe with
              competitive exchange rates
            </div>
            <div className=" rounded-xl w-full h-[5rem] mt-5  sm:w-[15rem] sm:h-[10rem] lg:w-[16rem] sm:mt-5 lg:mt-0   lg:h-[12rem] px-4 flex justify-center items-center text-left  bg-[#2B7C85] text-[#F8F8FF] text-sm font-light">
              Empower people and local businesses with financial reach
            </div>
          </div>
          <p className="font-medium sm:text-lg mt-5 lg:mt-0 sm:ml-4 sm:text-center lg:text-left ">
            We provide a simple, efficient method to send money abroad fast and
            easy with good rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Send;
