import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/Vector.svg";

const CheckMail = () => {
  return (
    <div>
      <div className="flex flex-col h-screen font-poppins justify-center">
        <NavBar />
        <div className="bg flex-auto lg:flex justify-around items-center flex-col ">
          <p className="text-center text-[#F8F8FF] text-base sm:text-2xl lg:text-xl xl:text-2xl font-semibold mt-4 sm:mt-8 lg:mt-5 xl:mt-5">
            Check your Email
          </p>
          <div className="flex flex-col items-center w-full  h-[25rem] xss:h-[22rem] xs:h-[25rem] md:h-[27rem] lg:h-[28rem] xl:h-[32rem] px-2 xss:px-4 xs:px-6 lg:px-20  sm:w-fit mx-auto mt-2 xss:mt-2 xs:mt-4  md:mt-6 lg:mt-6 xl:mt-4">
            <div className="mx-auto text-[#262626] text-center flex flex-col   items-center bg-[#F8F8FF]  px-4 xs:px-6 xl:px-[4rem]  rounded-[8px] md:rounded-[11.8392px] w-full h-full  shadow-[0_35px_60px_-15px_rgba(25,0,0,0.3)]">
              <span className="h-[4rem]  w-[4rem] xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[5rem] lg:w-[5rem]   flex justify-center items-center rounded-full bg-[#00913E]/[0.1] mt-3 lg:mt-[2rem]">
                {" "}
                <img
                  src={img1}
                  alt=""
                  className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem] lg:h-[2rem]"
                />
              </span>
              <p className="xs:text-base text-sm md:text-xl lg:text-sm xl:text-lg font-medium mt-3 xl:mt-5 w">
                We have sent a Verification link to your mail
              </p>
              <p className="text-xs  mt-2  xs:mt-3 md:mt-3 md:text-sm lg:text-xs xl:mt-6">
                If you can’t find the email kindly check your spam folder
              </p>
              <p className="text-xs mt-20 md:mt-20 xss:mt-10 xs:mt-14 md:text-sm xl:text-sm xl:mt-20">
                Didn't receive email?
              </p>

              <button className="px-12 py-2 lg:py-3  xl:px-12 bg-[#009186] text-white rounded-[8px] text-sm mt-2">
                Resend Mail
              </button>
            </div>
            <button className=" self-end bg-[#87ACA3] text-xs md:text-sm  text-[#262626] rounded-[8px] font-semibold mt-6 xss:mt-3 xs:mt-6 px-8 py-3">
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
