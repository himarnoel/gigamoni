import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/success/success.svg";
const Success = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col h-screen  font-poppins justify-between ">
        <NavBar class="fixed top-0" />
        {/* <div className="h-20 w-full">dsfadfsdf</div> */}
        <div className="bg flex-auto  items-center  sm:mt-[3.5rem] md:mt-[5rem] lg:mt-[2rem] xl:mt-[3rem] ">
          <div className="w-full px-2 xss:px-4 xs:px-6 xsm:px-[5rem] sm:px-0 sm:w-fit   mx-auto mt-[9rem] xss:mt-[5rem] xs:mt-[9rem] sm:mt-[4rem] sm:mb-8 md:mt-[5rem] lg:mt-[5rem] xl:mt-[5rem]  mxl:mt-[10rem] ">
            <h1 className="text-center text-[#F8F8FF] text-base sm:text-2xl lg:text-2xl xl:text-2xl mxl:text-3xl 2xl:text-3xl  sm:mt-8 lg:mt-[0rem]  xl:mt-[0rem] mxl:mt-[0rem] mt-5 font-semibold ">
              Password Reset Successfully
            </h1>
            <div className="mx-auto bg-[#F8F8FF] w-full h-[20rem] items-center  mt-8  sm:w-[35rem] sm:h-[20rem] xl:mt-[3rem] mxl:mt-[4rem] md:w-[40rem] md:h-[25rem] lg:h-[19rem] lg:w-[30rem] mxl:w-[40rem] mxl:h-[25rem] md:mt-[3rem] lg:mt-[3rem]  rounded-[11.8392px] shade px-4 py-2 sm:px-10 sm:py-8 md:px-20 md:py-14 lg:px-10 lg:py-10 flex flex-col justify-around  ">
              {" "}
              <span className="h-[4rem]  mx-auto  w-[4rem] xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[5rem] lg:w-[5rem]   flex justify-center items-center rounded-full bg-[#00913E]/[0.1] mt-3 md:mt-[0rem] lg:mt-[0rem]">
                {" "}
                <img
                  src={img1}
                  alt=""
                  className=" h-[2rem] object-contain md:h-[2.5rem] lg:h-[2rem]"
                />
              </span>
              <p className=" text-xs md:text-sm text-center leading-[2]">
                Your new password has been updated successfully, Login with the
                new password to updated your account
              </p>
              <button
                onClick={() => navigate("/login")}
                className=" px-12 py-2 lg:py-3 lg:px-14 lg:mt-[5%]  xl:px-24 lg:text-xs  bg-[#009186] text-white rounded-[8px] text-sm mt-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
