import React, { useEffect, useRef, useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import mail from "../../assets/Vector.svg";
import OtpInput from "react18-input-otp";
import pop from "../../assets/poper.svg";
import { useNavigate } from "react-router-dom";
import SetMobile from "./SetMobile";

const VerifyMail = () => {
  const navigate = useNavigate();
  let currentOTPIndex = 0;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [bol, setbol] = useState(false);
  const [bool, setbool] = useState(false);

  const inputref = useRef(null);

  const handleOnChange = (e, i) => {
    // console.log(i);
    const { value } = e.target;
    const newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
      setVal(value);
    } else {
      setActiveOTPIndex(currentOTPIndex + 1);
      console.log(value);
      setVal(value);
    }
    setOtp(newOTP);
  };
  useEffect(() => {
    inputref.current?.focus();
  }, [activeOTPIndex]);
  const handleOnKeyDown = (e, index) => {
    currentOTPIndex = index;
    // console.log(V);

    // if (e.key == "Backspace") {
    //   setActiveOTPIndex(currentOTPIndex - 1);
    //   console.log(Val);
    // }
  };
  // console.log(otp);
  return (
    <div className="font-poppins">
      {bool ? (
        <div className="hidden sm:block">
          <div
            onClick={() => setbool(false)}
            className="bg-[#262626]/[0.8] h-screen w-screen absolute flex flex-col justify-center items-center "
          >
            <div className="flex-col flex justify-evenly items-center px-2 lg:px-20 bg-[#F8F8FF] rounded-[11.8392px] h-[60%] w-[80%] md:h-[60%] lg:w-[40%] ">
              <p className="lg:text-2xl md:text-4xl font-medium ">
                You Are All Set
              </p>
              <img src={pop} alt="" className="md:w-[12rem]  w-[5rem]" />
              <button className="w-full py-3 bg-[#009186] rounded-[8px] text-[#F8F8FF]">
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col h-screen font-poppins justify-between text-[#262626] ">
        <NavBar />
        {bol ? (
          <SetMobile />
        ) : (
          <div className="bg flex-auto sm:flex  items-center lg:justify-around flex-col  px-2 xss:px-4 xs:px-6 lg:px-[19rem]  xl:px-[25rem] pb-5">
            <p className="text-center text-[rgb(248,248,255)] text-base sm:text-2xl lg:text-xl xl:text-[1.3rem] font-semibold mt-4 sm:mt-8 lg:mt-8 xl:mt-2">
              Verify Your Phone Number
            </p>
            <div className=" h-[72%] xs:h-[76%] sm:h-[80%] md:h-[50%] lg:h-[70%] xl:h-[76%] shade  bg-[#F8F8FF] w-full  rounded-[11.8392px] mt-4 lg:mt-6  xl:mt-4 lg:px-8  px-4 xs:px-6 pt-2 lg:pt-0 ">
              <span className="h-[4rem] w-[4rem] mx-auto  mt-5 xs:mt-2 lg:mt-[2rem] xl:mt-[1.4rem]  xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[4rem] lg:w-[4rem] xl:w-[5rem] xl:h-[5rem]  flex justify-center items-center rounded-full bg-[#00913E]/[0.1] ">
                {" "}
                <img
                  src={mail}
                  alt=""
                  className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem]  lg:h-[1.7rem] xl:h-[1.8rem]"
                />
              </span>
              <p className="text-center mt-2 lg:mt-4 text-xs md:text-xl lg:text-sm  xl:text-base font-medium ">
                Enter the verification code that was sent to your phone number
              </p>

              <div className="flex  justify-evenly mt-6 lg:mt-2">
                {otp.map((arr, i) => (
                  <div className="" key={i}>
                    {" "}
                    <input
                      ref={i === activeOTPIndex ? inputref : null}
                      type="number"
                      className="h-16 w-8  xs:w-[2.17rem] sm:w-20 lg:w-12 lg:h-14 border spin-button-none rounded-[8px] bg-transparent outline-none text-center font-semibold text-lg text-[#262626] font-poppins spin-button-none border-[#87ACA3] border-solid transition"
                      onChange={(e) => handleOnChange(e, i)}
                      onKeyDown={(e) => handleOnKeyDown(e, i)}
                      value={otp[i]}
                    />
                  </div>
                ))}
              </div>
              <div className="flex flex-col xl:h-[40%] justify-between items-center mt-4 lg:mt-[1%] xl:mt-[4%] sm:mb-5 md:mb-0">
                <button
                  onClick={() => setbool(true)}
                  className=" hidden md:block px-12 py-2 lg:py-3 lg:px-14 lg:mt-[5%] lg:text-xs self-end  xl:px-12 bg-[#009186] text-white rounded-[8px] text-sm mt-2"
                >
                  Submit
                </button>
                <button
                  onClick={() => setbol(true)}
                  className=" md:hidden px-12 py-2 lg:py-3 lg:px-14 lg:mt-[5%] lg:text-xs self-end  xl:px-12 bg-[#009186] text-white rounded-[8px] text-sm mt-2"
                >
                  Submit
                </button>
                <div className="">
                  <p className="text-xs mt-16 sm:mt-2 md:mt-20 lg:mt-[8%] text-center xss:mt-10 xs:mt-14 md:text-sm xl:text-sm xl:mt-[6%]">
                    Didn't receive code?
                  </p>

                  <button className="px-12 py-2 lg:py-3 lg:px-14 lg:mt-1 lg:text-xs  xl:mt-2  xl:px-12 border-[#009186] text-[#009186] border  rounded-[8px] text-sm mt-2">
                    Resend Mail
                  </button>
                </div>
              </div>
            </div>
            <button className=" self-end bg-[#87ACA3] text-xs md:text-sm  float-right text-[#262626] rounded-[8px] font-semibold lg:mt-3 mt-5 xss:mt-3 xs:mt-6 px-12 py-3">
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyMail;
