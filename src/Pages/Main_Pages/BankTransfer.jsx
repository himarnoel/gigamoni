import React, { useState } from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { BiTransfer } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Formik, useFormik } from "formik";
import {
  pendingValidate,
  updateValidate,
} from "../../Service/validate_and_api";
import trans from "../../assets/overlayimage/iconic.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import DashNav from "../../Components/DashBoardComponents/DashNav";
const BankTransfer = () => {
  const [items, setItems] = useState({});
  const [fileName, setfileName] = useState("");
  const navigate = useNavigate();
  const [transaction, settransaction] = useState("");
  const { state } = useLocation();
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/login");
    } else {
      const upload = JSON.parse(localStorage.getItem("filetoupload"));
      if (upload) {
        setItems(upload);
        setfileName(upload.fileName);
      }
      settransaction(state.transactionID);
      formik.setValues({
        receivername: state.receiverAcctName,
        bankName: state.receiverBankName,
        phoneNumber: state.receiverPhone,
        bankAddress: state.receiverBankAddress,
        emailAddress: state.receiverEmail,
        iban: state.receiverIban,
        accountName: state.receiverAcctNo,
        swiftCode: state.receiverSwiftCode,
        accountNumber: state.receiverAcctNo,
        receivingCountry: state.receiverCountry,
        tractionDescription: state.description,
        amountsent: state.amountSent,
        amountReceived: state.amountReceived,
        receivingcurrency: state.currencyReceived,
        sendingcurrency: state.currencySent,
      });
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
      receivingCountry: "",
      tractionDescription: "",
      receivingcurrency: "USD",
      sendingcurrency: "NGN",
      amountsent: "",
      amountReceived: "",
    },
    validationSchema: updateValidate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  return (
    <div className=" font-poppins">
      <DashNav class="top-0 fixed z-[20]" />
      <div className=" pt-32 mxl:pt-32 2xl:px-[10rem] xl:px-[5rem] lg:px-10  px-2 xss:px-4 xs:px-6 sm:px-8 md:px-8 ">
        <div className="flex justify-between items-center ">
          <button
            onClick={() => navigate("/dashboard")}
            className="p-6 bg-[#87ACA3] rounded-md px-20 text-sm py-3 float-right  text-[#262626] font-medium"
          >
            Back
          </button>
          <img
            onClick={() => navigate("/mobileviewofnotification")}
            src={bell}
            alt=""
            className="object-contain w-[1.6rem] sm:w-[2.3rem] md:w-[2.5rem] lg:hidden "
          />
          <div
            onClick={() => alert("Notification")}
            className=" text-[#009186] items-center cursor-pointer hidden lg:flex  "
          >
            <img
              src={bell}
              alt=""
              className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
            />
            <p className="font-semibold mxl:text-xl">Notifications</p>
          </div>
        </div>
        <div className="flex  sm:flex-row flex-col w-full md:w-fit lg:w-full justify-between items-center font-medium text-sm">
          <div className="flex flex-col w-full sm:w-fit  ">
            <div className="flex flex-col md:flex-row ">
              <p className="pr-8 mt-6">Transaction ID :{transaction}</p>
              <p className="flex mt-6">
                <p> Status:</p>
                <p className="text-[#FBBC05] ml-1"> In progress</p>
              </p>
            </div>
            <div className="flex flex-col  lg:flex-row  lg:w-full mt-6 md:mt-2 lg:mt-8">
              <p className=" md:pr-0 lg:pr-8 ">
                Date: {state.transactionCreatedDate}
              </p>
              <p className="md:mt-2 lg:mt-0 mt-6">
                Mode of payment: Bank Transfer
              </p>
            </div>
          </div>
          <div className="flex flex-col text-sm font-semibold w-full sm:w-fit">
            <p className="text-[#262626] flex mt-6 sm:mt-4">
              <p> Proof of payment status:</p>
              {!Object.keys(items).length == 0 ? (
                <p className="text-[#00913E]  sm:ml-2 ">Uploaded</p>
              ) : (
                <p className="text-[#D80010]  sm:ml-2 "> Not uploaded</p>
              )}
            </p>

            {!Object.keys(items).length == 0 ? (
              <div className="rounded-lg flex justify-center items-center py-3 px-10 font-normal sm:ml-4 mt-6 sm:mt-6 text-[#87ACA3] border-2 border-[#87ACA3]">
                {fileName}
              </div>
            ) : (
              <p
                onClick={() => navigate("/upload", { state: { transaction } })}
                className="sm:ml-4 mt-6 text-[#009186] sm:mt-6 cursor-pointer"
              >
                Upload proof of payment
              </p>
            )}
          </div>
        </div>

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
                      ? " font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center  shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-red-500 border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      : " font-poppins pl-3  pb-0 h-[52px] w-[85px] flex justify-center items-center  shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-[#707070] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
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

                  
                </select>
                <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
              </span>
              <input
                type="number"
                id="amountsent"
                disabled
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
                      ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] lg:rounded-r-none border-r  border-solid border-red-500 border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] lg:rounded-r-none border-r  border-solid border-[#707070] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
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

              
                </select>
                <RiArrowDownSLine className="pointer-events-none cursor-pointer  text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
              </span>
              <input
                type="number"
                id="amountReceived"
                disabled
                placeholder="00000"
                className={
                  formik.errors.amountReceived && formik.touched.amountReceived
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

        <form
          className="mb-24 mxl:mt-[7rem] sm:px-6  md:px-8 lg:px-20"
          action=""
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-col lg:flex-row gap-x-20  mt-10">
            <div className="w-full flex-col flex gap-y-8 mxl:gap-y-16">
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  id="receivername"
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
            <div className="w-full mt-2 md:mt-5 lg:mt-0 grid   gap-y-8 mxl:gap-y-16">
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  id="bankName"
                  disabled
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
                  disabled
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
                  disabled
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
                  disabled
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
              <div className="relative z-0  row-span-2">
                <textarea
                  placeholder="Enter transaction description "
                  name=""
                  id=""
                  cols="30"
                  className={
                    formik.errors.tractionDescription &&
                    formik.touched.tractionDescription
                      ? "w-full placeholder:text-xs px-2 pt-2 placeholder:text-[#262626] border-red-500  focus:border-[#009186]  bg-transparent h-[6rem] rounded-lg border"
                      : "w-full placeholder:text-xs px-2 pt-2 placeholder:text-[#262626] border-[#262626]  focus:border-[#009186]  bg-transparent h-[6rem] mxl:h-[9rem] rounded-lg border"
                  }
                  value={formik.values.tractionDescription}
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
          <button className="p-6 border-2 border-[#009186] rounded-lg px-14 text-sm py-3 float-left md:ml-[-3rem] xl:ml-[-6rem] mxl:ml-[-5rem] mt-8 mxl:mt-16 text-[#009186] font-medium">
            Initiate Dispute
          </button>
        </form>
      </div>
    </div>
  );
};

export default BankTransfer;
