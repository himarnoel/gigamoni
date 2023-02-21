import React from "react";
import logo from "../assets/logo.svg";

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

      <div className=" px-3 font-poppins w-full bg-[#87ACA3]/[0.4] lg:hidden  absolute top-40 py-3 flex  z-40 rounded-b-lg">
        <img src={logo} alt="" className="w-24" />
        <button className="px-8 py-[0.7rem] rounded bg-[#009186]  text-white">
          {" "}
          Create Account
        </button>


      </div>
    </div>
  );
};

export default Nav;
