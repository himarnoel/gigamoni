import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import { useFormik } from "formik";
import { newpasswordValidate } from "../../Service/validate_and_api";

const NewPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: newpasswordValidate,
    onSubmit: (values) => {
      window.scrollTo(0, 0);
      setload(true);
      axios
        .post(`${baseurl}/signup/`, {
          password: values.password,
          token: "",
          uidb64: "",
        })
        .then((res) => {
          console.log(res);
          setload(false);
          navigate("/check");
        })
        .catch((e) => {
          console.log(e);
          setload(false);
        });
    },
  });
  return (
    <div className="">
      <div className="flex flex-col h-screen  font-poppins justify-between ">
        <NavBar />
        <div className="bg flex-auto flex flex-col justify-between  ">
          <div className="w-full px-2 xss:px-4 xs:px-6 xsm:px-[5rem] sm:px-0 sm:w-fit  mx-auto">
            <h1 className="text-center text-[#F8F8FF] text-base sm:text-2xl lg:text-2xl xl:text-2xl 2xl:text-3xl  sm:mt-8 lg:mt-[3rem]  xl:mt-4 mxl:text-2xl mt-5 mxl:mt-10 font-semibold ">
              Create new password
            </h1>

            <form
              onSubmit={formik.handleSubmit}
              className="mx-auto bg-[#F8F8FF] w-full h-[87%]   sm:w-[35rem] sm:h-[20rem]  md:w-[40rem] md:h-[25rem] xl:h-[19rem] md:mt-[5rem] lg:mt-[3rem]  rounded-[11.8392px] shade px-4 py-2 sm:px-10 sm:py-8 md:px-20 md:py-14 flex flex-col justify-around  mt-5"
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
                      ? "absolute text-xs font-poppins text-red-500    duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
                      ? "absolute text-xs font-poppins text-red-500    duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-500 peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      : "absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              <button className="py-3  w-full text-xs bg-[#009186] rounded-[5px] mt-2 md:mt-4 sm:text-sm text-white">
                Reset Password
              </button>
            </form>
            <button className="float-right bg-[#87ACA3] text-xs md:text-sm  text-[#262626] rounded-[8px] font-semibold mt-6 xss:mt-3 xs:mt-3 px-8 py-3">
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
