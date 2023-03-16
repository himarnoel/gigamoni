import React, { useState } from "react";

import { RiNotification2Fill } from "react-icons/ri";
import DashNav from "../Components/DashBoardComponents/DashNav";
import bell from "../assets/bell.svg";
import { GrSearch } from "react-icons/gr";
import search from "../assets/search.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import card from "../assets/carddash.png";
import { BiTransfer } from "react-icons/bi";

const Dashboard = () => {
  const [first, setfirst] = useState("");
  return (
    <div className="font-poppins bg-[#F8F8FF]">
      <DashNav class="fixed top-0 w-full" />
      <div className="2xl:px-[10rem] xl:px-[5rem] lg:px-10 mt-20">
        <span
          onClick={() => alert("Notification")}
          className="flex text-[#009186] float-right items-center cursor-pointer"
        >
          <img src={bell} alt="" className="object-contain w-[1.6rem] mr-3" />
          <p className="font-semibold">Notifications</p>
        </span>

        <div className="flex w-full justify-between">
          <div className=" mt-10">
            <span className="flex">
              <p className="text-[#175873] font-medium text-base ">
                Recent Transactions
              </p>
              <p className="text-[#009186] ml-[5rem] text-sm">Beneficiaries</p>
            </span>

            <div className="flex items-center mt-8">
              <div className="relative ">
                <input
                  type="text"
                  className=" pl-3 pr-[10rem] py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid
            "
                  placeholder="Search transcations"
                />
                <img
                  src={search}
                  alt=""
                  className="object-contain w-[1.3rem] absolute inset-y-3 right-[1.2rem]"
                />
              </div>
              <div className="relative ml-8">
                <input
                  type="text"
                  className="w-[11rem] px-2  py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid
            "
                  placeholder="Search date"
                />
              </div>
            </div>
          </div>
          {/* for the secon part */}
          <div className="mt-10">
            <div className="w-[29rem] h-[9.9rem] flex items-center justify-between rounded-3xl bg-[#87ACA3] pl-5">
              <span className="w-[16rem]">
                <p className="text-white text-sm font-medium ">
                  International transactions has never been easier
                </p>
                <button className="px-[2rem] py-[0.6rem] mt-6 text-sm rounded-lg text-white bg-[#009186] flex items-center">
                  Send Money
                  <RiArrowDownSLine className="text-xl ml-2" />
                </button>
              </span>
              <img
                src={card}
                alt=""
                className="object-contain w-[12rem] mt-[-1.6rem] mr-[-0.3rem]"
              />
            </div>
            <div className="bg-[#C4C4C4] px-3 mt-20 rounded-lg py-10">
              <div className="w-full text-[#707070] font-semibold bg-white py-2 text-center rounded-lg">
                FX Rates Today
              </div>
              <div className=" flex items-center justify-between">
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      disabled
                      className={
                        " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-white border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="USD" selected>
                        USD
                      </option>

                      <option value="Pounds">Pounds</option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                  </span>
                  <input
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    disabled
                    className={
                      " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    }
                  />
                </span>
                <BiTransfer className="text-3xl text-[#F8F8FF] mt-6" />
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      disabled
                      id="sendingcurrency"
                      className={
                        " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#F8F8FF] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                        //placeholder=" "
                      }
                      placeholder="receivingcountry"
                    >
                      <option value="USD" selected>
                        USD
                      </option>

                      <option value="Pounds">Pounds</option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                  </span>
                  <input
                  disabled
                    type="number"
                    id="sendamount"
                    placeholder="00000"
                    className={
                      " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#F8F8FF] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#F8F8FF]"
                    }
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
