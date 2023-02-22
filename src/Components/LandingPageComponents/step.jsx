import React from "react";

const step = () => {
  return (
    <div className=" border border-[ #87ACA3] rounded-full h-[18rem]  w-[18rem] bg-[#F8F8FF] flex flex-col justify-center items-center ">
      <div className="text-center mb-10">
        {" "}
        <p>Step 1</p>
        <p>Enter senders details</p>
      </div>
      <img src={First} alt="" />
    </div>
  );
};

export default step;
