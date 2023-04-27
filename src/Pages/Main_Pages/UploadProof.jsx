import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { IoMdCloudUpload } from "react-icons/io";
import { BiImageAlt } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import pdf from "../../assets/overlayimage/pdf.svg";
import pin from "../../assets/overlayimage/pin.svg";
import { useFormik } from "formik";
import { baseurl, uploadfileValidate } from "../../Service/validate_and_api";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { RingLoader } from "react-spinners";

const UploadProof = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const safeDocument = typeof document !== "undefined" ? document : {};
  const scrollBlocked = useRef();

  const { body } = safeDocument;
  const [load, setload] = useState(false);

  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/signup");
    }

    formik.setValues({
      transactionID: state.transaction,
      file: formik.values.file,
      fileName: formik.values.fileName,
    });
  }, []);

  const wrapperRef = useRef();
  const hiddenFileInput = useRef(null);
  const [overlayUpload, setoverlayUpload] = useState(false);
  const [filename, setFilename] = useState("");

  const handleClick = () => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    let fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    setFilename(fileUploaded.name);
    const reader = new FileReader();
    reader.readAsDataURL(fileUploaded);
    reader.onload = () => {
      console.log(reader.result);

      formik.setValues({
        transactionID: formik.values.transactionID,
        file: reader.result.toString(),
        fileName: fileUploaded.name,
      });
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
      reader.result.toString();

      formik.setValues({
        transactionID: formik.values.transactionID,
        file: reader.result.toString(),
        fileName: file[0].name,
      });
    };
  };
  const formik = useFormik({
    initialValues: { transactionID: "", file: "", fileName: "" },
    validationSchema: uploadfileValidate,
    onSubmit: (values) => {
      window.scrollTo({ top: 0, left: 0 });
      body.style.overflow = "hidden";
      setload(true);

      axios
        .patch(
          `${baseurl}/transactions/${state.transaction}/transaction/`,
          {
            paymentProof: values.file,
          },
          {
            headers: {
              Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setload(false);
          body.style.overflow = "";
          localStorage.setItem("filetoupload", JSON.stringify(values));
          navigate(-1);
        })
        .catch((e) => {
          console.log(e);
          body.style.overflow = "";
          setload(false);
          if (e.name == "AxiosError") {
            toast.error("Network Error");
          } else if (e.response.data.detail == "Invalid token.") {
            localStorage.removeItem("LoggedIntoken");
            toast.warning("Session expired  login again", {
              toastId: 1,
            });
            navigate("/login");
          } else {
            toast.error("An error occurred");
          }
        });
      // localStorage.setItem("filetoupload", JSON.stringify(values));
      // navigate("/progress");
    },
  });
  const remove = () => {
    formik.setValues({
      transactionID: formik.values.transactionID,
      file: "",
    });
    setFilename("");
  };
  console.log(formik.values);
  return (
    <div className="font-poppins">
      {load ? (
        <div className="absolute top-0 bg-cover bg-[#262626]/[0.8]  z-[90] h-full overla w-full flex  justify-center items-center text-3xl">
          <RingLoader color="#009186" size={90} />
        </div>
      ) : (
        ""
      )}
      <div
        onDragOver={preventOpeningFile}
        onDragLeave={preventOpeningFile}
        onDrop={preventOpeningFile}
        className=" font-poppins"
      >
        <NavBar class="top-0 fixed z-[20]" />
        <div className="mt-[6rem] flex justify-between mxl:pt-32 2xl:px-[10rem] xl:px-[5rem] lg:px-10  px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8">
          <button
            onClick={() => navigate(-1)}
            className=" text-sm px-[3rem] py-[0.7rem]  lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3] "
          >
            Back
          </button>
          <div className="flex items-center justify-between font-semibold text-sm">
            <p className=" mr-3 sm:mr-20 text-[#009186] text-xs  sm:text-base cursor-pointer hidden lg:flex">
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
            <img
              src={bell}
              alt=""
              className="object-contain w-[1.6rem] sm:w-[2.3rem] md:w-[2.5rem] lg:hidden "
            />
          </div>
        </div>
        <p className="text-xl sm:text-[1.5rem] xl:text-[1.7rem] font-semibold text-center mt-8">
          Upload Proof of payment
        </p>
        <form
          onSubmit={formik.handleSubmit}
          className="w-full px-10 lg:px-[10rem] xl:px-[19rem] mt-8 sm:mt-10  h-full "
        >
          <div
            onClick={() => handleClick()}
            ref={wrapperRef}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            // onDragLeave={dragLeave}
            onDrop={fileDrop}
            className={
              "h-[18rem] sm:h-[20rem] border-2 mxl:border-4 mx-auto border-dashed border-[#87ACA3] relative w-full rounded-[11.8392px]"
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
            <span className="flex justify-center items-center rounded-full bg-[#87ACA3] h-14 w-14 md:h-16 md:w-16 lg:h-14 lg:w-14 mx-auto mt-8">
              <IoMdCloudUpload className="text-3xl md:text-4xl lg:text-3xl text-[#2B7C85]" />
            </span>
            <input
              type="file"
              className="hidden"
              
              ref={hiddenFileInput}
              onChange={handleChange}
            />
            <p className="mt-4 lg:flex justify-center hidden">
              <span> Drag and drop file here </span>
              <span className="text-[#009186]">-or- Upload</span>
            </p>
            <p className="lg:hidden mt-4 text-center font-semibold text-[#009186]">
              Upload
            </p>
            <div className="flex justify-around mt-16 sm:mt-24">
              <span className="flex flex-col">
                <p className="font-medium text-sm sm:text-base">Images </p>
                <p className="flex mt-3 items-center">
                  <BiImageAlt className="text-[#2B7C85] text-2xl" />
                  <p className=" ml-3 mr-2 text-xs">JPEG</p>
                  <p className="text-xs">PNG</p>
                </p>
              </span>
              <span className="flex flex-col">
                <p className="font-medium text-sm sm:text-base">Documents </p>
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
              disabled
              placeholder="Enter transaction ID"
              className="border-2 border-[#87ACA3] placeholder:text-[#87ACA3] text-xs w-[17rem] sm:w-[20rem] px-4 py-4 ml-[-1rem] sm:ml-0 sm:py-3 mt-8 rounded-lg focus:outline-none focus:ring-0 focus:border-[#87ACA3]"
              onChange={formik.handleChange}
              value={formik.values.transactionID}
            />
          </div>
          <div
            className={`flex ${
              formik.values.file.length == 0 ? "justify-end" : "justify-between"
            } items-center mb-10 mt-10`}
          >
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

                <MdDeleteForever
                  onClick={() => remove()}
                  className="text-[#D80010] text-lg cursor-pointer"
                />
              </div>
            ) : (
              ""
            )}

            <button
              type="submit"
              className={
                formik.values.file.length == 0 ||
                formik.values.transactionID.length == 0
                  ? "px-[4rem] py-[0.7rem] hidden sm:block lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#C4C4C4] font-semibold text-sm "
                  : "px-[4rem] py-[0.7rem] hidden sm:block lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#009186] text-[#F8F8FF] font-semibold text-sm"
              }
            >
              Done
            </button>
          </div>
          <button
            type="submit"
            className={
              formik.values.file.length == 0 ||
              formik.values.transactionID.length == 0
                ? "px-[4rem] py-[0.7rem]  w-full mt-2 sm:hidden  lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#C4C4C4] font-semibold text-sm "
                : "px-[4rem] py-[0.7rem] w-full mt-2 sm:hidden  lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#009186] text-[#F8F8FF] font-semibold text-sm"
            }
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProof;
