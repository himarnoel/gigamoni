import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { IoMdCloudUpload } from "react-icons/io";
import { BiImageAlt } from "react-icons/bi";
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
        <p className="text-[1.7rem] font-semibold text-center mt-6">
          Upload Proof of payment
        </p>
        <div className="w-full px-20 mt-10">
          <div className="h-[20rem] border-2 mxl:border-4 mx-auto border-dashed border-[#87ACA3] w-[40rem] rounded-[11.8392px]">
            <span className="flex justify-center items-center rounded-full bg-[#87ACA3] h-14 w-14 mx-auto mt-5">
              <IoMdCloudUpload className="text-3xl text-[#2B7C85]" />
            </span>
            <p className="mt-4 flex justify-center">
              <span> Drag and drop file here </span>
              <span className="text-[#009186]">-or- Upload</span>
            </p>
            <div className="flex justify-center mt-20">
              <span className="flex flex-col">
                <p className="font-medium">Images </p>
                <p className="flex mt-3">
                  <BiImageAlt />
                  <p className="text-sm ml-3 mr-2">JPEG</p>
                  <p className="text-sm">PNG</p>
                </p>
              </span>
              <span className="flex flex-col ml-10">
                <p className="font-medium">Documents </p>
                <p className="flex mt-3">
                  <BiImageAlt />
                  <p className="text-sm ml-3 mr-2">JPEG</p>
                  <p className="text-sm">PNG</p>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProof;
