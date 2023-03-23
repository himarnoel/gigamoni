import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { BiTransfer } from "react-icons/bi";
import { RiArrowDownSLine } from "react-icons/ri";
import { Formik, useFormik } from "formik";
import { pendingValidate } from "../../Service/validate_and_api";
const Pending = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      country: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: pendingValidate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);
  return (
    <div className=" bg-[#F8F8FF] font-poppins ">
      <NavBar />
      <div className=" 2xl:px-[10rem] xl:px-[5rem] lg:px-10 w-full  pt-6">
        <div className="flex justify-between items-center">
          <button className=" lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3]">
            Back
          </button>
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
        <div className="flex justify-between w-full pr-10 mt-8">
          <div className=" w-[32rem] flex flex-col justify-between  h-[4rem]">
            {" "}
            <div className="flex justify-between">
              <p className="dfas">Transaction ID: 1234567890987</p>
              <p className="flex">
                <span className="mr-1"> Status:</span>{" "}
                <span className="text-[#5D5FEF]">Pending</span>
              </p>
            </div>
            <div className="flex justify-between ">
              {" "}
              <p className="d">Date: 01/01/2023 11:30am</p>
              {/* <p className="ss">Service Fee: $10</p> */}
            </div>
          </div>
          <div className="flex flex-row-reverse lg:flex-row justify-between items-center">
            <span>
              <p className="text-[#175873] text-[0.59rem] ">Local Currency</p>
              <span className="flex ">
                <span className="relative z-0">
                  <select
                    type="text"
                    id="receivingcurrency"
                    className={
                      // formik.errors.receivingcurrency &&
                      // formik.touched.receivingcurrency
                      //   ? " font-poppins  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-red-500 border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                      //   :
                      " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070] border-r   rounded-[6px] border-solid border-[#707070] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      //placeholder=" "
                    }
                    //   onChange={formik.handleChange}
                    //   value={formik.values.receivingcurrency}
                    //   onBlur={formik.handleBlur}
                    placeholder="receivingcountry"
                  >
                    <option value="NGN" selected>
                      NGN
                    </option>

                    <option value="Pounds">Pounds</option>
                  </select>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                </span>
                <input
                  type="number"
                  id="sendamount"
                  placeholder="00000"
                  className={
                    //   formik.errors.sendamount && formik.touched.sendamount
                    //     ? " font-poppins spin-button-none pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#009186] text-[#009186]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    //     :
                    " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                  }
                  //   onChange={formik.handleChange}
                  //   value={formik.values.sendamount}
                  //   onBlur={formik.handleBlur}
                />
              </span>
            </span>
            <BiTransfer className="text-3xl text-[#707070] mt-6" />
            <span>
              <p className="text-[#175873] text-[0.59rem] ">They Receive</p>
              <span className="flex ">
                <span className="relative z-0">
                  <select
                    type="text"
                    id="receivingcurrency"
                    className={
                      // formik.errors.receivingcurrency &&
                      // formik.touched.receivingcurrency
                      //   ? " font-poppins  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-red-500 border-[4px] border-r  rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                      //   :
                      " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#707070]   rounded-[6px] border-solid border-[#707070] border-[4px] border-r rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                      //placeholder=" "
                    }
                    //   onChange={formik.handleChange}
                    //   value={formik.values.receivingcurrency}
                    //   onBlur={formik.handleBlur}
                    placeholder="receivingcountry"
                  >
                    <option value="USD" selected>
                      USD
                    </option>

                    <option value="Pounds">Pounds</option>
                  </select>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#707070]" />
                </span>
                <input
                  type="number"
                  id="sendamount"
                  placeholder="00000"
                  className={
                    //   formik.errors.sendamount && formik.touched.sendamount
                    //     ? " font-poppins spin-button-none pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#009186] text-[#009186]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    //     :
                    " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#707070] text-[#707070]  rounded-[6px] border-solid border-[#707070] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#707070]"
                  }
                  //   onChange={formik.handleChange}
                  //   value={formik.values.sendamount}
                  //   onBlur={formik.handleBlur}
                />
              </span>
            </span>
          </div>
        </div>
    
      </div>
    </div>
  );
};

export default Pending;
