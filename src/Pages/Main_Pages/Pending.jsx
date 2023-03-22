import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
const Pending = () => {
  return (
    <div className=" bg-[#F8F8FF] font-poppins ">
      <NavBar />
      <div className=" 2xl:px-[10rem] xl:px-[5rem] lg:px-10 w-full  pt-10">
        <div className="flex justify-between items-center">
          <button className=" lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3]">
            Back
          </button>
          <div
            onClick={() => alert("Notification")}
            className=" text-[#009186] items-center cursor-pointer hidden lg:flex "
          >
            <img
              src={bell}
              alt=""
              className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
            />
            <p className="font-semibold mxl:text-xl">Notifications</p>
          </div>
        </div>
        <div className="flex"></div>
      </div>
    </div>
  );
};

export default Pending;
