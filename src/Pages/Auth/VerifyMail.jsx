import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/vector.svg";

const VerifyMail = () => {
  return (
    <div>
      <div className="flex flex-col h-screen font-poppins justify-center">
        <NavBar />
        <div className="bg flex-auto lg:flex  items-center flex-col lg:px-[15rem] ">
          <p className="text-center text-[#F8F8FF] text-base sm:text-2xl lg:text-xl xl:text-[1.3rem] font-semibold mt-4 sm:mt-8 lg:mt-4 xl:mt-5">
            Verify Your Phone Number
          </p>
          <div className="h-[80%] bg-[#F8F8FF] w-full rounded-[11.8392px] mt-8">
            <span className="h-[4rem] mx-auto  w-[4rem] xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[5rem] lg:w-[5rem] xl:w-[]  flex justify-center items-center rounded-full bg-[#00913E]/[0.1] mt-3 lg:mt-[2rem]">
              {" "}
              <img
                src={img1}
                alt=""
                className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem] lg:h-[2rem]"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyMail;
