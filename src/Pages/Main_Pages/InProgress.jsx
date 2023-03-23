import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { BiTransfer } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Formik, useFormik } from "formik";
import { pendingValidate } from "../../Service/validate_and_api";
const InProgress = () => {
  return (
    <div className=" font-poppins">
      <NavBar class="top-0 fixed" />
      <div className="pt-20 mxl:pt-32 2xl:px-[10rem] xl:px-[5rem] lg:px-10  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8">
        <div className="flex justify-between items-center">
          {" "}
          <button className="p-6 bg-[#87ACA3] rounded-md px-20 text-sm py-3 float-right  text-[#262626] font-medium">
            Back
          </button>
          <div
            onClick={() => alert("Notification")}
            className=" text-[#009186] items-center cursor-pointer hidden lg:flex "
          >
            <img
              src={bell}
              alt=""
              className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
            />
            <p className="font-semibold mxl:text-xl">Notifications</p>
          </div>
        </div>
        <div className="flex justify-between items-center font-medium text-sm">
          <div className="flex flex-col mt-8 ">
            <div className="flex">
              <p className="pr-8">Transaction ID :1234567890987</p>
              <p className="flex">
                <p> Status:</p> <p className="text-[#FBBC05] ml-1"> In progress</p>
              </p>
            </div>
            <div className="flex mt-8">
              <p className="pr-8">Date: 01/01/2023 11:30am</p>
              <p>Mode of payment: Card Payment</p>
            </div>
          </div>
          <div className="flex flex-col text-sm font-semibold">
            <p className="text-[#262626] flex mt-4">
              <p> Proof of payment status:</p>
              <p className="text-[#D80010] ml-2 "> Not uploaded</p>
            </p>
            <p className="ml-3 mt-6">Mode of payment: Card Payment</p>
            <p className="ml-4 text-[#009186] mt-6">Upload proof of payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InProgress;
