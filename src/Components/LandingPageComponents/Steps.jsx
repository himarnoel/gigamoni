import React from "react";
import {
  First,
  Second,
  Third,
  Fourth,
} from "../../assets/illustration/index.jsx";
import Step from "./step.jsx";

const Steps = () => {
  return (
    <div className="px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem] mt-20 mb-[40rem] flex  flex-col">
      <div className=" float-right items-end text-right text-[#2B7C85]">
        {" "}
        <p className="text-3xl font-bold">How It Works</p>
        <p className="mt-5 font-semibold text-left float-right md:text-right w-[16.5rem] md:w-full  ">
          Send money across borders in 4 easy steps
        </p>
      </div>
      <div
        className="grid mt-10  place-items-center lg:gap-x-4
      grid-cols-2
      gap-y-5
      gap-x-3
       md:gap-y-10
       lg:gap-y-64
      lg:grid-cols-4"
      >
        <Step
          number="Step 1"
          info="Enter senders details"
          img={First}
          class="text-center  md:mb-10 text-[0.4rem] md:text-[0.7rem]"
          class2="w-[3rem] md:w-[6rem] object-contain"
        />{" "}
        <Step
          number="Step 2"
          info="Fill in receivers details"
          img={Second}
          class="text-center  md:mb-10 text-[0.4rem] md:text-[0.7rem]"
          class2="w-[3rem] md:w-[7rem] object-contain"
        />{" "}
        <Step
          number="Step 3"
          info="Confirm all details are correct"
          img={Third}
          class="text-center  md:mb-8  text-[0.4rem] md:text-[0.7rem]"
          class2="w-[3rem] md:w-[6rem] object-contain "
        />{" "}
        <Step
          number="Step 4"
          info="Make payment"
          img={Fourth}
          class="text-center  md:mb-10 text-[0.4rem] md:text-[0.7rem]"
          class2="w-[3rem] md:w-[7rem] object-contain"
        />
      </div>
    </div>
  );
};

export default Steps;
