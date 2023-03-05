import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";

const NewPassword = () => {
  return (
    <div className="">
      <div className="flex flex-col h-screen  font-poppins justify-between ">
        <NavBar />
        <div className="bg flex-auto flex flex-col ">
          <h1 className="text-center text-[#F8F8FF] text-base mxl:text-3xl mxl:mt-10 font-semibold ">
            Create new password
          </h1>
          <div className="mx-auto bg-[#F8F8FF] w-[40rem] h-[25rem] mt-[5rem]  shade">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
