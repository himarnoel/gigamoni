import React, { useEffect, useRef, useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import mail from "../../assets/Vector.svg";
import OtpInput from "react18-input-otp";

const VerifyMail = () => {
  let currentOTPIndex = 0;
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [Val, setVal] = useState("");
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
    <div>
      <div className="flex flex-col h-screen font-poppins justify-center text-[#262626]">
        <NavBar />
        <div className="bg flex-auto lg:flex  items-center justify-center flex-col  px-2 xss:px-4 xs:px-6 lg:px-[19rem]  xl:px-[24rem]">
          <p className="text-center text-[rgb(248,248,255)] text-base sm:text-2xl lg:text-xl xl:text-[1.3rem] font-semibold mt-4 sm:mt-8 lg:mt-8 xl:mt-4">
            Verify Your Phone Number
          </p>
          <div className="lg:h-[70%]  bg-[#F8F8FF] w-full  rounded-[11.8392px] lg:mt-6  xl:mt-4 lg:px-8">
            <span className="h-[4rem] w-[4rem] mx-auto   xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[4rem] lg:w-[4rem] xl:w-[]  flex justify-center items-center rounded-full bg-[#00913E]/[0.1] mt-3 lg:mt-[2rem]">
              {" "}
              <img
                src={mail}
                alt=""
                className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem] lg:h-[1.7rem]"
              />
            </span>
            <p className="text-center lg:mt-4 text-xs lg:text-sm  xl:text-base font-medium ">
              Enter the verification code that was sent to your phone number
            </p>

            <div className="flex  justify-evenly lg:mt-2">
              {" "}
              {otp.map((arr, i) => (
                <div className="" key={i}>
                  {" "}
                  <input
                    ref={i === activeOTPIndex ? inputref : null}
                    type="number"
                    className="h-10 w-10 lg:w-12 lg:h-14 border spin-button-none rounded-[8px] bg-transparent outline-none text-center font-semibold text-lg text-[#262626] font-poppins spin-button-none border-[#87ACA3] border-solid transition"
                    onChange={(e) => handleOnChange(e, i)}
                    onKeyDown={(e) => handleOnKeyDown(e, i)}
                    value={otp[i]}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col h-[] justify-between items-center lg:mt-[1%] xl:mt-[4%]">
              <button className="px-12 py-2 lg:py-3 lg:px-14 lg:mt-[5%] lg:text-xs self-end  xl:px-12 bg-[#009186] text-white rounded-[8px] text-sm mt-2">
                Submit
              </button>
              <p className="text-xs mt-20 md:mt-20 lg:mt-[8%]  xss:mt-10 xs:mt-14 md:text-sm xl:text-sm xl:mt-[6%]">
                Didn't receive code?
              </p>

              <button className="px-12 py-2 lg:py-3 lg:px-14 lg:mt-1 lg:text-xs   xl:px-12 border-[#009186] text-[#009186] border  rounded-[8px] text-sm mt-2">
                Resend Mail
              </button>
            </div>
          </div>
          <button className=" self-end bg-[#87ACA3] text-xs md:text-sm  float-right text-[#262626] rounded-[8px] font-semibold lg:mt-3 xss:mt-3 xs:mt-6 px-8 py-3">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
