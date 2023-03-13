import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/Send_Money/map.svg";
import img2 from "../../assets/Send_Money/hand.png";
import { sendmoney } from "../../Service/validate_and_api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
const Send = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      country: "",
      receivingcountry: "",
      sendingcurrency: "",
      reciveingcurrency: "",
    },
    validationSchema: sendmoney,
    onSubmit: (values) => {},
  });
  return (
    <div>
      {" "}
      <NavBar class="fixed top-0 z-[90]" />
      <div className=" hidden lg:flex flex-col h-screen font-poppins">
        <div className=" flex  flex-auto bg-[#006159] lg:mt-[3.5rem]  mxl:mt-[5.6rem]">
          <div className="lg:w-[50rem] xl:w-[480px] mxl:w-[980px]  bg-[#2B7C85] flex flex-col justify-between  items-center">
            <div className="  relative xl:w-[30rem] mxl:w-full ">
              <img src={img1} alt="" className=" object-cover  " />
              <span className=" absolute mxl:top-[10rem] text-white text-[2.1rem] mxl:text-[3rem] top-[6rem] font-semibold w-[25rem] mxl:w-[33rem] right-0">
                A faster way to make international Payments
              </span>
            </div>
            <img
              src={img2}
              alt=""
              className=" object-contain lg:w-[15rem] xl:w-[18rem] mxl:w-full "
            />
          </div>{" "}
          <div className="w-full  flex flex-col justify-center items-center">
            <p className="text-[#F8F8FF] text-2xl text-center font-semibold mt-8">
              Send Money
            </p>
            <form
              onSubmit={formik.handleSubmit}
              className="bg-[#F8F8FF] rounded-lg pl-5 pr-10 p py-8 w-[28rem] mxl:w-[32rem] gap-y-4  mb-8 xl:gap-y-3
            mxl:gap-y-10
            mx-auto mt-[1.2rem] text-[#262626] grid"
            >
              <p>Transaction Details</p>
              <div className="relative z-0 mt-0">
                <input
                  type="text"
                  id="name"
                  className={
                    formik.errors.name && formik.touched.name
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="name"
                  className={
                    formik.errors.name && formik.touched.name
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Name
                </label>
                {formik.errors.name && formik.touched.name ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.name}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="relative z-0 ">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="email"
                  className={
                    formik.errors.email && formik.touched.email
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Email
                </label>
                {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.email}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 ">
                <input
                  type="text"
                  id="phonenumber"
                  className={
                    formik.errors.phonenumber && formik.touched.phonenumber
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="phonenumber"
                  className={
                    formik.errors.phonenumber && formik.touched.phonenumber
                      ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  }
                >
                  Phone number
                </label>
                {formik.errors.phonenumber && formik.touched.phonenumber ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.phonenumber}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <div className="relative z-0 ">
                <select
                  type="text"
                  id="country"
                  className={
                    formik.errors.country && formik.touched.country
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    //placeholder=" "
                  }
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  onBlur={formik.handleBlur}
                  placeholder="country"
                >
                  <option value=""></option>

                  <option value="Nigeria">Nigeria</option>
                </select>
                <label
                  for="country"
                  className={
                    formik.errors.country && formik.touched.country
                      ? "absolute text-xs xl:text-base mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                      : "absolute text-xs xl:text-base mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                  }
                >
                  Country
                </label>
                <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
                {formik.errors.country && formik.touched.country ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.country}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="relative z-0 ">
                <select
                  type="text"
                  id="receivingcountry"
                  className={
                    formik.errors.receivingcountry &&
                    formik.touched.receivingcountry
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    //placeholder=" "
                  }
                  onChange={formik.handleChange}
                  value={formik.values.receivingcountry}
                  onBlur={formik.handleBlur}
                  placeholder="receivingcountry"
                >
                  <option value=""></option>

                  <option value="Nigeria">Nigeria</option>
                </select>
                <label
                  for="receivingcountry"
                  className={
                    formik.errors.receivingcountry &&
                    formik.touched.receivingcountry
                      ? "absolute text-xs xl:text-base mxl:text-sm font-poppins text-red-500 duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                      : "absolute text-xs xl:text-base mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-0 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                  }
                >
                  Receiving Country
                </label>
                <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
                {formik.errors.receivingcountry &&
                formik.touched.receivingcountry ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.receivingcountry}
                  </p>
                ) : (
                  ""
                )}
              </div>{" "}
              <p className="text-sm font-medium mt-3">Amount</p>
              <div className="flex justify-between items-center mt-2">
                <span>
                  <p className="text-[#175873] text-[0.59rem] ">They Receive</p>
                  <span className="flex ">
                    <span className="relative z-0">
                      <select
                        type="text"
                        id="sendingcurrency"
                        className={
                          formik.errors.sendingcurrency &&
                          formik.touched.sendingcurrency
                            ? " font-poppins  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-red-500 border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                            : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                          //placeholder=" "
                        }
                        onChange={formik.handleChange}
                        value={formik.values.sendingcurrency}
                        onBlur={formik.handleBlur}
                        placeholder="receivingcountry"
                      >
                        <option value="USD" selected>
                          USD
                        </option>

                        <option value="Pounds">Pounds</option>
                      </select>
                      <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#009186]" />
                    </span>
                    <input
                      type="number"
                      value="00000"
                      className=" font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent text-[#009186]  rounded-[6px] border-solid border-[#009186] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                    />
                  </span>
                </span>
                <BiTransfer className="text-3xl text-[#009186] mt-6" />
                <span>
                  <p className="text-[#175873] text-[0.59rem] ">
                    Local Currency
                  </p>
                  <span className="relative z-0 ">
                    {" "}
                    <select
                      type="text"
                      id="reciveingcurrency"
                      className={
                        formik.errors.reciveingcurrency &&
                        formik.touched.reciveingcurrency
                          ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                          : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        //placeholder=" "
                      }
                      onChange={formik.handleChange}
                      value={formik.values.reciveingcurrency}
                      onBlur={formik.handleBlur}
                      placeholder="receivingcountry"
                    >
                      <option value="NGN" selected>
                        NGN
                      </option>

                      <option value="Pounds">Pounds</option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-2 right-0 flex items-center px-2 text-[#009186]" />
                  </span>
                </span>
                {/*
                 */}
                {/*
                 */}
              </div>
              <button
                onClick={() => navigate("/signup")}
                className=" text-[#F8F8FF] rounded bg-[#009186] w-full mt-0 py-2"
              >
                continue
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Mobile View */}
      <div
        className="bg-[#006159] lg:hidden w-full mt-[5rem] md:mt-[4rem] flex flex-col h-screen 
      "
      >
        <div className="bg-[#2B7C85]">
          <p className="text-[#F8F8FF] text-2xl sm:text-3xl text-center font-semibold pt-1 md:pt-7">
            Send Money
          </p>
          <span className="relative">
            {" "}
            <span className=" absolute  text-white text-[1.8rem] text-center top-[2rem] md:top-[3rem] sm:left-[9rem] md:left-[14rem] font-semibold w-[25rem]   z-[10]">
              A faster way to make international Payments
            </span>
            <img
              src={img1}
              alt=""
              className="mt-3 object-contain w-[20rem] sm:w-[27rem] md:w-[28rem]"
            />
          </span>
          <img
            src={img2}
            alt=""
            className="mt-4 object-contain w-[9rem] sm:w-[10rem] mx-auto"
          />
        </div>
        <div className="w-full bg-[#006159]  px-2 xss:px-4 xs:px-6 sm:px-[4rem] flex-auto    ">
          <form
            onSubmit={formik.handleSubmit}
            className="bg-[#F8F8FF] rounded-lg px-4 py-8 w-full mxl:w-[32rem] gap-y-4  sm:mt-10 mb-8 md:gap-y-10 flex-auto
            mxl:gap-y-10 sm:px-10
            mx-auto mt-[1.2rem] text-[#262626] grid"
          >
            {" "}
            <p>Transaction Details</p>
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="name"
                className={
                  formik.errors.name && formik.touched.name
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              <label
                for="name"
                className={
                  formik.errors.name && formik.touched.name
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Name
              </label>
              {formik.errors.name && formik.touched.name ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="relative z-0 ">
              <input
                type="email"
                id="email"
                name="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              <label
                for="email"
                className={
                  formik.errors.email && formik.touched.email
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Email
              </label>
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.email}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 ">
              <input
                type="text"
                id="phonenumber"
                className={
                  formik.errors.phonenumber && formik.touched.phonenumber
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={formik.handleChange}
                value={formik.values.phonenumber}
                onBlur={formik.handleBlur}
              />
              <label
                for="phonenumber"
                className={
                  formik.errors.phonenumber && formik.touched.phonenumber
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Phone number
              </label>
              {formik.errors.phonenumber && formik.touched.phonenumber ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.phonenumber}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 ">
              <select
                type="text"
                id="country"
                className={
                  formik.errors.country && formik.touched.country
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  //placeholder=" "
                }
                onChange={formik.handleChange}
                value={formik.values.country}
                onBlur={formik.handleBlur}
                placeholder="country"
              >
                <option value=""></option>

                <option value="Nigeria">Nigeria</option>
              </select>
              <label
                for="country"
                className={
                  formik.errors.country && formik.touched.country
                    ? "absolute text-xs xl:text-base mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                    : "absolute text-xs xl:text-base mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                }
              >
                Country
              </label>
              <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
              {formik.errors.country && formik.touched.country ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.country}
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="relative z-0 ">
              <select
                type="text"
                id="receivingcountry"
                className={
                  formik.errors.receivingcountry &&
                  formik.touched.receivingcountry
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  //placeholder=" "
                }
                onChange={formik.handleChange}
                value={formik.values.receivingcountry}
                onBlur={formik.handleBlur}
                placeholder="receivingcountry"
              >
                <option value=""></option>

                <option value="Nigeria">Nigeria</option>
              </select>
              <label
                for="receivingcountry"
                className={
                  formik.errors.receivingcountry &&
                  formik.touched.receivingcountry
                    ? "absolute text-xs xl:text-base mxl:text-sm font-poppins text-red-500 duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-100 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                    : "absolute text-xs xl:text-base mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-5 top-9   peer-focus:top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-0 peer-aria-selected:translate-y-14 peer-focus:scale-[0.6] peer-focus:-translate-y-6"
                }
              >
                Receiving Country
              </label>
              <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
              {formik.errors.receivingcountry &&
              formik.touched.receivingcountry ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.receivingcountry}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <p className="text-sm font-medium mt-3">Amount</p>
            <div className="flex justify-between items-center mt-2">
              <span>
                <p className="text-[#175873] text-[0.59rem] ">They Receive</p>
                <span className="flex ">
                  <span className="relative z-0">
                    <select
                      type="text"
                      id="sendingcurrency"
                      className={
                        formik.errors.sendingcurrency &&
                        formik.touched.sendingcurrency
                          ? " font-poppins  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-red-500 border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                          : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center   shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px] rounded-r-none appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                        //placeholder=" "
                      }
                      onChange={formik.handleChange}
                      value={formik.values.sendingcurrency}
                      onBlur={formik.handleBlur}
                      placeholder="receivingcountry"
                    >
                      <option value="USD" selected>
                        USD
                      </option>

                      <option value="Pounds">Pounds</option>
                    </select>
                    <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-5 right-0 flex items-center px-2 text-[#009186]" />
                  </span>
                  <input
                    type="number"
                    value="00000"
                    className=" font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent text-[#009186]  rounded-[6px] border-solid border-[#009186] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                  />
                </span>
              </span>
              <BiTransfer className="text-3xl text-[#009186] mt-6" />
              <span>
                <p className="text-[#175873] text-[0.59rem] ">Local Currency</p>
                <span className="relative z-0 ">
                  {" "}
                  <select
                    type="text"
                    id="reciveingcurrency"
                    className={
                      formik.errors.reciveingcurrency &&
                      formik.touched.reciveingcurrency
                        ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      //placeholder=" "
                    }
                    onChange={formik.handleChange}
                    value={formik.values.reciveingcurrency}
                    onBlur={formik.handleBlur}
                    placeholder="receivingcountry"
                  >
                    <option value="NGN" selected>
                      NGN
                    </option>

                    <option value="Pounds">Pounds</option>
                  </select>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-2 right-0 flex items-center px-2 text-[#009186]" />
                </span>
              </span>
              {/*
               */}
              {/*
               */}
            </div>
            <button
              onClick={() => navigate("/signup")}
              className=" text-[#F8F8FF] rounded-lg bg-[#009186] w-full mt-0 py-2"
            >
              continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Send;
