import React, { useRef, useState } from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { IoMdCloudUpload } from "react-icons/io";
import { BiImageAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import pdf from "../../assets/overlayimage/pdf.svg";
import pin from "../../assets/overlayimage/pin.svg";
import { useFormik } from "formik";
import { uploadfileValidate } from "../../Service/validate_and_api";

const UploadProof = () => {
  const wrapperRef = useRef();
  const hiddenFileInput = useRef(null);
  const [overlayUpload, setoverlayUpload] = useState(false);
  const [filename, setFilename] = useState("");
  const [file, setFile] = useState("");
  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    let fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    const reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = () => {
      console.log(reader.result);
      setFile(reader.result.toString());
    };
  };

  const dragOver = (e) => {
    e.preventDefault();
    setoverlayUpload(true);
  };
  const dragLeave = (e) => {
    e.preventDefault();
    setoverlayUpload(false);
  };

  const dragEnter = (e) => {
    e.preventDefault();
    setoverlayUpload(true);
  };

  const preventOpeningFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const fileDrop = (e) => {
    e.preventDefault();
    setoverlayUpload(false);
    const file = e.dataTransfer.files;
    console.log(file[0].name);
    setFilename(file[0].name);
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      console.log(reader.result.toString());
      setFile(reader.result.toString());
    };
  };
  const formik = useFormik({
    initialValues: { transactionID: "", file: "" },
    validationSchema: uploadfileValidate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <div
        onDragOver={preventOpeningFile}
        onDragLeave={preventOpeningFile}
        onDrop={preventOpeningFile}
        className=" font-poppins"
      >
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
        <form
          onSubmit={formik.handleSubmit}
          className="w-full px-[19rem] mt-10 "
        >
          <div
            onClick={() => handleClick()}
            ref={wrapperRef}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            // onDragLeave={dragLeave}
            onDrop={fileDrop}
            className={
              "h-[20rem] border-2 mxl:border-4 mx-auto border-dashed border-[#87ACA3] relative w-full rounded-[11.8392px]"
            }
          >
            <div
              onDragLeave={dragLeave}
              className={
                overlayUpload
                  ? "absolute top-0  w-full bg-[#87ACA3]/[0.8] h-full"
                  : "hidden"
              }
            ></div>
            <span className="flex justify-center items-center rounded-full bg-[#87ACA3] h-14 w-14 mx-auto mt-8">
              <IoMdCloudUpload className="text-3xl text-[#2B7C85]" />
            </span>
            <input
              type="file"
              style={{ display: "none" }}
              ref={hiddenFileInput}
              onChange={handleChange}
            />
            <p className="mt-4 flex justify-center">
              <span> Drag and drop file here </span>
              <span className="text-[#009186]">-or- Upload</span>
            </p>
            <div className="flex justify-center mt-24">
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
              id="transactionID"
              type="text"
              placeholder="Enter transaction ID"
              className="border-2 border-[#87ACA3] placeholder:text-[#87ACA3] text-xs w-[20rem] px-4 py-3 mt-8 rounded-lg focus:outline-none focus:ring-0 focus:border-[#87ACA3]"
              onChange={formik.handleChange}
              value={formik.values.transactionID}
            />
          </div>
          <div className="flex justify-between items-center mb-32 mt-10">
            {filename ? (
              <div className={"flex items-center"}>
                <button className="border-2 rounded-lg px-8  py-2 flex  text-sm items-center border-[#87ACA3] text-[#87ACA3] mr-5">
                  <img
                    src={pin}
                    alt=""
                    className="object-contain w-[0.9rem] mr-2"
                  />{" "}
                  <span>{filename}</span>
                </button>

                <MdDeleteForever className="text-[#D80010] text-lg cursor-pointer" />
              </div>
            ) : (
              ""
            )}
            <button
              className={
                formik.isValid
                  ? " lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#C4C4C4] font-semibold text-sm"
                  : " lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#009186] font-semibold text-sm"
              }
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadProof;
