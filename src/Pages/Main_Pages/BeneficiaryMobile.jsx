import React from "react";
import DashNav from "../../Components/DashBoardComponents/DashNav";
import bell from "../../assets/bell.svg";
import { BiTransfer } from "react-icons/bi";
import caller from "../../assets/Dashboard/caller.svg";
const BeneficiaryMobile = () => {
  return (
    <div className="font-poppins ">
      {" "}
      <DashNav class="fixed top-0 w-full z-[30] " />
      <div className="px-2 xss:px-4 xs:px-6 pt-20">
        <div className="w-full lg:hidden flex justify-between items-center mt-10">
          {" "}
          <button className="sm:py-2 py-1 px-10 text-sm sm:w-[20rem] lg:w-full  mxl:py-[12px] mxl:text-xl  flex    mxl:mt-[6rem] justify-center items-center text-[#009186]    rounded-lg border-2 border-[#009186]  ">
            Customer Support
            <img
              src={caller}
              alt=""
              className="ml-2 w-[1.8rem] sm:w-[2rem] mxl:w-[2.8rem]"
            />
          </button>
          <img
            src={bell}
            alt=""
            className="object-contain w-[1.6rem] sm:w-[2.3rem] md:w-[2.5rem] "
          />
        </div>
        <p className="text-center mt-10">Beneficiaries</p>
      </div>
    </div>
  );
};

export default BeneficiaryMobile;
