import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";

const Forgot = () => {
  return (
    <div className="font-poppins">
      <div className="flex justify-between flex-col h-screen ">
        <NavBar />
        <div className="flex-auto bg flex flex-col px-[23rem]">
          <h1 className="text-[#F8F8FF] text-2xl font-semibold mx-auto mt-5">
            Forgot Password
          </h1>
          <div className="rounded-[11.8392px] bg-[#F8F8FF] h-[50%] w-full mt-10 px-10">
            <p className="">
              Enter your Email address below we’ll send an email with
              instructions on how to reset your password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
