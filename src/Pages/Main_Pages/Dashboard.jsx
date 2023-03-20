import React, { useEffect, useState } from "react";

import { RiNotification2Fill } from "react-icons/ri";
import DashNav from "../../Components/DashBoardComponents/DashNav";
import bell from "../assets/bell.svg";
import { GrSearch } from "react-icons/gr";
import search from "../assets/search.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import card from "../assets/carddash.png";
import { BiTransfer } from "react-icons/bi";
import caller from "../assets/Dashboard/caller.svg";
import cardformobilescreen from "../assets/Dashboard/mobilecard.svg";
import axios from "axios";
import { baseurl } from "../../Service/validate_and_api";
import { BsFillCalendar2Fill } from "react-icons/bs";
import DatePicker from "react-datepicker";
import { RiCloseCircleFill } from "react-icons/ri";

const Dashboard = () => {
  const [first, setfirst] = useState("");
  const [trans, Settrans] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [date, setdate] = useState(false);
  const [openDate, setopenDate] = useState(false);
  const [buttons, setbuttons] = useState(false);
  const [beneficiaries, setbeneficiaries] = useState(false);
  useEffect(() => {
    axios
      .get(`${baseurl}/transactions/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        Settrans(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="font-poppins bg-[#F8F8FF] overflow-y-hidden">
      <div
        onClick={() => setbeneficiaries(false)}
        className={
          beneficiaries
            ? `absolute h-screen  w-full top-0 bg-[#262626]/[0.8] z-[90] sm:flex items-center justify-center hidden`
            : "hidden"
        }
      >
        <div className="relative xl:w-[30rem] mxl:w-[40rem] sm:h-[30rem] sm:w-[30rem] md:h-[35rem] md:w-[33rem] mxl:h-[40rem]  xl:h-[29rem] bg-[#DAF2F1] rounded-lg px-3 flex  flex-col justify-between py-4 mxl:py-10  ">
          <RiCloseCircleFill
            onClick={() => setbeneficiaries(false)}
            className="absolute top-3 right-4 cursor-pointer text-[#009186] text-xl "
          />
          <p className="text-[#262626] font-semibold text-center text-lg mt-5">
            Beneficiaries
          </p>
          <div className="   h-[86%]  overflow-auto mt-5 px-8 bg-">
            <div className="h-[6rem] border-2 border-[#009186] rounded-lg bg-white mt-5 text-base  justify-between pt-5 pb-3 px-2 flex flex-col">
              <p className="text-[#175873] font-semibold">Beneficiary Name</p>
              <div className="flex font-[#262626] text-xs">
                <p className="mr-4">JPMorgan Chase Bank</p>
                <p>12345678901234</p>
              </div>
            </div>
            <div className="h-[6rem] border-2 border-[#009186] rounded-lg bg-white mt-5 text-base  justify-between pt-5 pb-3 px-2 flex flex-col">
              <p className="text-[#175873] font-semibold">Beneficiary Name</p>
              <div className="flex font-[#262626] text-xs">
                <p className="mr-4">JPMorgan Chase Bank</p>
                <p>12345678901234</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DashNav class="fixed top-0 w-full z-[30]" />
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
                  className="w-[12rem] sm:w-[26rem] lg:w-fit  pl-3 lg:pr-[5rem] xl:pr-[10rem] py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid
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
                <DatePicker
                  open={openDate}
                  className="w-[5rem] xs:w-[7rem] sm:w-[8rem] md:w-[10rem] lg:w-full px-2  py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid"
                  placeholderText="Date range"
                  selected={startDate}
                  onInputClick={() => setopenDate(!openDate)}
                  onChange={(date) => setStartDate(date)}
                  onClickOutside={() => setopenDate(!openDate)}
                />
                <BsFillCalendar2Fill
                  onClick={() => setopenDate(!openDate)}
                  className="text-[#009186] inset-y-4 absolute right-3 bg-white"
                />
              </div>
            </div>

            <div className="bg-[#DAF2F1]   overflow-auto rounded-lg w-full h-[20rem] sm:h-[30rem] lg:h-[22.6rem] mxl:h-[42.8rem] mt-8 px-4 border-[#009186]">
              {trans.map((arr, i) => (
                <div className="rounded-lg lg:py-1 lg:px-[0.24rem]   flex flex-col justify-between border-2 border-[#009186] text-sm mt-8 bg-[#F8F8FF] px-3  xl:px-3  py-1 min-h-[12rem] sm:min-h-[7rem]">
                  <span className="hidden sm:flex items-center justify-between mt-2">
                    <p className=" text-[#175873] text-xs">
                      01/01/2023 11:30am
                    </p>
                    <p className="text-[#175873] font-semibold">
                      Lorem Ipsum University, London{" "}
                    </p>
                    <p className="text-[#175873] font-semibold">
                      ${arr.amountReceived}
                    </p>
                  </span>
                  <div className="hidden  sm:flex  w-full justify-between items-center ">
                    <p className="text-xs">JPMorgan Chase Bank</p>
                    <p className="text-xs">12345678901234</p>
                    <p className="text-[#F8F8FF]">12345678901234</p>
                  </div>
                  <span className="hidden sm:flex text-xs justify-between items-center">
                    <p className={`text-[#FBBC05]`}>{arr.status}</p>
                    <p className="text-[#262626] ">{arr.paymentMethod}</p>
                    <p className="text-[#009186] ">see more</p>
                  </span>
                  {/* FOR MOBILE SCREEN */}
                  <span className="text-[#175873] flex sm:hidden mt-3">
                    01/01/2023 11:30am
                  </span>
                  <span className="text-[#175873] font-semibold flex sm:hidden  justify-between">
                    <p>Lorem Ipsum University, London </p>
                    <p> ${arr.amountReceived}</p>
                  </span>
                  <span className="flex sm:hidden text-xs justify-between text-[#262626]">
                    <p className="ss">JPMorgan Chase Bank</p>
                    <p>12345678901234</p>
                    <p className="text-white text-xs">Cw224</p>
                  </span>
                  <span className="flex sm:hidden justify-between text-xs">
                    <p className="text-[#FBBC05]">{arr.status}</p>
                    <p className="ss">{arr.paymentMethod}</p>
                    <p className="text-white text-xs">Card Payment</p>
                  </span>
                  <p className="flex sm:hidden text-[#009186] text-xs">
                    see more
                  </p>
                  {/* The end for the Mobile screen */}
                </div>
              ))}
            </div>
          </div>
          {/* for the second part */}
          <div className="mt-10 ">
            <div className="relative  z-[10] w-full h-[12rem] sm:h-[14rem]  md:h-[15rem] mxl:w-[35rem] lg:h-[9.9rem] mxl:h-[15rem] flex sm:items-center justify-between rounded-2xl sm:rounded-3xl bg-[#87ACA3] pl-3 sm:pl-8 lg:pl-5">
              <span className=" sm:w-[18rem] lg:w-[16rem] mxl:w-[18rem] mt-5 sm:mt-0">
                <p className="text-white text-sm sm:text-lg lg:text-sm sm:font-medium mxl:text-lg ">
                  International transactions has never been easier
                </p>
                <button
                  onClick={() => setbuttons(!buttons)}
                  className="px-[1rem] py-[0.6rem]   sm:px-[3rem] sm:py-[0.7rem] lg:px-[2rem] lg:py-[0.6rem] mt-8 text-xs sm:mt-6 sm:text-sm rounded-lg text-white bg-[#009186] flex items-center"
                >
                  Send Money
                  <RiArrowDownSLine className="text-xl ml-2 " />
                </button>
                <div
                  className={
                    buttons
                      ? ` duration-700 ease-in-out  bg-[#F8F8FF] shadow h-[8rem] sm:h-[9rem] sm:mb-[-9rem] md:h-[10rem] md:mb-[-10rem] xl:h-[9rem]   xl:mb-[-9rem] mxl:mb-[-12.9rem]  sm:w-[17rem]  mxl:h-[13rem] mxl:w-[17rem] flex justify-around flex-col px-4  rounded-lg left-1  `
                      : " hidden "
                  }
                >
                  <button
                    onClick={() => setbeneficiaries(true)}
                    className="px-[1rem] py-[0.5rem] text-xs sm:text-base sm:py-[0.6rem]  md:py-[0.5rem] lg:py-[0.5rem] mxl:py-[0.8rem] w-full  rounded-lg text-[#009186] border-2 font-semibold border-[#009186]"
                  >
                    Saved Beneficiary
                  </button>
                  <button
                    onClick={() => setbuttons(false)}
                    className="px-[1rem] py-[0.5rem] text-xs sm:text-base sm:py-[0.6rem]  md:py-[0.5rem] lg:py-[0.5rem] mxl:py-[0.8rem] w-full  rounded-lg text-[#009186] border-2 font-semibold border-[#009186]"
                  >
                    New Receiver
                  </button>
                </div>
              </span>
              <img
                src={card}
                alt=""
                className="object-contain sm:block hidden  sm:w-[17rem] md:w-[18rem] lg:w-[12rem] mxl:w-[18rem]  mxl:mt-[-2.7rem]  sm:mt-[-2.4rem]  md:mt-[-2.7rem] lg:mt-[-1.6rem] mr-[-0.3rem]"
              />
              <img
                src={cardformobilescreen}
                alt=""
                className="sm:hidden object-contain w-[10rem] mt-[1rem]"
              />
            </div>
            <div className="bg-[#C4C4C4] px-3 sm:px-6  mt-10 rounded-lg h-[15rem]  sm:h-[15rem] lg:h-[13rem]  mxl:h-[16rem] mxl:mt-[6rem] py-2 mxl:py-5 relative">
              <div className="w-full px-4">
                <div className=" mx-auto sm:mx-0 sm:w-full text-[#707070] font-semibold bg-white py-3 sm:py-4 lg:py-3 text-center flex justify-center items-center rounded-lg mt-4 lg:mt-3">
                  FX Rates Today
                </div>
              </div>
              <div className=" flex items-center justify-between mt-5 sm:mt-6   lg:mt-4 mxl:mt-8">
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      value="NGN"
                      className={
                        " font-poppins pl-1 sm:pl-3 pb-0 h-[52px] w-[3.8rem] sm:w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-r-none  sm:border-r-2 border-r-2 appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="NGN" disabled>
                        NGN
                      </option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-xl sm:text-4xl absolute  inset-y-7  sm:inset-y-5 right-0 flex items-center pr-1 sm:px-2 text-[#707070]" />
                  </span>
                  <input
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    disabled
                    className={
                      " font-poppins spin-button-none  pl-1 sm:pl-3 pb-0 h-[52px] w-[3.5rem] sm:w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-l-none border-l-0 sm:border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    }
                  />
                </span>
                <BiTransfer className="text-3xl text-[#F8F8FF] mt-4 sm:mt-6" />
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      value="NGN"
                      className={
                        " font-poppins pl-1 sm:pl-3 pb-0 h-[52px] w-[3.8rem] sm:w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-r-none border-r-2 sm:border-r-2 appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="NGN" disabled>
                        NGN
                      </option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-xl sm:text-4xl absolute  inset-y-7  sm:inset-y-5 right-0 flex items-center pr-1 sm:px-2 text-[#707070]" />
                  </span>
                  <input
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    disabled
                    className={
                      " font-poppins spin-button-none  pl-1 sm:pl-3 pb-0 h-[52px] w-[3.5rem] sm:w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[2px] sm:border-[4px] rounded-l-none border-l-0 sm:border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
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
