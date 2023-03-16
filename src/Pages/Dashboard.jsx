import React, { useState } from "react";

import { RiNotification2Fill } from "react-icons/ri";
import DashNav from "../Components/DashBoardComponents/DashNav";
import bell from "../assets/bell.svg";
import { GrSearch } from "react-icons/gr";
import search from "../assets/search.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import card from "../assets/carddash.png";

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
              <p className="text-[#009186] ml-[10rem] text-sm">Beneficiaries</p>
            </span>

            <div className="flex items-center mt-8">
              <div className="relative ">
                <input
                  type="text"
                  className=" pl-3 pr-[15rem] py-3 text-sm placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] focus:outline-none border-[#009186] focus:border-[#009186]  border-solid
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
            <div className="w-[29rem] h-[8.5rem] flex items-center justify-between rounded-3xl bg-[#87ACA3] pl-2">
              <span className="w-[17rem]">
                <p className="text-white text-sm ">
                  International transactions has never been easier
                </p>
                <button className="px-[2.4rem] py-[0.6rem] mt-4 text-sm rounded-lg text-white bg-[#009186] flex items-center">
                  Account
                  <RiArrowDownSLine className="text-xl ml-2" />
                </button>
               
              </span>
              <img src={card} alt="" className="object-contain w-[10rem] mt-[-1.2rem] mr-[-0.2rem]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
