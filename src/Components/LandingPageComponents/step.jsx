import React from "react";

const Step = (props) => {
  return (
    <div className=" border border-[ #87ACA3] rounded-full h-[18rem]  w-[18rem] bg-[#F8F8FF] flex flex-col justify-center items-center ">
      <div className="text-center mb-10">
        {" "}
        <p>{props.number}</p>
        <p>{props.info}</p>
      </div>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Step;
