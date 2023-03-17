import React, { useState } from "react";

import { RiNotification2Fill } from "react-icons/ri";
import DashNav from "../Components/DashBoardComponents/DashNav";
import bell from "../assets/bell.svg";
import { GrSearch } from "react-icons/gr";
import search from "../assets/search.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import card from "../assets/carddash.png";
import { BiTransfer } from "react-icons/bi";
import caller from "../assets/Dashboard/caller.svg";
import cardformobilescreen from "../assets/Dashboard/mobilecard.svg";

const Dashboard = () => {
  const [first, setfirst] = useState("");
  return (
    <div className="font-poppins bg-[#F8F8FF]">
      <DashNav class="fixed top-0 w-full" />
      <div className="2xl:px-[10rem] xl:px-[5rem]  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-20   flex flex-col justify-center items-center gap-y-8 pb-8   lg:px-10 mt-20 mxl:pt-20">
        <span
          onClick={() => alert("Notification")}
          className=" text-[#009186] self-end items-center cursor-pointer hidden lg:flex "
        >
          <img
            src={bell}
            alt=""
            className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
          />
          <p className="font-semibold mxl:text-xl">Notifications</p>
        </span>
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

        <div className="flex  lg:flex-row flex-col-reverse w-full justify-between mxl:pt-20">
          <div className=" mt-10 lg:w-[27rem] xl:w-[34rem]">
            <span className="flex justify-between sm:justify-start">
              <p className="text-[#175873] font-medium text-xs sm:text-base ">
                Recent Transactions
              </p>
              <p className="text-[#009186] sm:ml-[10rem] lg:ml-[5rem] text-sm">
                Beneficiaries
              </p>
            </span>

            <div className="flex items-center mt-5 lg:mt-8 sm:w-full  justify-between lg:w-fit">
              <div className="relative  ">
                <input
                  type="text"
                  className="sm:w-[26rem] lg:w-fit  pl-3 lg:pr-[5rem] xl:pr-[10rem] py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid
            "
                  placeholder="Search transcations"
                />
                <img
                  src={search}
                  alt=""
                  className="object-contain w-[1.3rem] absolute inset-y-3 right-[1.2rem]"
                />
              </div>
              <div className="relative lg:ml-8">
                <input
                  type="text"
                  className="w-[5rem] sm:w-[8rem] md:w-[10rem] lg:w-full px-2  py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid
            "
                  placeholder="Search date"
                />
              </div>
            </div>

            <div className="bg-[#DAF2F1] overflow-auto rounded-lg w-full sm:h-[30rem] lg:h-[22.6rem] mxl:h-[42.8rem] mt-8 px-4 border-[#009186]">
              <div className="rounded-lg flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3 py-1 h-[6rem]">
                <span className=" flex justify-between">
                  <p>01/01/2023 11:30am</p>
                  <p>Lorem Ipsum University, London </p>
                  <p>$ 2,000</p>
                </span>
                <div className=" flex w-full">
                  <p className="mr-8">JPMorgan Chase Bank</p>
                  <p className="self-center">12345678901234</p>
                  {/* <p className="">12345678901234</p> */}
                </div>
                <span className="flex justify-between">
                  <p className="text-[#FBBC05]">Inprogress</p>
                  <p className="text-[#262626]">Card Payment</p>
                  <p className="text-[#009186]">see more</p>
                </span>
              </div>
              <div className="rounded-lg flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3 py-1 h-[6rem]">
                <span className=" flex justify-between">
                  <p>01/01/2023 11:30am</p>
                  <p>Lorem Ipsum University, London </p>
                  <p>$ 2,000</p>
                </span>
                <div className=" flex w-full">
                  <p className="mr-8">JPMorgan Chase Bank</p>
                  <p className="self-center">12345678901234</p>
                  {/* <p className="">12345678901234</p> */}
                </div>
                <span className="flex justify-between">
                  <p className="text-[#FBBC05]">Inprogress</p>
                  <p className="text-[#262626]">Card Payment</p>
                  <p className="text-[#009186]">see more</p>
                </span>
              </div>
              <div className="rounded-lg flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3 py-1 h-[6rem]">
                <span className=" flex justify-between">
                  <p>01/01/2023 11:30am</p>
                  <p>Lorem Ipsum University, London </p>
                  <p>$ 2,000</p>
                </span>
                <div className=" flex w-full">
                  <p className="mr-8">JPMorgan Chase Bank</p>
                  <p className="self-center">12345678901234</p>
                  {/* <p className="">12345678901234</p> */}
                </div>
                <span className="flex justify-between">
                  <p className="text-[#FBBC05]">Inprogress</p>
                  <p className="text-[#262626]">Card Payment</p>
                  <p className="text-[#009186]">see more</p>
                </span>
              </div>
              <div className="rounded-lg flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3 py-1 h-[6rem]">
                <span className=" flex justify-between">
                  <p>01/01/2023 11:30am</p>
                  <p>Lorem Ipsum University, London </p>
                  <p>$ 2,000</p>
                </span>
                <div className=" flex w-full">
                  <p className="mr-8">JPMorgan Chase Bank</p>
                  <p className="self-center">12345678901234</p>
                  {/* <p className="">12345678901234</p> */}
                </div>
                <span className="flex justify-between">
                  <p className="text-[#FBBC05]">Inprogress</p>
                  <p className="text-[#262626]">Card Payment</p>
                  <p className="text-[#009186]">see more</p>
                </span>
              </div>
              <div className="rounded-lg flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3 py-1 h-[6rem]">
                <span className=" flex justify-between">
                  <p>01/01/2023 11:30am</p>
                  <p>Lorem Ipsum University, London </p>
                  <p>$ 2,000</p>
                </span>
                <div className=" flex w-full">
                  <p className="mr-8">JPMorgan Chase Bank</p>
                  <p className="self-center">12345678901234</p>
                  {/* <p className="">12345678901234</p> */}
                </div>
                <span className="flex justify-between">
                  <p className="text-[#FBBC05]">Inprogress</p>
                  <p className="text-[#262626]">Card Payment</p>
                  <p className="text-[#009186]">see more</p>
                </span>
              </div>
              <div className="rounded-lg flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3 py-1 h-[6rem]">
                <span className=" flex justify-between">
                  <p>01/01/2023 11:30am</p>
                  <p>Lorem Ipsum University, London </p>
                  <p>$ 2,000</p>
                </span>
                <div className=" flex w-full">
                  <p className="mr-8">JPMorgan Chase Bank</p>
                  <p className="self-center">12345678901234</p>
                  {/* <p className="">12345678901234</p> */}
                </div>
                <span className="flex justify-between">
                  <p className="text-[#FBBC05]">Inprogress</p>
                  <p className="text-[#262626]">Card Payment</p>
                  <p className="text-[#009186]">see more</p>
                </span>
              </div>
            </div>
          </div>
          {/* for the second part */}
          <div className="mt-10">
            <div className="w-full h-[14rem] sm:h-[14rem]  md:h-[15rem] mxl:w-[35rem] lg:h-[9.9rem] mxl:h-[15rem] flex items-center justify-between rounded-3xl bg-[#87ACA3] sm:pl-8 lg:pl-5">
              <span className="sm:w-[18rem] lg:w-[16rem] mxl:w-[18rem]">
                <p className="text-white sm:text-lg lg:text-sm font-medium mxl:text-lg ">
                  International transactions has never been easier
                </p>
                <button className="px-[3rem] py-[0.7rem] lg:px-[2rem] lg:py-[0.6rem] mt-6 text-sm rounded-lg text-white bg-[#009186] flex items-center">
                  Send Money
                  <RiArrowDownSLine className="text-xl ml-2" />
                </button>
              </span>
              <img
                src={card}
                alt=""
                className="object-contain sm:block hidden  sm:w-[17rem] md:w-[18rem] lg:w-[12rem] mxl:w-[18rem]  mxl:mt-[-2.7rem]  sm:mt-[-2.4rem]  md:mt-[-2.7rem] lg:mt-[-1.6rem] mr-[-0.3rem]"
              />
              <img src={cardformobilescreen} alt="" className="sm:hidden" />
            </div>
            <div className="bg-[#C4C4C4] px-3 sm:px-6  mt-10 rounded-lg h-[15rem]  sm:h-[15rem] lg:h-[13rem]  mxl:h-[16rem] mxl:mt-[6rem] py-2 mxl:py-5 relative">
              <div className="w-[20rem] mx-auto sm:mx-0 sm:w-full text-[#707070] font-semibold bg-white py-3 sm:py-4 lg:py-3 text-center flex justify-center items-center rounded-lg mt-4 lg:mt-3">
                FX Rates Today
              </div>
              <div className=" flex items-center justify-between mt-5 sm:mt-6   lg:mt-4 mxl:mt-8">
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      value="NGN"
                      className={
                        " font-poppins pl-3 pb-0 h-[52px] w-[4.6rem] sm:w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-r-none border-r-2 appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="NGN" disabled>
                        NGN
                      </option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                  </span>
                  <input
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    disabled
                    className={
                      " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[4rem] sm:w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    }
                  />
                </span>
                <BiTransfer className="text-3xl text-[#F8F8FF] mt-4 sm:mt-6" />
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      value="USD"
                      className={
                        " font-poppins pl-3 pb-0  h-[52px] w-[4.6rem] sm:w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="USD" disabled>
                        USD
                      </option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                  </span>
                  <input
                    disabled
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    className={
                      " font-poppins spin-button-none  pl-3 pb-0  h-[52px] w-[4rem] sm:w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                    }
                  />
                </span>
              </div>
              <div className="bg-[#175873] text-[#F8F8FF] py-3 px-6 lg:py-2  lg:px-5 font-medium  text-sm mxl:px-10 mxl:py-4  rounded-b-lg rounded-tl-lg  absolute right-0 bottom-0">
                COMING SOON
              </div>
            </div>

            <button className="py-2  hidden  mxl:py-[12px] mxl:text-xl  lg:flex text-sm   mxl:mt-[6rem] justify-center items-center text-[#009186] mt-9   rounded-lg border-2 border-[#009186] w-full ">
              Customer Support
              <img src={caller} alt="" className="ml-2 mxl:w-[2.8rem]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
