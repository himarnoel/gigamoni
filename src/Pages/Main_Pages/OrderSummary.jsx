import React, { useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { BiTransfer } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Formik, useFormik } from "formik";
import { baseurl, pendingValidate } from "../../Service/validate_and_api";
import { useRef } from "react";
import img1 from "../../assets/overlayimage/one.svg";
import img2 from "../../assets/overlayimage/vector.svg";
import trans from "../../assets/overlayimage/iconic.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { RingLoader } from "react-spinners";
import axios from "axios";
import { useEffect } from "react";
import DashNav from "../../Components/DashBoardComponents/DashNav";
const OrderSummary = () => {
  let location = useLocation();
  const [bool, setbool] = useState(false);
  const [checkmobile, setcheckmobile] = useState(false);
  const [load, setload] = useState(false);
  const safeDocument = typeof document !== "undefined" ? document : {};
  const scrollBlocked = useRef();
  const html = safeDocument.documentElement;
  const { body } = safeDocument;
  const navigate = useNavigate();
  const token = localStorage.getItem("LoggedIntoken");
  const blockScroll = () => {
    window.scrollTo({ top: 0, left: 0 });
    html.style.overflow = "hidden";
  };
  const allowScroll = () => {
    window.scrollTo({ top: 0, left: 0 });
    html.style.overflow = "";
  };

  const closePayMethod = () => {
    setbool(false);
    allowScroll();
  };

  const formik = useFormik({
    initialValues: {
      receivername: location.state.receivername,
      bankName: location.state.bankName,
      phoneNumber: location.state.phoneNumber,
      bankAddress: location.state.bankAddress,
      emailAddress: location.state.emailAddress,
      iban: location.state.iban,
      accountName: location.state.accountName,
      swiftCode: location.state.swiftCode,
      accountNumber: location.state.accountNumber,
      receivingCountry: location.state.receivingCountry,
      tractionDescription: location.state.tractionDescription,
      receivingcurrency: location.state.receivingcurrency,
      sendingcurrency: location.state.sendingcurrency,
      amountsent: location.state.amountsent,
      amountReceived: location.state.amountReceived,
    },
    validationSchema: pendingValidate,
    onSubmit: (values) => {
      if (checkmobile) {
        navigate("/pay", { state: values });
      } else {
        console.log(values);
        blockScroll();
        setbool(true);
      }
    },
  });
  const payWithTransfer = () => {
    console.log(token);
    blockScroll();
    setload(true);

    axios
      .post(
        `${baseurl}/transactions/`,
        {
          beneficiary: false,
          receiverName: formik.values.receivername,
          receiverEmail: formik.values.emailAddress,
          receiverPhone: formik.values.phoneNumber,
          receiverAcctName: formik.values.accountName,
          receiverAcctNo: formik.values.accountNumber,
          receiverBankName: formik.values.bankName,
          receiverBankAddress: formik.values.bankAddress,
          receiverIban: formik.values.iban,
          receiverSwiftCode: formik.values.swiftCode,
          receiverCountry: formik.values.receivingCountry,
          currencySent: formik.values.sendingcurrency,
          currencyReceived: formik.values.receivingcurrency,
          amountReceived: formik.values.amountReceived,
          description: formik.values.tractionDescription,
          paymentMethod: "payWithTransfer",
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        allowScroll();
        setload(false);
        navigate("/dashboard");
      })
      .catch((e) => {
        setload(false);
        console.log(e);
        allowScroll();
      });
  };

  const payWithCard = () => {
    allowScroll();
    setload(true);
    blockScroll();
    axios
      .post(
        `${baseurl}/transactions/`,
        {
          beneficiary: false,
          receiverName: formik.values.receivername,
          receiverEmail: formik.values.emailAddress,
          receiverPhone: formik.values.phoneNumber,
          receiverAcctName: formik.values.accountName,
          receiverAcctNo: formik.values.accountNumber,
          receiverBankName: formik.values.bankName,
          receiverBankAddress: formik.values.bankAddress,
          receiverIban: formik.values.iban,
          receiverSwiftCode: formik.values.swiftCode,
          receiverCountry: formik.values.receivingCountry,
          currencySent: formik.values.sendingcurrency,
          currencyReceived: formik.values.receivingcurrency,
          amountReceived: formik.values.amountReceived,
          description: formik.values.tractionDescription,
          paymentMethod: "payWithCard",
        },
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        allowScroll();
        setload(false);
        navigate("/dashboard");
      })
      .catch((e) => {
        setload(false);
        console.log(e);
      });
  };
  return (
    <div className="font-poppins  min-h-full over  ">
      <DashNav class="fixed  top-0 z-[10]" />

      <div
        className={
          load
            ? "absolute top-0   bg-[#262626]/[0.8]   z-[90] h-screen w-full flex  justify-center items-center text-3xl"
            : "hidden"
        }
      >
        <RingLoader color="#009186" size={90} />
      </div>

      <div
        onClick={() => closePayMethod()}
        className={
          bool
            ? "absolute top-0   bg-[#262626]/[0.8]   z-[90] h-screen w-full flex  justify-center items-center"
            : "hidden"
        }
      > 
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
      </div>
      <div className="w-full pt-32 lg:pt-20 mxl:pt-32 ">
        <p className="text-[#175873] text-lg sm:text-3xl font-semibold  text-center">
          Order Summary
          {}
        </p>
        <p className="text-center text-sm sm:text-lg font-semibold mt-7">
          You are all set, Kindly confirm your details before proceeding.{" "}
        </p>
        <div className="flex flex-col lg:flex-row justify-between w-full  xss:pl-4  xss:pr-10   xs:pl-6 xs:pr-12 sm:px-10 md:pl-8 md:pr-28  lg:px-10  mt-8 mxl:mt-20  ">
          <div className=" sm:w-[32rem] flex flex-col justify-between  ">
            {" "}
            <div className="flex justify-between font-medium  text-sm  mt-4 lg:mt-0 ">
              Transaction ID: 1234567890987
            </div>
            <div className="flex justify-between font-medium  text-sm mt-4 lg:mt-0">
              {" "}
              {/* <p className="d">Date: 01/01/2023 11:30am</p> */}
              <p className="ss">Service Fee: $10</p>
            </div>
          </div>
          {/* dddd */}
          <div className="flex  flex-row-reverse   justify-between items-center mt-12 w-[19rem] sm:w-[20rem] md:w-[30rem] lg:w-[27rem] sm:mt-14 lg:mt-4">
            <span>
              <p className="text-[#175873] text-[0.59rem] ">Local Currency</p>
              <span className="flex mr-4">
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
          {/* dffasdas */}
        </div>
      </div>
      <form
        className="mb-20 mxl:mt-32 xss:pl-4  xss:pr-10   xs:pl-6 xs:pr-12 sm:px-10 md:pl-8 md:pr-28  lg:px-10 "
        action=""
        onSubmit={formik.handleSubmit}
      >
        <div className=" flex-col lg:flex-row flex gap-x-20  mt-10">
          <div className="w-full flex-col flex gap-y-8 mxl:gap-y-16">
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
          <div className="w-full  grid  gap-y-8 mxl:gap-y-16 mt-5 lg:mt-0">
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
                disabled
                id="tractionDescription"
                cols="30"
                className={
                  formik.errors.tractionDescription &&
                  formik.touched.tractionDescription
                    ? "w-full border-red-500 placeholder:text-xs px-2 pt-2 placeholder:text-[#262626]  bg-transparent h-[6rem] rounded-lg border"
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
        <div className="w-full lg:flex  lg:justify-between lg:items-center">
          <button
            onClick={() => navigate("/pending")}
            className="p-6 hidden lg:block bg-[#87ACA3] rounded-lg px-14 text-sm py-3 float-right mt-5 text-[#262626] font-medium"
          >
            Back
          </button>

          <button
            type="submit"
            // onClick={() => blockScroll()}
            className="p-6 bg-[#009186] hidden lg:block rounded-lg px-14 text-sm py-3 float-right mt-5 text-[#F8F8FF] font-medium"
          >
            Pay Now
          </button>
        </div>
        <button
          type="submit"
          onClick={() => setcheckmobile(true)}
          className="p-6 bg-[#009186] mr-[-1.6rem] lg:hidden rounded-lg px-14 text-sm py-3 float-right mt-5 text-[#F8F8FF] font-medium"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default OrderSummary;
