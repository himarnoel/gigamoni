import React from "react";
import { First } from "../../assets/illustration/index.jsx";
import step from './step';

const Steps = () => {
  return (
    <div className="px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem] mt-20 mb-[40rem] flex  flex-col">
      <div className=" float-right items-end text-right text-[#2B7C85]">
        {" "}
        <p className="text-3xl font-bold">How It Works</p>
        <p className="mt-5 font-semibold text-left md:text-right w-[16.5rem] md:w-full ">
          Send money across borders in 4 easy steps
        </p>
      </div>
      <div
        className="grid mt-20
      grid-col-2
      lg:grid-cols-4"
      >
      <step />
      </div>
    </div>
  );
};

export default Steps;
