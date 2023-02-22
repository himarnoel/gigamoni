import React from "react";
import {
  first
} from "../../assets/illustration/index.jsx";

const Steps = () => {
  return (
    <div className="px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem] mt-20 mb-[40rem]">
      <div className="float-right text-right text-[#2B7C85]">
        {" "}
        <p className="text-3xl font-bold">How It Works</p>
        <p className="mt-5 font-semibold text-left w-[16.5rem] md:w-full">
          Send money across borders in 4 easy steps
        </p>
      </div>
      <div
        className="grid
      grid-col-2
      lg:grid-cols-4"
      >
        <div className="border-5 rounded-full ">
          <img src={first} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
