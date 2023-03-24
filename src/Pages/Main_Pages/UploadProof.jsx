import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
const UploadProof = () => {
  return (
    <div>
      <div className=" font-poppins">
        <NavBar class="top-0 fixed z-[20]" />
        <div className="pt-20 flex justify-between mxl:pt-32 2xl:px-[10rem] xl:px-[5rem] lg:px-10  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8">
          <button className=" lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3] font-semibold">
            Back
          </button>
          <div className="flex items-center font-semibold text-sm">
            <p className="mr-20 text-[#009186]  cursor-pointer">
              Upload proof of payment
            </p>
            <div
              onClick={() => alert("Notification")}
              className=" text-[#009186] items-center cursor-pointer hidden lg:flex "
            >
              <img
                src={bell}
                alt=""
                className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
              />
              <p className="font-semibold mxl:text-xl">Notifications</p>
            </div>
          </div>
        </div>
        <p className="text-[30px] font-semibold text-center mt-10">
          Upload Proof of payment
        </p>
        <div className="bg-red-100 w-full px-20">
          <div className="h-[20rem] border-"></div>
        </div>
      </div>
    </div>
  );
};

export default UploadProof;
