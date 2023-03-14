import React from "react";
import img3 from "../../assets/Send_Money/warning.png";
import NavBar from "./../../Components/AppComponents/NavBar";
import { useNavigate } from "react-router-dom";
const LessThan = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col font-poppins">
      <NavBar />
      <div className="bg-[#006159] flex-auto flex justify-center items-center pt-10 px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8 ">
        <div
          className="bg-[#F8F8FF] w-full relative rounded-[16px] h-[35rem] flex flex-col items-center justify-between py-10 px-10
  "
        >
          <div className="flex flex-col items-center">
            <img src={img3} alt="" className="object-contain w-[11rem]" />

            <h4 className="text-sm w-[19rem] text-center mt-4">
              Your transfer amount is below <b>$100</b>. <br /> Amount needs to
              be $100 or more
            </h4>
          </div>
          <button
            onClick={() => navigate("/send")}
            className=" text-[#F8F8FF] rounded-lg text-sm bg-[#009186] w-full mt-0 py-4"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default LessThan;
