import React from "react";
import logo from "../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
const Nav = () => {
  return (
    <div className=" ">
      <div className="lg:block hidden">
        <div className=" font-poppins w-full bg-[#87ACA3]/[0.4] xl:px-24 lg:px-10 absolute top-40 py-3  z-40 rounded-b-lg flex justify-between items-center">
          <a href="">
            <img src={logo} alt="" className="object-contain w-[9rem]" />
          </a>
          <span className="flex text-white w-[29rem] justify-between items-center font-light text-sm">
            <a href="">How it works</a>
            <a href="">FaQs</a>
            <a href="">Login</a>
            <button className="px-8 py-[0.7rem] rounded bg-[#009186]">
              {" "}
              Create Account
            </button>
          </span>
        </div>
      </div>

      <div className=" fixed px-5 md:px-8  font-poppins w-full bg-[#87ACA3]/[0.4] lg:hidden   top-0 py-5 flex  z-40 rounded-b-lg justify-between">
        <img src={logo} alt="" className="md:w-40 w-24 " />
        <span className="flex ">
          <button
            className="px-5 py-[0.7rem] text-sm md:text-base
           rounded-lg bg-[#009186]  text-white mr-4"
          >
            {" "}
            Create Account
          </button>{" "}
          <HiMenu className="text-white text-2xl md:text-4 xl" onClick="" />
        </span>
      </div>
      <div className="h-10 w-full flex flex-col bg-[#87ACA3]/[0.4] "></div>
    </div>
  );
};

export default Nav;
