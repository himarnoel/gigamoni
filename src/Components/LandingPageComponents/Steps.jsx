import React from "react";
import { First } from "../../assets/illustration/index.jsx";

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
        <div className=" border border-[ #87ACA3] rounded-full h-[18rem]  w-[18rem] bg-[#F8F8FF] flex flex-col justify-center items-center ">
          <div className="text-center mb-10">
            {" "}
            <p>Step 1</p>
            <p>Enter senders details</p>
          </div>
          <img src={First} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
