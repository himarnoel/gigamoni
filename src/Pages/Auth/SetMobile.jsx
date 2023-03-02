import React from "react";
import pop from "../../assets/poper.svg";

const SetMobile = () => {
  return (
    <>
      <div className="px-2 xss:px-4 xs:px-6  flex-auto bg flex justify-center items-center font-poppins">
        <div className="flex-col flex justify-between items-center px-2 py-10 lg:px-20 bg-[#F8F8FF]  rounded-[11.8392px]   w-full   h-[80%] ">
          <p className="text-xl font-medium ">You Are All Set</p>
          <img src={pop} alt="" className="md:w-[12rem] w-[10rem]" />
          <button className="w-full py-3 bg-[#009186] rounded-[8px] text-[#F8F8FF]">
            Go to Dashboard
          </button>
        </div>
      </div>
    </>
  );
};

export default SetMobile;
