import React from "react";
import reason from "../../assets/reason/img.png";
import { IoMdCheckmark } from "react-icons/io";
const Reason = () => {
  return (
    <div className="px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem] mt-20 flex  flex-col mb-[40rem]">
      <div
        className="w-full bg-[#175873] rounded-3xl flex flex-col md:flex-row
         items-center  justify-around text-white lg:px-9 xl:px-8   py-5
        "
      >
        <div className="">
          <p className="text-3xl font-semibold mt-8   ">Why Choose Gigamoni</p>

          <ul className="font-extralight text-xs leading-[2.2rem] mt-5">
            <li className="flex  items-center ">
              <IoMdCheckmark />
              <p className="ml-2  text-[#F8F8FF]">24/7 customer support.</p>
            </li>{" "}
            <li className="flex  items-center ">
              <IoMdCheckmark />
              <p className="ml-2  text-[#F8F8FF]">Transparent fee structure</p>
            </li>{" "}
            <li className="flex  items-center ">
              <IoMdCheckmark />
              <p className="ml-2  text-[#F8F8FF]">
                Competitive exchange rates.
              </p>
            </li>{" "}
            <li className="flex  items-center ">
              <IoMdCheckmark />
              <p className="ml-2  text-[#F8F8FF]">
                Easy and secure online transactions.
              </p>
            </li>{" "}
            <li className="flex  items-center ">
              <IoMdCheckmark />
              <p className="ml-2  text-[#F8F8FF]">
                Fast and reliable transfer of money across the globe.
              </p>
            </li>
            <li className="flex  items-center">
              <IoMdCheckmark />
              <p className="ml-2  text-[#F8F8FF]">
                Access to funding for purchase orders from established suppliers
                to  and grow your business.
              </p>
            </li>
          </ul>
        </div>
        <img
          src={reason}
          alt=""
          className="object-contain mt-2  md:h-[20rem] lg:h-[22rem] xl:h-[24rem]  hidden md:block"
        />
      </div>
    </div>
  );
};

export default Reason;
