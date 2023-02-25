import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
const Nav = () => {
  const [bool, setbool] = useState(false);
  return (
    <div className=" ">
      <div className="lg:block hidden">
        <div className=" font-poppins font-semibold w-full bg-[#87ACA3]/[0.4] 2xl:px-[10rem] xl:px-[8rem] lg:px-10  absolute top-40 py-3  z-40 rounded-b-lg flex justify-between items-center">
          <a href="">
            <img src={logo} alt="" className="object-contain w-[9rem]" />
          </a>
          <span className="flex  text-white w-[29rem] justify-between items-center  text-sm">
            <a href="">How it works</a>
            <a href="">FAQs</a>
            <a href="">Login</a>
            <button className="px-8 py-[0.7rem] rounded bg-[#009186]">
              Create Account
            </button>
          </span>
        </div>
      </div>
      {/* Mobile nav bar */}
      <div className=" absolute  px-2 sm:px-10 md:px-8  font-poppins w-full bg-[#87ACA3]/[0.4] lg:hidden   top-0 py-5 flex  z-[70] rounded-b-lg justify-between">
        <img src={logo} alt="" className="md:w-40 w-24 " />
        <span className="flex ">
          <button
            className="sm:px-5 py-[0.4rem] px-2 text-[0.7rem] sm:py-[0.7rem] sm:text-sm md:text-base
           rounded-lg bg-[#009186]  text-white mr-4"
          >
            {" "}
            Create Account
          </button>{" "}
          <HiMenu
            className="text-white text-xl sm:text-3xl md:text-4xl"
            onClick={() => setbool(!bool)}
          />
        </span>
      </div>
      {bool ? (
        <div className="h-28 lg:hidden w-full flex flex-col text-xs sm:text-base items-center justify-evenly text-white  bg-[#87ACA3] text-light z-50 fixed top-[4rem] rounded-b-lg">
          {" "}
          <a href="" onClick={() => setbool(!bool)}>
            How it works
          </a>
          <a href="" onClick={() => setbool(!bool)}>
            FAQs
          </a>
          <a href="" onClick={() => setbool(!bool)}>
            Login
          </a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
