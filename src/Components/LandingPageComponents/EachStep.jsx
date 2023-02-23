import React from "react";

const EachStep = (props) => {
  return (
    <div className=" border   border-[#87ACA3] text-[#262626] shadow shadow-[#009186]/[0.2] rounded-full w-[8rem] xs:h-[8.7rem] xs:w-[8.7rem] xss:h-[10.3rem] xss:w-[10.3rem] sm:h-[15rem] sm:w-[15rem] md:h-[14rem]  text-center h-[8rem] md:w-[14rem] bg-[#F8F8FF] flex flex-col justify-around md:justify-center items-center ">
      <div
        className={`${props.class} flex flex-col justify-center items-center`}
      >
        {" "}
        <span className="font-bold text-[14px] mt-2">{props.number}</span>
        <span className="md:mt-5  xs:w-[6rem] xss:w-[8rem] sm:w-fit">
          {props.info}
        </span>
      </div>
      <img src={props.img} alt="" className={props.class2} />
    </div>
  );
};

export default EachStep;
