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
      <NavBar  class="fixed top-0 "/>
      <div className="flex justify-between items-center 2xl:px-[10rem] xl:px-[5rem] lg:px-10  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8">
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
    </div>
  );
};

export default InProgress;
