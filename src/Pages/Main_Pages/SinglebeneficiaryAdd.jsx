import React, { useEffect, useRef, useState } from "react";
import DashNav from "../../Components/DashBoardComponents/DashNav";
import bell from "../../assets/bell.svg";
import { GrSearch } from "react-icons/gr";
import search from "../../assets/search.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import card from "../../assets/carddash.png";
import { BiTransfer } from "react-icons/bi";
import caller from "../../assets/Dashboard/caller.svg";
import cardformobilescreen from "../../assets/Dashboard/mobilecard.svg";
import axios from "axios";
import {
  addbeneficiaryValidate,
  baseurl,
  pendingValidate,
} from "../../Service/validate_and_api";
import { BsFillCalendar2Fill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { RiCloseCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import NavBar from "./../../Components/AppComponents/NavBar";
import { useFormik } from "formik";

const SinglebeneficiaryAdd = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/signup");
    }
  }, []);
  const formik = useFormik({
    initialValues: {
      receivername: "",
      bankName: "",
      phoneNumber: "",
      bankAddress: "",
      emailAddress: "",
      iban: "",
      accountName: "",
      swiftCode: "",
      accountNumber: "",
    },
    validationSchema: addbeneficiaryValidate,
    onSubmit: (values) => {
      axios.post(
        `${baseurl}/accounts/profile`,
        {
          fullname: values.name,
        },

        {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        }
      );
    },
  });
  return (
    <div className="font-poppins">
      <DashNav class="fixed top-0 z-[2]" />
      <div className="flex justify-between items-center mt-28 px-2 xss:px-4 xs:px-6  sm:mt-26  sm:mt-26  lg:mt-20 2xl:px-[10rem] xl:px-[5rem] lg:px-10">
        <button
          onClick={() => navigate("/dashboard")}
          className=" text-sm px-[4rem] py-[0.7rem]  lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3]"
        >
          Back
        </button>
        <div
          onClick={() => alert("Notification")}
          className=" text-[#009186] items-center cursor-pointer flex "
        >
          <img
            src={bell}
            alt=""
            className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
          />
          <p className="font-semibold mxl:text-xl hidden lg:block ">
            Notifications
          </p>
        </div>
      </div>
      <form
        className="mt-20 mxl:mt-[7rem] sm:px-6  md:px-8 lg:px-20"
        action=""
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col lg:flex-row gap-x-20  mt-10">
          <div className="w-full flex flex-col gap-y-8 mxl:gap-y-16 ">
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="receivername"
                className={
                  formik.errors.receivername && formik.touched.receivername
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.receivername}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.receivername && formik.touched.receivername
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Receiver’s Name
              </label>
              {formik.errors.receivername && formik.touched.receivername ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.receivername}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="phoneNumber"
                className={
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins   w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.phoneNumber && formik.touched.phoneNumber
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Phone Number
              </label>
              {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.phoneNumber}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="emailAddress"
                className={
                  formik.errors.emailAddress && formik.touched.emailAddress
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.emailAddress}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.emailAddress && formik.touched.emailAddress
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Email Address
              </label>
              {formik.errors.emailAddress && formik.touched.emailAddress ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.emailAddress}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="accountName"
                className={
                  formik.errors.accountName && formik.touched.accountName
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.accountName}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.accountName && formik.touched.accountName
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Account Name
              </label>
              {formik.errors.accountName && formik.touched.accountName ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.accountName}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="accountNumber"
                className={
                  formik.errors.accountNumber && formik.touched.accountNumber
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.accountNumber}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.accountNumber && formik.touched.accountNumber
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Account Number
              </label>
              {formik.errors.accountNumber && formik.touched.accountNumber ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.accountNumber}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
          </div>
          <div className="w-full mt-2 md:mt-5  lg:mt-0  flex flex-col   gap-y-8 mxl:gap-y-16">
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="bankName"
                className={
                  formik.errors.bankName && formik.touched.bankName
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.bankName}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.bankName && formik.touched.bankName
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Bank Name
              </label>
              {formik.errors.bankName && formik.touched.bankName ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.bankName}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="bankAddress"
                className={
                  formik.errors.bankAddress && formik.touched.bankAddress
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.bankAddress}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.bankAddress && formik.touched.bankAddress
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Bank Address
              </label>
              {formik.errors.bankAddress && formik.touched.bankAddress ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.bankAddress}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="iban"
                className={
                  formik.errors.iban && formik.touched.iban
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.iban}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.iban && formik.touched.iban
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                IBAN
              </label>
              {formik.errors.iban && formik.touched.iban ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.iban}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="swiftCode"
                className={
                  formik.errors.swiftCode && formik.touched.swiftCode
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.swiftCode}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.swiftCode && formik.touched.swiftCode
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                SwiftCode
              </label>
              {formik.errors.swiftCode && formik.touched.swiftCode ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.swiftCode}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <button className=" w-fit bg-[#009186] rounded-lg px-4 text-sm py-3 self-end text-[#F8F8FF] font-medium">
              Save Beneficiary
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SinglebeneficiaryAdd;
