import React, { useEffect, useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import icon from "./../../assets/google-icon.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { useFormik } from "formik";
import { baseurl, signupValidate } from "../../Service/validate_and_api";
import axios from "axios";
import RingLoader from "react-spinners/RingLoader";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [countries, setcountries] = useState(["Nigeria"]);
  const [selected, setSelected] = useState("");
  const [load, setload] = useState(false);
  const [phone, setphone] = useState("+234");
  const [first, setfirst] = useState({});
  const navigate = useNavigate();
  let fromSendMoney = {};

  if (localStorage.Send) {
    fromSendMoney = JSON.parse(localStorage.Send);
  }

  const formik = useFormik({
    initialValues: {
      name: fromSendMoney.name ?? "",
      email: fromSendMoney.email ?? "",
      phonenumber: fromSendMoney.phonenumber ?? "",
      country: fromSendMoney.country ?? "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: signupValidate,
    onSubmit: (values) => {
      window.scrollTo(0, 0);
      setload(true);
      console.log("Colllaasd");
      axios
        .post(`${baseurl}/accounts/signup/`, {
          currSent: fromSendMoney.localcurrency.split(" ").join("") ?? "",
          currRecvd: fromSendMoney.receivingcurrency.split(" ").join("") ?? "",
          amtRecvd:
            fromSendMoney.sendamount.toString().split(" ").join("") ?? "",
          password: values.password.split(" ").join(""),
          fullname: values.name,
          email: values.email.split(" ").join(""),
          phoneNumber:
            phone +
            values.phonenumber.toString().substring(1).split(" ").join(""),
          country: values.country.split(" ").join(""),
        })
        .then((res) => {
          console.log(res);
          setload(false);
          navigate("/check");
          toast.success("success");
          // console.log(res.response.status);
          localStorage.setItem("email", values.email.toString());
        })
        .catch((e) => {
          console.log(e);
          setload(false);
          if (
            e.response.data.email[0] ==
              "user with this email already exists." &&
            e.response.data.phoneNumber[0] ==
              "user with this phoneNumber already exists."
          ) {
            toast.error("user details already exists");
          } else if (
            e.response.data.email[0] == "user with this email already exists."
          ) {
            toast.error("Email already exist");
          } else if (
            e.response.data.phoneNumber[0] ==
            "user with this phoneNumber already exists."
          ) {
            toast.error("Phone number already exist");
          } else {
            toast.error("An error occurred");
          }
        });
    },
  });

  return (
    <>
      <div className="hidden lg:block font-poppins">
        {load ? (
          <div className="absolute top-0 bg-cover bg-[#262626]/[0.8]  z-[90] h-full overla w-full flex  justify-center items-center text-3xl">
            <RingLoader color="#009186" size={90} />
          </div>
        ) : (
          ""
        )}

        <div className="flex flex-col    font-poppins ">
          <NavBar class="top-0 z-[70] fixed" />
          <div className="grid md:grid-cols-2  lg:mt-[3.7rem]  h-screen">
            <div className="w-full flex flex-col   ">
              <h2 className="text-center text-[1.3rem] lg:mt-[1.5rem] mxl:mt-[4rem] mxl:text-[2rem]  font-semibold text-[#262626] ">
                Create Account
              </h2>
              <h1 className="text-[1.5rem] lg:mt-[2rem] mxl:mt-[3rem] mxl:text-[2.5rem] font-bold  lg:mx-[3rem] xl:mx-[6rem] 2xl:mx-[10rem] mxl:mx-[3.5rem]">
                Hello,
              </h1>

              <form
                onSubmit={formik.handleSubmit}
                className="lg:h-[30rem] xl:h-[26rem] lg:mt-[1rem] xl:mt-[1rem]  mxl:h-[35rem]  flex flex-col justify-between mxl:mt-[2rem]   lg:mx-[4rem] xl:mx-[8rem] mxl:mx-[6rem]  2xl:mx-[10rem]"
              >
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
                    required
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
                        ? "absolute top-4   -z-1 origin-0  text-xs mxl:text-sm font-poppins text-[#262626]  duration-300  peer-focus:text-[#009186] "
                        : "absolute top-4   -z-1 origin-0   text-xs mxl:text-sm font-poppins text-[#262626]  duration-300  peer-focus:text-[#009186] "
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
                </div>{" "}
                <div className="relative z-0 ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Password
                  </label>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <div className="relative z-0 ">
                  <input
                    type="password"
                    id="passwordConfirmation"
                    name="passwordConfirmation"
                    className={
                      formik.errors.passwordConfirmation &&
                      formik.touched.passwordConfirmation
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirmation}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="password"
                    className={
                      formik.errors.passwordConfirmation &&
                      formik.touched.passwordConfirmation
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Confirm Password
                  </label>
                  {formik.errors.passwordConfirmation &&
                  formik.touched.passwordConfirmation ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.passwordConfirmation}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <button
                  type="submit"
                  className="px-5 py-2 mxl:py-4 mxl:px-8 self-end l bg-[#009186] text-[#F8F8FF] rounded-[8px] font-semibold"
                >
                  Create Account
                </button>
              </form>

              <div className=" lg:mt-[4rem] xl:mt-[2rem] mxl:mt-[7rem] lg:mb-[3rem] mxl:mb-[0rem]">
                {" "}
                <span className="flex items-center justify-center   lg:mx-10 xl:mx-[8rem] mxl:text-base 2xl:mx-[10rem] ">
                  {" "}
                  <p className=" text-[#262626] mr-2">
                    Already have an account?
                  </p>
                  <Link to="/login" className="text-[#009186]">
                    Login
                  </Link>
                </span>
                <span className=" flex items-center justify-center py-[0.5rem] border-2 lg:mt-[1rem] mxl:mt-[6rem]  border-[#009186] border-solid rounded-[8px]   lg:mx-10 xl:mx-[8rem]  2xl:mx-[10rem]">
                  {" "}
                  <p className="mr-2  text-[#009186]"> Continue with Google</p>
                  <img src={icon} alt="" className="object-contain w-5" />
                </span>
              </div>
            </div>
            <div className=" w-full  bg lg:px-10 xl:px-[8rem] 2xl:px-[10rem] flex justify-center items-center">
              <div className="w-full text-3xl px-[2rem] text-center font-semibold flex justify-center items-center bg-[#87ACA3]/[0.3] h-[20rem] rounded-[8px] text-[#87ACA3]">
                <p className="leading-[1.4] mxl:leading-[1.6] text-[1.8rem]">
                  Bespoke
                  <p> Transactions Just For </p>
                  <p className="text-[#F8F8FF]"> YOU</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <dv className="lg:hidden">
        {load ? (
          <div className="absolute bg-cover bg-[#262626]/[0.8] z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
            <RingLoader color="#009186" size={75} />
          </div>
        ) : (
          ""
        )}
        <div className=" w-screen  flex  flex-col md:pb-10">
          <NavBar className="" />
          <div className="bg flex-auto px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8  md:flex md:flex-col md:h-full pt-[7rem]">
            <div className="px-5  sm:px-10">
              {" "}
              <div className="w-full text-[1.5rem] xss:text-xl px-[1rem]  text-center font-semibold flex justify-center items-center bg-[#87ACA3]/[0.5] h-[10rem] sm:h-[15rem] rounded-[8px] text-[#87ACA3]">
                <p className=" leading-[1.5] xss:leading-[1.5]">
                  Bespoke
                  <p> Transactions Just For </p>
                  <p className="text-[#F8F8FF]"> YOU</p>
                </p>
              </div>
            </div>
            <div className="w-full bg-white rounded-lg mt-10 pt-5 px-4 sm:px-10 md:py-10 md:mt-20  md:px-14">
              <div className="">
                <h2 className="text-center text-[1.3rem] font-semibold text-[#262626] ">
                  Create Account
                </h2>
                <h1 className="text-[1.5rem] font-bold mt-5">Hello,</h1>
              </div>
              <form
                onSubmit={formik.handleSubmit}
                className="  mt-2  flex flex-col justify-between  h-[22rem] md:h-[30rem]"
              >
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
                    type="tel"
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
                    required
                    className={
                      formik.errors.country && formik.touched.country
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                      //placeholder=" "
                    }
                    onChange={formik.handleChange}
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                  >
                    <option value=""></option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Aland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Nigeria">Nigeria</option>
                  </select>
                  <label
                    for="country"
                    className={
                      formik.errors.country && formik.touched.country
                        ? "absolute top-4   -z-1 origin-0  text-xs mxl:text-sm font-poppins text-[#262626]  duration-300  peer-focus:text-[#009186] "
                        : "absolute top-4   -z-1 origin-0  text-xs mxl:text-sm font-poppins text-[#262626]  duration-300  peer-focus:text-[#009186] "
                    }
                  >
                    Country
                  </label>
                  <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-2 right-0 flex items-center px-2 text-[#262626]" />
                  {formik.errors.country && formik.touched.country ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.phonenumber}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <div className="relative z-0 ">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="password"
                    className={
                      formik.errors.password && formik.touched.password
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Password
                  </label>
                  {formik.errors.password && formik.touched.password ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.password}
                    </p>
                  ) : (
                    ""
                  )}
                </div>{" "}
                <div className="relative z-0 ">
                  <input
                    type="password"
                    id="confirmpassword"
                    name="passwordConfirmation"
                    className={
                      formik.errors.passwordConfirmation &&
                      formik.touched.passwordConfirmation
                        ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500  focus:border-red-500  appearance-none   focus:outline-none focus:ring-0  peer"
                        : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    }
                    placeholder=" "
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirmation}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    for="passwordConfirmation"
                    className={
                      formik.errors.passwordConfirmation &&
                      formik.touched.passwordConfirmation
                        ? "absolute text-xs mxl:text-sm font-poppins text-red-500    duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    }
                  >
                    Password
                  </label>
                  {formik.errors.passwordConfirmation &&
                  formik.touched.passwordConfirmation ? (
                    <p className="text-red-500 text-xs font-poppins">
                      {formik.errors.passwordConfirmation}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <button
                  type="submit"
                  className="px-5 py-2 self-end  bg-[#009186] text-[#F8F8FF] rounded-[8px] font-semibold"
                >
                  Create Account
                </button>
              </form>
              <div className=" mt-6  pb-4  mb-3 ">
                {" "}
                <span className="flex items-center justify-center">
                  {" "}
                  <p className=" text-[#262626] mr-2">
                    Already have an account?
                  </p>
                  <Link to="/login" className="text-[#009186]">
                    Login
                  </Link>
                </span>
                <span className=" flex items-center justify-center py-[0.5rem] md:mt-10 border-2 mt-8 border-[#009186] border-solid rounded-[8px]   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
                  {" "}
                  <p className="mr-2  text-[#009186]"> Continue with Google</p>
                  <img src={icon} alt="" className="object-contain w-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </dv>
    </>
  );
};

export default Signup;
