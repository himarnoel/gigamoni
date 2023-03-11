import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/Send_Money/map.svg";
import img2 from "../../assets/Send_Money/hand.png";
const Send = () => {
  return (
    <div className="  flex flex-col h-screen font-poppins">
      <NavBar class="fixed top-0 z-[90]" />
      <div className=" flex  flex-auto bg-[#006159] lg:mt-[3.5rem] mxl:mt-[5.6rem]">
        <div className="lg:w-[357px] xl:w-[480px] mxl:w-[622px]  bg-[#2B7C85] flex flex-col justify-between  items-center">
          <div className="  relative xl:w-[30rem] mxl:w-full ">
            <img src={img1} alt="" className=" object-cover  " />
            <span className=" absolute mxl:top-[10rem] text-white text-[2.4rem] mxl:text-[3rem] top-[6rem] font-semibold w-[25rem] mxl:w-[33rem] right-0">
            A faster way to make international Payments
            </span>
          </div>
          <img
            src={img2}
            alt=""
            className=" object-contain lg:w-[19rem] xl:w-[16rem] mxl:w-full "
          />
        </div>{" "}
        <div className=""> </div>
      </div>
    </div>
  );
};

export default Send;
