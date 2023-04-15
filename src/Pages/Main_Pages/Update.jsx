import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { pendingValidate } from "../../Service/validate_and_api";
import { useState } from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { RingLoader } from "react-spinners";
import { RiArrowDownSLine } from "react-icons/ri";
import trans from "../../assets/overlayimage/iconic.svg";
import img1 from "../../assets/overlayimage/one.svg";
import img2 from "../../assets/overlayimage/vector.svg";
import { IoCloseCircle } from "react-icons/io5";
import mail from "../../assets/Vector.svg";
const Update = () => {
  const [overlay, setoverlay] = useState(false);
  const [change, setchange] = useState(false);
  const navigate = useNavigate();
  const blockScroll = () => {
    useEffect(() => {
      const val = localStorage.getItem("LoggedIntoken");
      if (!val) {
        navigate("/signup");
      }
    }, []);
    window.scrollTo({ top: 0, left: 0 });
    body.style.overflow = "hidden";
  };
  const allowScroll = () => {
    html.style.overflow = "";
  };
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
      receivingCountry: "",
      tractionDescription: "",
      receivingcurrency: "USD",
      sendingcurrency: "NGN",
      amountsent: "",
      amountReceived: "",
    },
    validationSchema: pendingValidate,
    onSubmit: (values) => {
      // navigate("/summary", {
      //   state: values,
      // });
    },
  });
  const payWithTransfer = () => {};
  const payWithCard = () => {};

  return (
    <div className=" bg-[#F8F8FF] font-poppins ">
      <div
        className={
          overlay
            ? "absolute bg-cover bg-[#262626]/[0.8] top-0 z-[20] h-screen w-full flex  justify-center items-center "
            : "hidden"
        }
      >
        {change ? (
          <div className="bg-white h-[24rem] w-[26rem] rounded-lg flex flex-col items-center relative">
            <IoCloseCircle
              className="text-[#009186] absolute right-3 top-2 text-xl cursor-pointer"
              onClick={() => setoverlay(false)}
            />
            <div className="flex justify-center items-center rounded-full h-[5rem] w-[5rem] bg-[#00913E]/[0.1] mx-auto mt-20">
              <img src={mail} alt="" className="object-contain w-12" />
            </div>
            <p className="text-center mt-8 w-[20rem]">
              You will pay the sum of N500,000
            </p>
            <button
              onClick={() => setchange(false)}
              className="py-2 px-10 bg-[#009186] text-[#F8F8FF] rounded-lg mt-5"
            >
              Pay Now
            </button>
          </div>
        ) : (
          <div className="bg-[#F8F8FF] h-[16rem] rounded-[11.8392px] text-xs mxl:text-sm w-[26rem] mxl:h-[20rem] mxl:w-[30rem] py-8 px-10  font-semibold">
            <p className="text-center">Select Mode Of Payment</p>
            <div
              onClick={() => payWithTransfer()}
              className="flex cursor-pointer pl-3 pb-3 mt-8 mxl:mt-14 items-center border-b border-[#87ACA3] text-[#000000]"
            >
              {" "}
              <img src={img2} alt="" />
              <p className="ml-2">Pay with Bank Transfer</p>
            </div>
            <div
              onClick={() => payWithCard()}
              className="flex cursor-pointer pl-3 pb-3 mt-8 mxl:mt-12 items-center border-b border-[#87ACA3] text-[#000000]"
            >
              {" "}
              <img src={img1} alt="" />
              <p className="ml-2">Pay with debit card</p>
            </div>
          </div>
        )}
      </div>

      <NavBar class="fixed top-0 z-[2]" />
      <div className="flex justify-between items-center mt-28 px-2 xss:px-4 xs:px-6  sm:mt-26  sm:mt-26  lg:mt-20 lg:hidden  mxl:mt-10">
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
      <div className=" 2xl:px-[10rem] xl:px-[5rem]  xss:pl-4  xss:pr-10   xs:pl-6 xs:pr-12 sm:pl-10 sm:pr-28 md:pl-8 md:pr-28 lg:px-10 w-full mt-4  lg:mt-20  mxl:pt-32">
        <div className=" justify-between items-center mxl:mt-10 hidden lg:flex">
          <button  onClick={() => navigate("/dashboard")} className=" text-sm px-[4rem] py-[0.7rem]  lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3]">
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
        <div className="flex flex-col lg:flex-row justify-between w-full sm:w-[20rem] md:w-[30rem] lg:w-full lg:pr-8 xl:pr-10 mt-4   mxl:mt-20">
          <div className="lg:w-[26rem] xl:w-[32rem] flex flex-col justify-between  h-[4rem] text-sm">
            {" "}
            <div className="flex flex-col lg:flex-row justify-between font-medium lg:mt-4">
              <p className="">Transaction ID: 1234567890987</p>
              <p className="flex  mt-4 lg:mt-0">
                <span className="mr-1"> Status:</span>{" "}
                <span className="text-[#EB4335]">Update*</span>
              </p>
            </div>
            <div className="flex  justify-between font-medium mt-4 lg:mt-6 ">
              {" "}
              <p className="d">Date: 01/01/2023 11:30am</p>
              {/* <p className="ss">Service Fee: $10</p> */}
            </div>
          </div>
          <div className="flex justify-between mt-12 w-[19rem] sm:w-[20rem] md:w-[30rem] lg:w-[30rem] pr-24 sm:mt-14 lg:mt-4">
            <span>
              <p className="text-[#175873] text-[0.59rem]">Local Currency</p>
              <span className="flex">
                <span className="relative z-0 ">
                  <select
                    type="text"
                    id="sendingcurrency"
                    className={
                      formik.errors.sendingcurrency &&
                      formik.touched.sendingcurrency
                        ? "  font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-red-500 border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                        : " font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-[#707070] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      //placeholder=" "
                    }
                    onChange={formik.handleChange}
                    value={formik.values.sendingcurrency}
                    onBlur={formik.handleBlur}
                    placeholder="receivingcountry"
                  >
                    <option value="NGN" selected>
                      NGN
                    </option>

                    <option value="Pounds">Pounds</option>
                  </select>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                </span>
                <input
                  type="number"
                  id="amountsent"
                  placeholder="00000"
                  className={
                    formik.errors.amountsent && formik.touched.amountsent
                      ? " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      : " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                  }
                  onChange={formik.handleChange}
                  value={formik.values.amountsent}
                  onBlur={formik.handleBlur}
                />
              </span>
            </span>
            <img
              src={trans}
              className="object-contain w-[1.4rem] text-[#707070] mt-6 "
            />
            <span float-left>
              <p className="text-[#175873] text-[0.59rem] ">They Receive</p>
              <span className="flex ">
                <span className="relative z-0">
                  <select
                    type="text"
                    id="receivingcurrency"
                    className={
                      formik.errors.receivingcurrency &&
                      formik.touched.receivingcurrency
                        ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] lg:rounded-r-none border-solid border-red-500 border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                        : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] lg:rounded-r-none border-solid border-[#707070] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      //placeholder=" "
                    }
                    onChange={formik.handleChange}
                    value={formik.values.receivingcurrency}
                    onBlur={formik.handleBlur}
                    placeholder="receivingcountry"
                  >
                    <option value="USD" selected>
                      USD
                    </option>

                    <option value="Pounds">Pounds</option>
                  </select>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer  text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                </span>
                <input
                  type="number"
                  id="amountReceived"
                  placeholder="00000"
                  className={
                    formik.errors.amountReceived &&
                    formik.touched.amountReceived
                      ? " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] hidden md:flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      : " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] hidden md:flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                  }
                  onChange={formik.handleChange}
                  value={formik.values.amountReceived}
                  onBlur={formik.handleBlur}
                />
              </span>
            </span>
          </div>
        </div>
        <form
          className="mb-20 mxl:mt-32"
          action=""
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col lg:flex-row gap-x-20  mt-10">
            <div className="w-full flex-col flex gap-y-8 mxl:gap-y-16">
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  id="receivername"
                  className={
                    formik.errors.receivername && formik.touched.receivername
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
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
              <div className="relative z-0 ">
                <select
                  type="text"
                  id="receivingCountry"
                  className={
                    formik.errors.receivingCountry &&
                    formik.touched.receivingCountry
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    //placeholder=" "
                  }
                  onChange={formik.handleChange}
                  value={formik.values.receivingCountry}
                  onBlur={formik.handleBlur}
                  placeholder="receivingCountry"
                >
                  <option value=""></option>

                  <option value="Canada">Canada</option>
                </select>
                <label
                  for="receivingCountry"
                  className={
                    formik.errors.receivingCountry &&
                    formik.touched.receivingCountry
                      ? "absolute top-4   -z-1 origin-0  text-xs mxl:text-sm font-poppins text-red-500  duration-300  peer-focus:text-[#009186] "
                      : "absolute top-4   -z-1 origin-0  text-xs mxl:text-sm font-poppins text-[#262626]  duration-300  peer-focus:text-[#009186] "
                  }
                >
                  Receiving Country
                </label>
                <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
                {formik.errors.receivingCountry &&
                formik.touched.receivingCountry ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receivingCountry}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
            </div>
            <div className="w-full  grid mt-5 lg:mt-0  gap-y-8 mxl:gap-y-16">
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
              <div className="relative z-0 mt-4 row-span-2">
                <textarea
                  placeholder="Enter traction description "
                  name=""
                  id="tractionDescription"
                  cols="30"
                  className={
                    formik.errors.tractionDescription &&
                    formik.touched.tractionDescription
                      ? "w-full border-red-500 placeholder:text-xs px-2 pt-2 placeholder:text-[#262626]   bg-transparent h-[6rem] rounded-lg border"
                      : "w-full border-[#262626] placeholder:text-xs px-2 pt-2 placeholder:text-[#262626]  bg-transparent h-[6rem] rounded-lg border"
                  }
                  onChange={formik.handleChange}
                  value={formik.values.tractionDescription}
                  onBlur={formik.handleBlur}
                ></textarea>

                {formik.errors.tractionDescription &&
                formik.touched.tractionDescription ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.tractionDescription}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
            </div>
          </div>

          <button
            type="submit"
            className={
              formik.values.accountName &&
              formik.values.accountNumber &&
              formik.values.bankAddress &&
              formik.values.bankName &&
              formik.values.emailAddress &&
              formik.values.iban &&
              formik.values.phoneNumber &&
              formik.values.receivername &&
              formik.values.receivingCountry &&
              formik.values.swiftCode &&
              formik.values.tractionDescription &&
              formik.values.amountReceived &&
              formik.values.amountsent
                ? "p-6 bg-[#009186] rounded-lg px-14 text-sm py-3 float-left lg:float-right mt-5 text-[#F8F8FF] font-medium"
                : "p-6 bg-[#C4C4C4]  rounded-lg px-14 text-sm py-3 float-left lg:float-right mt-5 text-[#444444] font-medium"
            }
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
