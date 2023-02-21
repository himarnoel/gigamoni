import React from "react";
import logo from "../assets/logo.svg";
const Nav = () => {
  return (
    <div className=" ">
      <div className="w-full bg-[#87ACA3]/[0.3] px-10 absolute top-40 py-4 z-40 rounded-b-lg flex justify-between items-center">
        <img src={logo} alt="" className="" />
        <span className="flex text-white">
          <a href="">How it works</a>
          <a href="">FaQs</a>
          <a href="">Login</a>
          <button className="p-5 rounded bg[#009186]"> Create Account</button>
        </span>
      </div>
    </div>
  );
};

export default Nav;
