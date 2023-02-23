import React from "react";

const Step = (props) => {
  return (
    <div className=" border border-[ #87ACA3] rounded-full h-[14rem]  w-[14rem] bg-[#F8F8FF] flex flex-col justify-center items-center ">
      <div className="text-center mb-10 text-sm">
        {" "}
        <p>{props.number}</p>
        <p>{props.info}</p>
      </div>
      <img src={props.img} alt="" className="w-[6rem] object-contain" />
    </div>
  );
};

export default Step;
