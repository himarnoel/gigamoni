import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { IoMdCloudUpload } from "react-icons/io";
import { BiImageAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import pdf from "../../assets/overlayimage/pdf.svg";
import pin from "../../assets/overlayimage/pin.svg";

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
        <div className="w-full px-[19rem] mt-10 ">
          <div className="h-[20rem] border-2 mxl:border-4 mx-auto border-dashed border-[#87ACA3] w-full rounded-[11.8392px]">
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
                <p className="flex mt-3 items-center">
                  <BiImageAlt className="text-[#2B7C85] text-2xl" />
                  <p className=" ml-3 mr-2 text-xs">JPEG</p>
                  <p className="text-xs">PNG</p>
                </p>
              </span>
              <span className="flex flex-col ml-10">
                <p className="font-medium">Documents </p>
                <p className="flex mt-3 items-center">
                  <img src={pdf} alt="" className="w-[1.2rem]" />
                  <p className="text-xs ml-3 mr-2">PDF</p>
                </p>
              </span>
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Enter transaction ID"
              className="border-2 border-[#87ACA3] placeholder:text-[#87ACA3] text-xs w-[20rem] px-4 py-3 mt-8 rounded-lg focus:outline-none focus:ring-0 focus:border-[#87ACA3]"
            />
          </div>
          <div className="flex justify-between items-center mb-32 mt-10">
            <div className={"flex items-center"}>
              <button className="border-2 rounded-lg px-8  py-2 flex  text-sm border-[#87ACA3] text-[#87ACA3] mr-5">
                <img src={pin} alt="" className="object-contain w-[20rem]" />{" "}
                <span>File 1234576</span>
              </button>
              <MdDeleteForever className="text-[#D80010] text-lg cursor-pointer" />
            </div>

            <button className=" lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#C4C4C4] font-semibold text-sm">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadProof;
