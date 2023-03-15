import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import img4 from "../../assets/Send_Money/noacct.svg";
import { Navigate, useNavigate } from "react-router-dom";

const NoAcctModal = () => {
  const navigate = useNavigate();

  return (
    <div>
      {" "}
      <div className="h-screen flex flex-col font-poppins">
        <NavBar />
        <div className="bg-[#006159] flex-auto flex justify-center items-center pt-10 px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8 ">
          <div
            className="bg-[#F8F8FF] w-full relative rounded-[16px] h-[35rem] flex flex-col items-center justify-between py-10 px-10
"
          >
            <div className="flex flex-col items-center">
              <img src={img4} alt="" className="object-contain w-[11rem]" />

              <h4 className="text-sm w-[19rem] text-center mt-4">
                You have to create an Account in order to proceed
              </h4>
            </div>
            <button
              onClick={() => navigate("/signup")}
              className=" text-[#F8F8FF] rounded-lg text-sm bg-[#009186] w-full mt-0 py-4"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoAcctModal;
