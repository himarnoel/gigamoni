import React from "react";
import footlogo from "../../assets/Footer/footlogo.png";
import powerlogo from "../../assets/Footer/powerlogo.png";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
const Foot = () => {
  return (
    <div>
      {/* Lg footer */}
      <div className=" hidden md:block  mt-20 text-center  bg-[#004943] py-10   items-start w-full    md:px-8  lg:px-10  xl:px-[10rem]    ">
        <div className="flex items-center justify-between ">
          <Link to="/">
            <div className=" flex flex-col ">
              <img src={footlogo} alt="" className="object-contain w-[10rem]" />
            </div>
          </Link>
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
        <Link to="/">
          <span className="flex items-center ml-5 lg:ml-10 mt- ">
            <p className=" text-[0.5rem] text-[#F8F8FF] mr-2">Powered By</p>
            <img src={powerlogo} alt="" />
          </span>
        </Link>
      </div>
      {/* Mobile footer */}
      <div className="md:hidden  mt-20 text-left bg-[#004943] py-5 px-2 xss:px-4 xs:px-6  sm:px-10   text-white   items-start w-full  ">
        <div className="grid   text-center text-[0.68rem] gap-y-6   items-center place-content-center">
          <Link to="/">
            <div className=" flex flex-col ">
              <img src={footlogo} alt="" className="object-contain w-[10rem]" />
              <span className="flex items-center ml-3 xss:ml-5  lg:ml-10 mt-1">
                <p className="text-[0.5rem] text-[#F8F8FF] mr-2">Powered By</p>
                <img
                  src={powerlogo}
                  alt=""
                  className="object-contain w-[7rem] "
                />
              </span>
            </div>
          </Link>
          <p>FAQs</p> <p>Contact Us </p> <p>How it works</p>{" "}
          <p>Privacy Policy</p> <p>Terms and conditions</p>
          <div className="flex items-center  w-[12rem]  sm:text-xl   mt-[0rem] justify-between text-white text-xl  md:text-xl lg:text-3xl">
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
