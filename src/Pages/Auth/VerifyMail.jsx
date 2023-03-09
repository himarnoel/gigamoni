import React, { useEffect, useRef, useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import mail from "../../assets/Vector.svg";
import OtpInput from "react18-input-otp";
import pop from "../../assets/poper.svg";
import { useNavigate, useSearchParams } from "react-router-dom";
import SetMobile from "./SetMobile";
import axios from "axios";
import { baseurl } from "../../Service/validate_and_api";
import { RingLoader } from "react-spinners";
import { toast } from "react-toastify";

const VerifyMail = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [load, setload] = useState(false);
  const [deter, setDeter] = useState(true);

  // useEffect(() => {
  //   const id = searchParams.get("id");
  //   const key = searchParams.get("key");
  // setDeter(false)
  //   setload(true);
  //   axios
  //     .get(`${baseurl}/verify/${id}/${key}`)
  //     .then((res) => {
  //       console.log(res);
  //       setload(false);
  //       setDeter(true);
  //     })
  //     .catch((e) => {
  //       alert(failed);
  //       console.log(e);
  //       setload(false);
  //       setDeter(false);
  //       toast.error("An error occurred");
  //     });
  // }, []);

  const VerifyPhoneNumber = () => {
    alert("go");
    setload(true);
    const otpValues = otp.reduce((partialSum, a) => partialSum + a);
    let id = searchParams.get("id");
    axios
      .get(`${baseurl}/phone/${id}/${otpValues}`)
      .then((res) => {
        console.log(res);
        setload(false);
        setDeter(true);
        setbool(true);
      })
      .catch((e) => {
        console.log(e);
        setload(false);
        setDeter(true);
        if (e.response.data == "Request new OTP") {
          toast.error("OTP expired, request for new OTP");
        } else {
          toast.error("Invalid OTP");
        }

        setOtp(new Array(6).fill(""));
      });
  };

  const Verifymobilescreen_PhoneNumber = () => {
    setload(true);
    const otpValues = otp.reduce((partialSum, a) => partialSum + a);
    let id = searchParams.get("id");
    axios
      .get(`${baseurl}/phone/${id}/${otpValues}`)
      .then((res) => {
        console.log(res);
        setload(false);
        setDeter(true);
        navigate("/mobile");
      })
      .catch((e) => {
        console.log(e);
        setload(false);
        setDeter(true);
        if (e.response.data == "Request new OTP") {
          toast.error("OTP expired, request for new OTP");
        } else {
          toast.error("Invalid OTP");
        }

        setOtp(new Array(6).fill(""));
      });
  };
  let currentOTPIndex = 0;
  let newOTP = [];
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [bool, setbool] = useState(false);

  const inputref = useRef(null);

  const handleOnChange = (e, i) => {
    const { value } = e.target;
    console.log(value);
    newOTP = [...otp];
    newOTP[currentOTPIndex] = value.substring(value.length - 1);

    if (!value) {
      setActiveOTPIndex(currentOTPIndex - 1);
    } else {
      setActiveOTPIndex(currentOTPIndex + 1);
    }
    setOtp(newOTP);
  };
  useEffect(() => {
    inputref.current?.focus();
  }, [activeOTPIndex]);

  const handleOnKeyDown = (e, index) => {
    currentOTPIndex = index;
    if (
      e.key == "e" ||
      e.key == "+" ||
      e.key == "-" ||
      e.key == "/" ||
      e.key == "."
    ) {
      e.preventDefault();
      e.target.value = "";
      newOTP[currentOTPIndex] = "";
    }
    if (e.key === "Tab") {
      e.preventDefault();
      setActiveOTPIndex(currentOTPIndex + 1);
    }
    if (e.key === "Backspace" && !e.target.value) {
      e.preventDefault();
      setActiveOTPIndex(currentOTPIndex - 1);
    }
    if (e.key === "Enter") {
      VerifyPhoneNumber("Enter");
    }
  };

  return (
    <div className="font-poppins">
      {load ? (
        <div className="absolute bg-cover bg-[#262626]/[0.8]  z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
          <RingLoader color="#009186" size={90} />
        </div>
      ) : (
        ""
      )}
      {bool ? (
        <div className="hidden sm:block">
          <div
            onClick={() => setbool(false)}
            className="bg-[#262626]/[0.8] h-screen w-screen absolute flex flex-col justify-center items-center  px-2 xss:px-4 xs:px-6 xsm:px-[5rem] sm:px-[6rem]  md:px-[8rem] lg:px-[18rem] xl:px-[25rem] "
          >
            <div className="flex-col flex justify-evenly items-center px-2 lg:px-20 bg-[#F8F8FF] rounded-[11.8392px] h-[25rem] xss:h-[22rem] xs:h-[25rem] md:h-[29rem] lg:h-[28rem] xl:h-[32rem] w-full ">
              <p className="lg:text-2xl md:text-4xl font-medium ">
                You Are All Set
              </p>
              <img src={pop} alt="" className="md:w-[12rem]  w-[5rem]" />
              <button
                onClick={() => navigate("/login")}
                className="w-full py-3 bg-[#009186] rounded-[8px] text-[#F8F8FF]"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col h-screen font-poppins justify-between text-[#262626] ">
        <NavBar class="fixed top-0" />

        {!deter ? (
          <div className="bg flex-auto sm:flex  items-center lg:justify-around flex-col  px-2 xss:px-4 xs:px-6 lg:px-[19rem]  xl:px-[25rem]  mxl:px-[27rem]"></div>
        ) : (
          <div className="bg flex-auto sm:flex  items-center  flex-col mt-[5rem]  px-2 xss:px-4 xs:px-6 md:px-0  sm:mt-[3.5rem] md:mt-[5rem]   xl:mt-[3rem] mxl:mt-[5rem]">
            <div className="w-fit  mt-[2rem] sm:  md:mt-[5rem]   xl:mt-[3rem] mxl:mt-[10rem]">
              <p className="text-center text-[rgb(248,248,255)] text-base sm:text-2xl lg:text-xl xl:text-[1.3rem] mxl:text-3xl font-semibold mt-4 sm:mt-8 lg:mt-8 xl:mt-2  ">
                Verify Your Phone Number
              </p>
              <div
                className=" h-[20rem] xs:h-[27rem] sm:h-[25rem] md:h-[35rem] lg:h-[70%] xl:h-[27rem] mxl:h-[36rem] shade  bg-[#F8F8FF] w-full  rounded-[11.8392px] mt-4 lg:mt-6 mxl:mt-[3rem] xl:mt-4 sm:w-[35rem]  md:w-[40rem] lg:w-[30rem] mxl:w-[40rem] px-4 py-2 sm:px-10 sm:py-8 md:px-20 md:py-14 lg:px-10 lg:py-10 lg:pt-[3rem] 
                xl:pt-[1rem]
                mxl:pt-5 "
              >
                <span className="h-[4rem] w-[4rem] mx-auto  mt-5 xs:mt-2 lg:mt-[2rem] xl:mt-[0rem]   xs:h-[5rem] xs:w-[5rem] md:h-[6rem] md:w-[6rem]   lg:h-[4rem] lg:w-[4rem] xl:w-[5rem] xl:h-[5rem] mxl:w-[6rem] mxl:h-[6rem]  flex justify-center items-center rounded-full bg-[#00913E]/[0.1] ">
                  {" "}
                  <img
                    src={mail}
                    alt=""
                    className="text-blue-700 h-[2rem] object-contain md:h-[2.5rem]  lg:h-[1.7rem] xl:h-[1.8rem] mxl:h-[3rem]"
                  />
                </span>
                <p className="text-center mt-2  lg:mt-4 text-xs md:text-xl mxl:text-xl lg:text-sm  xl:text-base font-medium ">
                  Enter the verification code that was sent to your phone number
                </p>

                <div className="flex  justify-between mt-6 lg:mt-2 xl:mt-2 mxl:mt-[2rem]">
                  {otp.map((arr, i) => (
                    <div className="" key={i}>
                      {" "}
                      <input
                        ref={i === activeOTPIndex ? inputref : null}
                        type="number"
                        pattern="[0-9]*"
                        className="h-16 w-8 xs:h-[3.5rem]  xs:w-[2.17rem] sm:w-[4rem] md:w-[4rem] md:h-[4rem]  lg:w-[3.5rem]   lg:h-[3.5rem]   mxl:w-[4.5rem] mxl:h-[4.5rem] border spin-button-none rounded-[8px] bg-transparent outline-none text-center font-semibold text-lg text-[#262626] font-poppins spin-button-none border-[#87ACA3] border-solid transition"
                        onChange={(e) => handleOnChange(e, i)}
                        onKeyDown={(e) => handleOnKeyDown(e, i)}
                        value={otp[i]}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col xl:h-[40%] justify-between items-center mt-4 lg:mt-[1%] xl:mt-[4%] sm:mb-5 md:mb-0">
                  <button
                    onClick={() => VerifyPhoneNumber()}
                    className=" hidden md:block px-12 py-2 lg:py-3 lg:px-14 lg:mt-[5%] lg:text-xs self-end  xl:px-12 bg-[#009186] text-white rounded-[8px] text-sm mt-2"
                  >
                    Submit
                  </button>
                  <button
                    onClick={() => Verifymobilescreen_PhoneNumber()}
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
              <button
                onClick={() => navigate("/login")}
                className=" self-end bg-[#87ACA3] text-xs md:text-sm  float-right text-[#262626] rounded-[8px] font-semibold lg:mt-3 mt-5 mb-8  xss:mt-3 xs:mt-3 px-12 py-3 mxl:py-5 xl:mt-3 mxl:mt-6 "
              >
                Back to Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyMail;
