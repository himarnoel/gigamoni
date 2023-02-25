import React from "react";
import reason from "../../assets/reason/img.png";
import { IoMdCheckmark } from "react-icons/io";
import "../../App.css";
const Reason = () => {
  return (
    <div className="px-2 xss:px-4 xs:px-6  sm:px-10  md:px-8  lg:px-10  xl:px-[10rem] mt-20 flex  flex-col ">
      <div
        className="w-full bg-[#175873] rounded-2xl  md:rounded-3xl flex flex-col md:flex-row
         items-center  justify-around text-white md:px-4 lg:px-9 xl:px-8 py-5 md:py-10    lg:py-5
        "
      >
        <div className=" ">
          <p className="text-center md:text-left xs:text-2xl sm:text-3xl font-semibold md:mt-8 xs:mt-4 ">
            Why Choose Gigamoni
          </p>
          <img
            src={reason}
            alt=""
            className="object-contain w-[13rem] xs:w-[15rem] sm:w-[18rem]  mt-5  mx-auto md:hidden"
          />
          <ul className="font-extralight ul text-xs leading-[2.2rem] mt-5 px-2 xs:px-3 sm:px-0 mb-3 text-[#F8F8FF]">
            <li className=" li">
              {/* <IoMdCheckmark /> */}
              24/7 customer support.
            </li>{" "}
            <li className=" li">Transparent fee structure</li>{" "}
            <li className=" li">Competitive exchange rates.</li>{" "}
            <li className=" li">Easy and secure online transactions.</li>{" "}
            <li className=" lis leading-[1.2rem] mt-1 ">
              Fast and reliable transfer of money across the globe.
            </li>
            <li className=" lis leading-[1.2rem] mt-2">
              Access to funding for purchase orders from established suppliers
              to  and grow your business.
            </li>
          </ul>
        </div>
        <img
          src={reason}
          alt=""
          className="object-contain mt-2  md:h-[18rem] lg:h-[22rem] xl:h-[24rem]  hidden md:block"
        />
      </div>
    </div>
  );
};

export default Reason;
