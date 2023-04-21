import React, { useEffect } from "react";
import pop from "../../assets/poper.svg";
import NavBar from "./../../Components/AppComponents/NavBar";
import { useNavigate } from "react-router-dom";

const SetMobile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (val) {
      navigate("/dashboard");
    }
  });
  return (
    <>
      <div className="flex justify-between flex-col h-screen">
        {" "}
        <NavBar />
        <div className="px-2 xss:px-4 xs:px-6 sm:px-20 md:px-20 flex-auto bg flex justify-center items-center font-poppins sm:mt-[5rem]  mt-[5rem] ">
          <div className="flex-col flex justify-between items-center px-2 py-10 sm:py-14 sm:px-20  md:py-20  md:px-32 bg-[#F8F8FF]  rounded-[11.8392px]   w-full   h-[30rem] sm:h-[40rem] md:h-[40rem]">
            <p className="text-xl font-medium  sm:text-2xl">You Are All Set</p>
            <img
              src={pop}
              alt=""
              className=" w-[10rem] object-contain sm:w-[20rem] md:w-[20rem]"
            />
            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 bg-[#009186] rounded-[8px] text-[#F8F8FF]"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetMobile;
