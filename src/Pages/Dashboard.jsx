import React, { useState } from "react";

import { RiNotification2Fill } from "react-icons/ri";
import DashNav from "../Components/DashBoardComponents/DashNav";
const Dashboard = () => {
  const [first, setfirst] = useState("");
  return (
    <div className="font-poppins ">
      <DashNav class="fixed top-0 w-full" />
      <div className="2xl:px-[10rem] xl:px-[5rem] lg:px-10 mt-20">
        <span className="flex text-[#009186] float-right items-center" >
          <RiNotification2Fill className="mr-5 text-xl" />
          <p className="ss">Notifications</p>
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
