import React from "react";
import footlogo from "../../assets/Footer/footlogo.png";
import powerlogo from "../../assets/Footer/powerlogo.png";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";
const Foot = () => {
  return (
    <div>
      <div className=" hidden md:block mt-20 text-center bg-[#004943] py-10  f items-start w-full    md:px-8  lg:px-10  xl:px-[10rem]    ">
        <div className="flex items-center justify-between ">
          <div className=" flex flex-col ">
            <img src={footlogo} alt="" className="object-contain w-[10rem]" />
          </div>

          <div className="flex   text-white md:w-[24rem] lg:w-[28rem] xl:w-[28rem] justify-between items-center md:text-[0.6rem]   lg:text-[0.7rem]">
            <a href="">FAQs</a>
            <a href="">Contact Us</a>
            <a href="">How it works</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms and conditions</a>
          </div>
          <div className="flex items-center justify-between text-white md:w-[8rem] lg:w-[10rem] md:text-xl lg:text-3xl">
            <ImFacebook2 />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
        <span className="flex items-center ml-5 lg:ml-10 mt- ">
          <p className=" text-[0.5rem] text-[#F8F8FF] mr-2">Powered By</p>
          <img src={powerlogo} alt="" />
        </span>
      </div>
      {/* Mobile footer */}
      <div className="md:hidden  mt-20 text-left bg-[#004943] py-5  text-white   items-start w-full   px-2 sm:px-10  ">
        <div className="grid grid-cols-3 text-[0.68rem] gap-y-6">
          <p>FAQs</p> <p>Contact Us </p> <p>How it works</p>{" "}
          <p>Privacy Policy</p> <p>Terms and conditions</p>
        </div>
        <div className="flex items-center justify-between">
          <div className=" flex flex-col mt-10 ">
            <img src={footlogo} alt="" className="object-contain w-[10rem]" />
            <span className="flex items-center ml-5 lg:ml-10 mt-4 ">
              <p className=" text-[0.5rem] text-[#F8F8FF] mr-2">Powered By</p>
              <img src={powerlogo} alt="" />
            </span>
          </div>
          <div className="flex items-center w-[8rem]  mt-[7rem] justify-between text-white  md:text-xl lg:text-3xl">
            <ImFacebook2 />
            <BsTwitter />
            <BsInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foot;
