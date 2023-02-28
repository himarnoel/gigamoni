import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";

const CheckMail = () => {
  return (
    <div>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="bg flex-auto">
          <p className="text-center text-[#F8F8FF] text-xl font-semibold mt-8">
            Check your Email
          </p>
          <div className="flex flex-col items-center h-[80%] w-[50%] mx-auto">
            <div className="mx-auto bg-[#F8F8FF] rounded-[11.8392px] w-full h-full mt-10 shadow-md">
              dd
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
