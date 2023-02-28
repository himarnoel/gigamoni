import React, { useState } from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import icon from "./../../assets/google-icon.svg";
import { RiArrowDownSLine } from "react-icons/ri";
import { useFormik } from "formik";
import { signupValidate } from "../../Service/validate_and_api";
const Signup = () => {
  const [countries, setcountries] = useState(["Nigeria"]);
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    console.log("Label 👉️", event.target.selectedOptions[0].label);
    console.log(event.target.value);

    setSelected(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      country: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: signupValidate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex flex-col h-screen ">
      <NavBar class="" />
      <div className="grid md:grid-cols-2  flex-auto">
        <div className="w-full flex flex-col justify-around  ">
          <div className="">
            <h2 className="text-center text-[1.3rem] font-semibold text-[#262626] ">
              Create Account
            </h2>
            <h1 className="text-[1.5rem] font-bold  lg:mx-10 xl:mx-[5rem] 2xl:mx-[10rem]">
              Hello,
            </h1>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="lg:h-[24rem] xl:h-[26rem]  flex flex-col justify-between   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]"
          >
            <div class="relative z-0 mt-0">
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
                    ? "absolute text-xs font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
            <div class="relative z-0 ">
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
                    ? "absolute text-xs font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Email
              </label>
              {formik.errors.email && formik.touched.email ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div class="relative z-0 ">
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
                    ? "absolute text-xs font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Phone number
              </label>
              {formik.errors.phonenumber && formik.touched.phonenumber ? (
                <p className="text-red-500 text-xs font-poppins">
                  {formik.errors.name}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div class="relative z-0 ">
              <select
                type="text"
                id="country"
                className="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                //placeholder=" "
                value={selected}
                onChange={handleChange}
              >
                <option value=""></option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Aland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
              </select>
              <label
                for="country"
                class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-4 scale-25 top-7 focus:top-4  peer-focus:top-2 -z-10 origin-[0] peer-focus:left-2 peer-focus:text-[#009186] peer-aria-selected:scale-200 peer-aria-selected:scale-200 peer-aria-selected:translate-y-14 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country
              </label>

              <RiArrowDownSLine className="pointer-events-none cursor-pointer text-4xl absolute inset-y-0 right-0 flex items-center px-2 text-[#262626]" />
            </div>{" "}
            <div class="relative z-0 ">
              <input
                type="text"
                id="password"
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
                class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>{" "}
            <div class="relative z-0 ">
              <input
                type="text"
                id="confirmpassword"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="confirmpassword"
                class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirma Password
              </label>
            </div>
            <button className="px-5 py-2 self-end  bg-[#009186] text-[#F8F8FF] rounded-[8px] font-semibold">
              Create Account
            </button>
          </form>

          <div className="">
            {" "}
            <span className="flex items-center   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem] ">
              {" "}
              <p className=" text-[#262626] mr-2">Already have an account?</p>
              <span className="text-[#009186]">Login</span>
            </span>
            <span className=" flex items-center justify-center py-[0.5rem] border-2 mt-4 border-[#009186] border-solid rounded-[8px]   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
              {" "}
              <p className="mr-2  text-[#009186]"> Continue with Google</p>
              <img src={icon} alt="" className="object-contain w-5" />
            </span>
          </div>
        </div>
        <div className=" w-full  bg lg:px-10 xl:px-[8rem] 2xl:px-[10rem] flex justify-center items-center">
          <div className="w-full text-3xl px-[4.5rem] text-center font-semibold flex justify-center items-center bg-[#87ACA3]/[0.3] h-[20rem] rounded-[8px] text-[#87ACA3]">
            <p className="leading-[1.2]">
              International Bulk Payment Solution Made Just For{" "}
              <span className="text-[#F8F8FF]"> YOU</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
