import React from "react";

const Step = (props) => {
  return (
    <div className=" border  border-[#87ACA3] text-[#262626] shadow shadow-[#009186]/[0.2] rounded-full w-[8rem] md:h-[14rem]  text-center h-[8rem] md:w-[14rem] bg-[#F8F8FF] flex flex-col justify-around md:justify-center items-center ">
      <div className={props.class}>
        {" "}
        <p className="font-bold text-[14px] mt-2">{props.number}</p>
        <p className="md:mt-5   ">{props.info}</p>
      </div>
      <img src={props.img} alt="" className={props.class2} />
    </div>
  );
};

export default Step;
