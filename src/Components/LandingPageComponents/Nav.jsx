import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { HiMenu } from "react-icons/hi";
import { useNavigate, Link as Rlink } from "react-router-dom";
import { Link } from "react-scroll";
const Nav = () => {
  const [bool, setbool] = useState(false);
  const navigate = useNavigate();

  const showAlert = () => {
    alert("I'm an alert");
  };

  return (
    <div className=" ">
      <div className="lg:block hidden ">
        <div className=" fixed top-0 font-poppins font-semibold w-full bg-[#87ACA3]/[0.4] 2xl:px-[10rem] xl:px-[8rem] lg:px-10  py-3  z-40 rounded-b-lg flex justify-between items-center">
          <Rlink to="/" onClick={() => setbool(!bool)}>
            <img src={logo} alt="" className="object-contain w-[9rem]" />
          </Rlink>
          <span className="flex  text-white w-[29rem] justify-between items-center  text-sm">
            <Link
              activeClass="active"
              className="cursor-pointer"
              to="works"
              spy={true}
              smooth={true}
              offset={-68}
              duration={800}
              onClick={() => setbool(!bool)}
            >
              How it works
            </Link>
            <Link
              className="cursor-pointer"
              activeClass="active"
              to="faqs"
              spy={true}
              smooth={true}
              offset={-56}
              duration={800}
              onClick={() => setbool(!bool)}
            >
              FAQs
            </Link>
            <Link onClick={() => navigate("/login")} className="cursor-pointer">
              Login
            </Link>
            <button
              onClick={() => navigate("/signup")}
              className="px-8 py-[0.7rem] rounded bg-[#009186]"
            >
              Create Account
            </button>
          </span>
        </div>
      </div>
      {/* Mobile nav bar */}
      <div className=" fixed top-0  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8  font-poppins w-full bg-[#87ACA3]/[0.4] lg:hidden   py-5 flex  z-[70] rounded-b-lg justify-between">
        <Rlink to="/" onClick={() => setbool(false)}>
          {" "}
          <img src={logo} alt="" className="md:w-40 w-24 " />
        </Rlink>
        <span className="flex ">
          <button
            onClick={() => navigate("/signup")}
            className="sm:px-5 py-[0.5rem] px-2 xss:py-[0.5rem] xss:px-4 xs:py-[0.7rem] xs:px-7   sm:py-[0.7rem]  text-[0.7rem] xs:text-[0.8rem] sm:text-sm md:text-base
           rounded-[8px] bg-[#009186]  text-white mr-4"
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
        <div className="h-[15rem] lg:hidden w-full flex flex-col text-sm sm:text-base items-center justify-evenly text-white  bg-[#87ACA3] text-light z-50 fixed top-[4rem] rounded-b-lg">
          {" "}
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-40}
            duration={1000}
            onClick={() => setbool(!bool)}
          >
            How it works
          </Link>
          <Link
            activeClass="active"
            to="faqs"
            spy={true}
            smooth={true}
            offset={-20}
            duration={2000}
            onClick={() => setbool(!bool)}
          >
            FAQs
          </Link>
          <Link onClick={() => navigate("/login")}>Login</Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Nav;
