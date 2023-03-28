import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/overlayimage/one.svg";
import img2 from "../../assets/overlayimage/vector.svg";
const PaymentModeMobile = () => {
  return (
    <div className="flex lg:hidden justify-between h-screen font-poppins">
      <NavBar />
      <div className="bg flex-auto ">
        <div className="w-full pt-12 flex justify-center items-center h-screen px-10 ">
          <div className="bg-[#F8F8FF] h-[25rem] sm:h-[50rem] md:h-[60rem] rounded-[11.8392px] text-xs mxl:text-sm w-full py-8 px-4 sm:px-14  font-semibold">
            <p className="text-center text-base  sm:text-lg">Select Mode Of Payment</p>
            <div className="flex pl-3 pb-3 mt-10 md:mt-20 mxl:mt-14 items-center border-b border-[#87ACA3] text-[#000000] font-medium">
              {" "}
              <img src={img2} alt="" className="sm:w-[2.5rem] object-contain" />
              <p className="ml-4  sm:text-lg">Pay with Bank Transfer</p>
            </div>
            <div className="flex pl-3 pb-3 mt-10 md:mt-20 mxl:mt-12 items-center border-b border-[#87ACA3] text-[#000000] font-medium">
              {" "}
              <img src={img1} alt="" className="sm:w-[2.5rem] object-contain" />
              <p className="ml-4  sm:text-lg">Pay with debit card</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModeMobile;
