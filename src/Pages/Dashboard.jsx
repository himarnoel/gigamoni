import React, { useState } from "react";

import { RiNotification2Fill } from "react-icons/ri";
import DashNav from "../Components/DashBoardComponents/DashNav";
import bell from "../assets/bell.svg";
import { GrSearch } from "react-icons/gr";
import search from "../assets/search.svg";

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

        <div className="flex w-full">
          <div className=" mt-10">
            <span className="flex">
              <p className="text-[#175873] font-medium text-sm ">
                Recent Transactions
              </p>
              <p className="text-[#009186] ml-[9rem] text-xs">Beneficiaries</p>
            </span>

            <div className="relative mt-4">
              <input
                type="text"
                className=" px-4 py-2 placeholder:text-[#87ACA3] placeholder:text-xs rounded-[8px] border-[2px] border-[#009186] border-solid
            "
                placeholder="Search transcations"
              />
              <img src={search} alt="" />
            </div>
          </div>
          {/* for the secon part */}
          <div className="mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
