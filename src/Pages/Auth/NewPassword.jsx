import React, { useState } from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import { useFormik } from "formik";
import { baseurl, newpasswordValidate } from "../../Service/validate_and_api";
import { useNavigate, useSearchParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import axios from "axios";
import { toast } from "react-toastify";

const NewPassword = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [load, setload] = useState(false);
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: newpasswordValidate,
    onSubmit: (values) => {
      const id = searchParams.get("id");
      const key = searchParams.get("key");
      console.log(key.substring(0, key.length - 1));
      console.log(id);
      window.scrollTo(0, 0);
      setload(true);
      axios
        .post(`${baseurl}/accounts/new-password/`, {
          password: values.password,
          token: key.substring(0, key.length - 1),
          uidb64: id,
        })
        .then((res) => {
          console.log(res);
          setload(false);
          navigate("/success"); // To move to the next route
          toast.success("Successful"); //notifiation
        })
        .catch((e) => {
          setload(false);
          console.log(e);
          toast.error("An error occured"); // Display error notification
        });
    },
  });

  return (
    <div className="">
      {load ? (
        <div className="absolute bg-cover bg-[#262626]/[0.8]  z-[20] h-screen w-screen flex  justify-center items-center text-3xl">
          <RingLoader color="#009186" size={90} />
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col h-screen  font-poppins justify-between ">
        <NavBar />
        <div className="bg flex-auto flex flex-col justify-between">
          <div className="w-full  h-fit px-2 xss:px-4 xs:px-6 xsm:px-[5rem] sm:px-0 sm:w-fit  mx-auto mt-[10rem] md:mt-[8rem] mxl:mt-[4rem]">
            <h1 className="text-center text-[#F8F8FF] text-base sm:text-2xl lg:text-2xl xl:text-2xl mxl:text-3xl 2xl:text-3xl  sm:mt-0 md:mt-[2rem] lg:mt-[3rem]  xl:mt-4  mxl:mt-10 font-semibold ">
              Create new password
            </h1>

            <form
              onSubmit={formik.handleSubmit}
              className="mx-auto bg-[#F8F8FF] w-full h-[87%]  sm:h-[20rem]   sm:w-[35rem]  md:w-[40rem] lg:w-[30rem] mxl:w-[40rem] md:h-[25rem] lg:h-[19rem]   mxl:h-[25rem] sm:mt-[3rem] md:mt-[4rem] lg:mt-[3rem] mxl:mt-[6rem]  rounded-[11.8392px] shade px-4 py-2 sm:px-10 sm:py-8 md:px-20 md:py-14 lg:px-10 lg:py-10 flex flex-col justify-around  mt-5"
            >
              <div class="relative z-0 ">
                <input
                  type="password"
                  id="confirmpassword"
                  name="password"
                  className={
                    formik.errors.password && formik.touched.password
                      ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500  focus:border-red-500  appearance-none   focus:outline-none focus:ring-0  peer"
                      : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder=" "
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  onBlur={formik.handleBlur}
                />
                <label
                  for="passwordConfirmation"
                  className={
                    formik.errors.password && formik.touched.password
                      ? "absolute mxl:text-sm text-xs font-poppins text-red-500    duration-300 transform -translate-y-6 scale-75 top-4 mxl:top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute mxl:text-sm text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 mxl:top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              </div>
              <div class="relative z-0 ">
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
                      ? "absolute mxl:text-sm text-xs font-poppins text-red-500    duration-300 transform -translate-y-6 scale-75 top-4 mxl:top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute mxl:text-sm text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 mxl:top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              </div>
              <button
                type="submit"
                className="py-3  w-full text-xs mxl:text-sm bg-[#009186] rounded-[5px] mt-2 md:mt-4 sm:text-sm text-white"
              >
                Reset Password
              </button>
            </form>
            <button
              onClick={() => navigate("/login")}
              className="float-right bg-[#87ACA3] text-xs md:text-sm  text-[#262626] rounded-[8px] font-semibold mt-6 xss:mt-3 xs:mt-3 sm:mt-8 px-8 py-3  mxl:px-10 mxl:py-4 mxl:mt-8"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
