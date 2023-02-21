import React from "react";
import logo from "../assets/logo.svg";
const Nav = () => {
  return (
    <div className=" ">
      <div className="w-full bg-[#87ACA3]/[0.3]  px-10 absolute top-40 py-5">
        <img src={logo} alt=""  className=""/>
      </div>
    </div>
  );
};

export default Nav;
