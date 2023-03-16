import React, { useState } from "react";

import { RiNotification2Fill } from "react-icons/ri";
import DashNav from "../Components/DashBoardComponents/DashNav";
import bell from "../assets/bell.svg";
const Dashboard = () => {
  const [first, setfirst] = useState("");
  return (
    <div className="font-poppins ">
      <DashNav class="fixed top-0 w-full" />
      <div className="2xl:px-[10rem] xl:px-[5rem] lg:px-10 mt-20">
        <span
          onClick={() => alert("Notification")}
          className="flex text-[#009186] float-right items-center cursor-pointer"
        >
          <img src={bell} alt="" className="object-contain w-[1.6rem] mr-3" />
          <p className="font-semibold">Notifications</p>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
