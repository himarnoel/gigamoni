import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col h-screen  font-poppins justify-between ">
        <NavBar />
        <div className="bg flex-auto flex flex-col justify-between   ">
          <div className="w-full px-2 xss:px-4 xs:px-6 xsm:px-[5rem] sm:px-0 sm:w-fit  mx-auto mxl:mt-[14rem]">
            <h1 className="text-center text-[#F8F8FF] text-base sm:text-2xl lg:text-2xl xl:text-2xl mxl:text-3xl 2xl:text-3xl  sm:mt-8 lg:mt-[rem]  xl:mt-4 mt-5 mxl:mt-10 font-semibold ">
              Password Reset Successfully
            </h1>
            <div className="mx-auto bg-[#F8F8FF] w-full h-[87%]   sm:w-[35rem] sm:h-[20rem]  md:w-[40rem] md:h-[25rem] lg:h-[19rem] lg:w-[30rem] mxl:w-[40rem] mxl:h-[25rem] md:mt-[5rem] lg:mt-[3rem]  rounded-[11.8392px] shade px-4 py-2 sm:px-10 sm:py-8 md:px-20 md:py-14 lg:px-10 lg:py-10 flex flex-col justify-around  mt-5"></div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
