import React, { useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import mail from "../../assets/Vector.svg";
import OtpInput from "react18-input-otp";

const VerifyMail = () => {
  const [code, setCode] = useState("");

  const handleChange = (code) => setCode(code);
  return (
    <div>
      <div className="flex flex-col h-screen font-poppins justify-center text-[#262626]">
        <NavBar />
        <div className="bg flex-auto lg:flex  items-center flex-col lg:px-[16rem] ">
          <p className="text-center text-[#F8F8FF] text-base sm:text-2xl lg:text-xl xl:text-[1.3rem] font-semibold mt-4 sm:mt-8 lg:mt-8 xl:mt-">
            Verify Your Phone Number
          </p>
          <div className="lg:h-[70%] bg-[#F8F8FF] w-full rounded-[11.8392px] lg:mt-6 lg:px-10">
            <span className="h-[4rem] w-[4rem] mx-auto   xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[4rem] lg:w-[4rem] xl:w-[]  flex justify-center items-center rounded-full bg-[#00913E]/[0.1] mt-3 lg:mt-[2rem]">
              {" "}
              <img
                src={mail}
                alt=""
                className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem] lg:h-[1.7rem]"
              />
            </span>
            <p className="text-center lg:mt-4 ">
              Enter the verification code that was sent to your phone number
            </p>
            <OtpInput
              value={code}
              onChange={handleChange}
              className="mx-auto mt-5"
              numInputs={5}
              separator={<span style={{ width: "8px" }}></span>}
              isInputNum={true}
              shouldAutoFocus={true}
              inputStyle={{
                border: "1px solid #87ACA3",
                borderRadius: "8px",
                width: "54px",
                height: "54px",
                fontSize: "16px",
                color: "#000",
                fontWeight: "400",
                caretColor: "blue",
              }}
              focusStyle={{
                border: "1px solid #009186",
                outline: "none",
              }}
            />
            <button className="px-12 py-2 lg:py-3 float-right xl:px-12 bg-[#009186] text-white rounded-[8px] text-sm mt-2">
              Submit
            </button>
          </div>
          <button className=" self-end bg-[#87ACA3] text-xs md:text-sm  text-[#262626] rounded-[8px] font-semibold lg:mt-3 xss:mt-3 xs:mt-6 px-8 py-3">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
