import React, { useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/Send_Money/map.svg";
import img2 from "../../assets/Send_Money/hand.png";
import img3 from "../../assets/Send_Money/warning.png";
import img4 from "../../assets/Send_Money/noacct.svg";
import { sendmoney } from "../../Service/validate_and_api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { RingLoader } from "react-spinners";
import { IoIosCloseCircle } from "react-icons/io";
const Send = () => {
  const navigate = useNavigate();
  const [lessamount, setlessamount] = useState(false);
  const [noacc, setnoacc] = useState(false);
  const [load, setload] = useState(false);
  const [navigater, setnavigater] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      country: "",
      receivingcountry: "",
      sendingcurrency: "USD",
      reciveingcurrency: "NGN",
      sendamount: 0,
    },
    validationSchema: sendmoney,
    onSubmit: (values) => {
      window.scrollTo(0, 0);
      if (navigater) {
        if (values.sendamount < 100) {
          navigate("/less");
        } else {
          localStorage.setItem("Send", JSON.stringify(values));
          navigate("/noacct");
        }
      } else {
        if (values.sendamount < 100) {
          setlessamount(true);
        } else {
          localStorage.setItem("Send", JSON.stringify(values));
          setnoacc(true);
        }
      }
    },
  });
  return (
    <div className="font-poppins">
      {load ? (
        <div className="absolute top-0 bg-cover bg-[#262626]/[0.8]  z-[90] h-full overla w-full flex  justify-center items-center text-3xl">
          <RingLoader color="#009186" size={90} />
        </div>
      ) : (
        ""
      )}
      {lessamount ? (
        <div className="absolute top-0 bg-cover bg-[#262626]/[0.8]  z-[90] h-full overla w-full flex  justify-center items-center text-3xl">
          <div
            className="bg-[#F8F8FF] w-[26rem] relative rounded-md h-[26rem] flex flex-col items-center justify-around px-10
          "
          >
            <IoIosCloseCircle
              onClick={() => setlessamount(!lessamount)}
              className="text-2xl right-3 absolute top-3 text-[#009186] cursor-pointer"
            />
            <div className="flex flex-col items-center">
              <img src={img3} alt="" className="object-contain w-[8rem]" />

              <h4 className="text-sm w-[19rem] text-center mt-4">
                Your transfer amount is below <b>$100</b>. <br /> Amount needs
                to be $100 or more
              </h4>
            </div>
            <button
              onClick={() => setlessamount(!lessamount)}
              className=" text-[#F8F8FF] rounded text-sm bg-[#009186] w-full mt-0 py-2"
            >
              continue
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {noacc ? (
        <div
          onClick={() => setnoacc(!noacc)}
          className="absolute top-0 bg-cover bg-[#262626]/[0.8]  z-[90] h-full overla w-full flex  justify-center items-center text-3xl"
        >
          <div
            className="bg-[#F8F8FF] w-[26rem] relative rounded-md h-[26rem] flex flex-col items-center justify-around px-10
          "
          >
            <IoIosCloseCircle
              onClick={() => setnoacc(!noacc)}
              className="text-2xl right-3 absolute top-3 text-[#009186] cursor-pointer"
            />
            <div className="text-center">
              <h4 className="text-sm w-full  font-medium  mt-4 ">
                You have to create an Account in order to proceed
              </h4>
            </div>
            <img src={img4} alt="" className="object-contain w-[10rem]" />
            <button
              onClick={() => navigate("/signup")}
              className=" text-[#F8F8FF] rounded text-sm bg-[#009186] w-full mt-0 py-2"
            >
              continue
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      <div>
        <NavBar class="fixed top-0 z-[50]" />
        <div className=" flex flex-col h-screen font-poppins">
          <div className=" flex flex-col lg:flex-row  flex-auto bg-[#006159] lg:mt-[3.5rem]  mxl:mt-[5.6rem]">
            <div className="lg:w-[50rem] xl:w-[480px] mxl:w-[980px]  bg-[#2B7C85] flex flex-col justify-between  items-center">
              <p className="text-[#F8F8FF] text-2xl pt-20 sm:text-3xl text-center font-semibold xss:mt-[1rem] md:pt-7 lg:hidden">
                Send Money
              </p>
              <div className="  relative xl:w-[30rem] mxl:w-full  ">
                <img
                  src={img1}
                  alt=""
                  className=" object-cover mt-3 w-[20rem] sm:w-[27rem] md:w-[28rem] lg:w-full mx-auto lg:mx-0 lg:mt-0"
                />
                <span
                  className=" absolute
                text-white text-[1.8rem] text-center top-[2rem] md:top-[3rem]   m-auto  font-semibold w-[20rem]  left-0  right-0   z-[10]
                mxl:top-[10rem]   lg:text-[2.1rem] mxl:text-[3rem] lg:top-[6rem] lg:font-semibold lg:w-[25rem] mxl:w-[33rem] lg:right-0"
                >
                  A faster way to make international Payments
                </span>
              </div>
              <img
                src={img2}
                alt=""
                className="lg:w-[23rem] xl:w-[20rem] mxl:w-[35rem]  mt-4 object-contain w-[9rem] sm:w-[10rem] mx-auto"
              />
            </div>{" "}
            <div className="w-full  flex flex-col justify-center items-center px-2 xss:px-4 xs:px-6 sm:px-[4rem] lg:px-0">
              <p className="text-[#F8F8FF] text-2xl text-center font-semibold mt-8 hidden lg:block">
                Send Money
              </p>
              <form
                onSubmit={formik.handleSubmit}
                className="bg-[#F8F8FF] rounded-lg lg:pl-5 lg:pr-10  lg:py-8 lg:w-[28rem] mxl:w-[32rem] lg:gap-y-4  lg:mb-8 xl:gap-y-3
            lg:mx-auto lg:mt-[1.2rem]  px-4 py-8 w-full gap-y-4  sm:mt-10 mb-8  md:gap-y-10 flex-auto
            mxl:gap-y-10 sm:px-10
            mx-auto mt-[1.2rem] text-[#262626] grid lg:h-[37rem]"
              >
                <p>Transaction Details</p>
                <div className="relative z-0 mt-0">
                  <input
                    type="text"
                    id="name"
                    className={
                      formik.errors.name && formik.touched.name
                        ? "block font-poppins   w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
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
                    required
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
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-4 scale-25 top-7 focus:top-4  peer-focus:top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-200 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-25 top-7 focus:top-4  peer-focus:top-6 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-aria-selected:scale-200 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                    required
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
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-4 scale-25 top-7 focus:top-4  peer-focus:top-6 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-[#009186] peer-aria-selected:scale-200 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-25 top-7 focus:top-4  peer-focus:top-6 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-[#009186] peer-aria-selected:scale-200 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                <div className="flex flex-row-reverse lg:flex-row justify-between items-center mt-2 ">
                  <span>
                    <p className="text-[#175873] text-[0.59rem] ">
                      They Receive
                    </p>
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
                        id="sendamount"
                        placeholder="00000"
                        className={
                          formik.errors.sendamount && formik.touched.sendamount
                            ? " font-poppins spin-button-none pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#009186] text-[#009186]  rounded-[6px] border-solid border-red-500 border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                            : " font-poppins spin-button-none  pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade  text-sm mt-3 bg-transparent placeholder:text-[#009186] text-[#009186]  rounded-[6px] border-solid border-[#009186] border-[4px] rounded-l-none border-l-0  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186]"
                        }
                        onChange={formik.handleChange}
                        value={formik.values.sendamount}
                        onBlur={formik.handleBlur}
                      />
                    </span>
                  </span>
                  <BiTransfer className="text-3xl text-[#009186] mt-6" />
                  <div>
                    <p className="text-[#175873] text-[0.59rem] ">
                      Local Currency
                    </p>
                    <div className="relative z-0 ">
                      {" "}
                      <select
                        type="text"
                        id="reciveingcurrency"
                        className={
                          formik.errors.reciveingcurrency &&
                          formik.touched.reciveingcurrency
                            ? " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent text-[#009186]   rounded-[6px] border-solid border-red-500 border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                            : " font-poppins pl-3 pb-0 h-[52px] w-[85px] flex justify-center items-center shade text-sm  mt-3 bg-transparent  text-[#009186]   rounded-[6px] border-solid border-[#009186] border-[4px]  appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
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
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className=" hidden lg:block text-[#F8F8FF] rounded bg-[#009186] w-full mt-0 py-2"
                >
                  continue
                </button>
                <button
                  type="submit"
                  onClick={() => setnavigater(true)}
                  className=" lg:hidden text-[#F8F8FF] rounded bg-[#009186] w-full mt-0 py-2"
                >
                  continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
