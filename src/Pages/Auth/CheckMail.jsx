import React, { useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { baseurl } from "../../Service/validate_and_api";
import { toast } from "react-toastify";
import { useEffect } from "react";

const CheckMail = () => {
  useEffect(() => {
    localStorage.removeItem("Send");
  }, []);
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (val) {
      navigate("/dashboard");
    }
  });

  const navigate = useNavigate();
  const [load, setload] = useState(false);
  const Resender = () => {
    let email = localStorage.getItem("email");
    setload(true);
    axios
      .post(`${baseurl}/accounts/request/`, {
        email,
      })
      .then((res) => {
        console.log(res);
        setload(false);
      })
      .catch((e) => {
        console.log(e);
        toast.error("An error occurred");
        setload(false);
      });
  };
  return (
    <div>
      {load ? (
        <div className="absolute bg-cover bg-[#262626]/[0.8]  z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
          <RingLoader color="#009186" size={90} />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col h-screen  font-poppins   ">
        <NavBar class="fixed top-0" />
        <div className="  bg flex-auto sm:flex  items-center  flex-col  px-2 xs:px-4 sm:px-6  mt-[4rem] md:mt-[5rem] sm:mt-[4rem] lg:mt-5  xl:mt-[3rem] pb-10">
          <p className="text-center text-[#F8F8FF]  text-base sm:text-2xl lg:text-2xl xl:text-2xl mxl:text-3xl 2xl:text-3xl font-semibold mt-[2rem] sm:mt-[2rem] md:mt-[4rem] lg:mt-[6rem]  xl:mt-[3.2rem] mxl:mt-[4rem] ">
            Check your Email
          </p>
          <div
            className="flex flex-col items-center justify-center
          mx-auto mt-2 xss:mt-2 xs:mt-4 sm:mt-8  md:mt-12 lg:mt-6 xl:mt-[3rem] mxl:mt-[7rem]"
          >
            <div
              className="mx-auto text-[#262626] text-center flex flex-col px-6 sm:px-0    shade  items-center bg-[#F8F8FF] w-full  rounded-[8px] md:rounded-[11.8392px] h-[25rem] xss:h-[20rem] xs:h-[25rem] md:h-[29rem] lg:h-[25rem] lg:w-[30rem] xl:h-[25rem] mxl:h-[30rem]
           sm:w-[35rem]  md:w-[32rem]  mxl:w-[40.5rem]  "
            >
              <span className="h-[4rem]  w-[4rem] xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[5rem] lg:w-[5rem]  mxl:h-[6.4rem] mxl:w-[6.4rem]  flex justify-center items-center rounded-full bg-[#00913E]/[0.1] mt-[2rem] md:mt-[2rem] lg:mt-[2rem]">
                {" "}
                <img
                  src={img1}
                  alt=""
                  className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem] lg:h-[2rem] mxl:h-[3rem]"
                />
              </span>
              <p className="text-xs xss:text-[0.78rem] font-semibold sm:text-sm md:text-xl lg:text-sm xl:text-lg sm:font-medium mt-3 xl:mt-5 mxl:text-xl">
                We have sent a Verification link to your mail
              </p>
              <p className="text-xs xss:text-[0.rem]  mt-6 xss:mt-3  xs:mt-3 md:mt-3 md:text-sm lg:text-sm xl:mt-3 mxl:text-lg mxl:mt-6">
                If you can’t find the email kindly check your spam folder
              </p>
              <p className="text-xs mt-[4rem] xss:mt-[3rem] xs:mt-14 md:mt-20  md:text-sm xl:text-sm xl:mt-14 mxl:mt-[8rem] mxl:text-sm">
                Didn't receive email?
              </p>

              <button
                onClick={() => Resender()}
                className="px-12 py-[0.78rem] xss:py-[0.72rem] sm:py-3 lg:py-3  xl:px-12 mxl:px-20 mxl:py-5 bg-[#009186] text-white rounded-[8px] text-sm mt-2"
              >
                Resend Mail
              </button>
            </div>
            <button
              onClick={() => navigate("/login")}
              className=" self-end bg-[#87ACA3] text-xs md:text-sm  text-[#262626] rounded-[8px] font-semibold mt-6 xss:mt-3 xs:mt-6 px-8 py-3 mxl:mt-[2.5rem] mxl:px-[5rem] mxl:py-[1.2rem]"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckMail;
