import React from "react";
import footlogo from "../../assets/Footer/footlogo.png";
import powerlogo from "../../assets/Footer/powerlogo.png";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";
const Foot = () => {
  return (
    <div className="mt-20 text-center bg-[#004943] py-10  f items-start w-full   px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem]    ">
      <div className="flex items-center justify-between ">
        <div className=" flex flex-col ">
          <img src={footlogo} alt="" className="object-contain w-1rem]"/>
          
        </div>

        <div className="flex   text-white w-[30rem] justify-between items-center  text-[0.7rem]">
          <a href="">FAQs</a>
          <a href="">Contact Us</a>
          <a href="">How it works</a>
          <a href="">Privacy Policy</a>
          <a href="">Terms and conditions</a>
        </div>
        <div className="flex items-center justify-between text-white  w-[10rem] text-3xl">
          <ImFacebook2 />
          <BsTwitter />
          <BsInstagram />
        </div>
      </div>
      <span className="flex items-center ml-10 mt- ">
            <p className=" text-[0.5rem] text-[#F8F8FF] mr-2">Powered By</p>
            <img src={powerlogo} alt="" />
          </span>
    </div>
  );
};

export default Foot;
