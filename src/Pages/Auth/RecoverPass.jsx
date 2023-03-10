import React, { useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/Vector.svg";
import { RingLoader } from "react-spinners";
import axios from "axios";
import { baseurl } from "../../Service/validate_and_api";
import { useNavigate } from "react-router-dom";
const RecoverPass = () => {
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const Resender = () => {
    let email = localStorage.getItem("email");
    setload(true);
    axios
      .post(`${baseurl}/request/`, {
        email,
      })
      .then((res) => {
        console.log(res);
        setload(false);
      })
      .catch((e) => {
        console.log(e);
        setload(false);
      });
  };
  return (
    <div className="check">
      {load ? (
        <div className="absolute bg-cover bg-[#262626]/[0.8]  z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
          <RingLoader color="#009186" size={90} />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col h-screen justify-between ">
        <NavBar class="fixed top-0" />
        <div className="  bg flex-auto sm:flex  items-center  flex-col justify-center px-2 xs:px-4 sm:px-6 lg:pb-36  ">
          <p className="text-center text-[#F8F8FF]  text-base sm:text-2xl lg:text-2xl xl:text-2xl mxl:text-3xl 2xl:text-3xl font-semibold mt-[6rem] sm:mt-[-2rem] md:mt-[1rem] lg:mt-[6rem]  xl:mt-[6rem] mxl:mt-[-4rem] ">
            Check your Email
          </p>
          <div className="flex flex-col items-center w-full  h-[25rem] xss:h-[22rem] xs:h-[25rem] md:h-[29rem] lg:h-[28rem] xl:h-[32rem] px-2 xss:px-4 xs:px-6 xsm:px-[5rem] sm:px-[6rem]  md:px-[8rem] lg:px-[18rem] xl:px-[25rem]  mx-auto mt-2 xss:mt-2 xs:mt-4  md:mt-6 lg:mt-6 xl:mt-5">
            <div className="mx-auto text-[#262626] text-center flex flex-col   shade  items-center bg-[#F8F8FF]  px-2 xs:px-4 sm:px-6  xl:px-[2rem]  rounded-[8px] md:rounded-[11.8392px] w-full h-full  shade ">
              <span className="h-[4rem]  w-[4rem] xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[5rem] lg:w-[5rem]   flex justify-center items-center rounded-full bg-[#00913E]/[0.1] mt-3 md:mt-[2rem] lg:mt-[2rem]">
                {" "}
                <img
                  src={img1}
                  alt=""
                  className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem] lg:h-[2rem]"
                />
              </span>
              <p className="text-xs xs:text-[0.78rem] font-semibold  md:text-sm sm:font-medium mt-3 xl:mt-5 w">
                We have sent a password recovery instruction to your mail
              </p>
              <p className="text-xs  mt-6 xss:mt-3  xs:mt-3 md:mt-3 md:text-sm lg:text-xs xl:mt-3">
                If you can’t find the email kindly check your spam folder
              </p>
              <p className="text-xs mt-[4rem] xss:mt-[3rem] xs:mt-14 md:mt-20  md:text-sm xl:text-sm xl:mt-20">
                Didn't receive email?
              </p>

              <button
                onClick={() => Resender()}
                className="px-12 py-[0.78rem] xss:py-[0.72rem] sm:py-3 lg:py-3  xl:px-12 bg-[#009186] text-white rounded-[8px] text-sm mt-2"
              >
                Resend Mail
              </button>
            </div>
            <button
              onClick={() => navigate("/login")}
              s
              className=" self-end bg-[#87ACA3] text-xs md:text-sm  text-[#262626] rounded-[8px] font-semibold mt-6 xss:mt-3 xs:mt-6 px-8 py-3 md:mb-[20px]"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverPass;
