import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";

import img from "../../assets/vector.svg";

const CheckMail = () => {
  return (
    <div>
      <div className="flex flex-col h-screen font-poppins">
        <NavBar />
        <div className="bg flex-auto">
          <p className="text-center text-[#F8F8FF] text-2xl font-semibold mt-8">
            Check your Email
          </p>
          <div className="flex flex-col items-center w-full  px-2 xss:px-4 xs:px-6  sm:w-fit mx-auto mt-12">
            <div className="mx-auto text-[#262626] text-center flex flex-col  items-center bg-[#F8F8FF] py-10 px-8 rounded-[11.8392px] w-full h-full  shadow-[0_35px_60px_-15px_rgba(25,0,0,0.3)]">
              <span className="h-[6rem] flex justify-center items-center rounded-full w-[6rem] bg-[#00913E]/[0.1] mt-8">
                {" "}
                <img
                  src={img}
                  alt=""
                  className="text-blue-700 h-10 object-contain "
                />
              </span>
              <p className="text-lg font-medium mt-5">
                We have sent a Verification link to your mail
              </p>
              <p className="text-xs mt-2">
                If you can’t find the email kindly check your spam folder{" "}
              </p>
              <p className="text-sm mt-14">Didn't receive email?</p>

              <button className="px-8 py-2 bg-[#009186] text-white rounded-[8px] mt-4">
                Resend Mail
              </button>
            </div>
            <button className="px-4 py-3 self-end bg-[#87ACA3] text-[#262626] rounded-[8px] mt-5 font-semibold">
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
