import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import { forgotValidate } from "../../Service/validate_and_api";
import { useFormik } from "formik";

const Forgot = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: forgotValidate,
    onSubmit: (values) => {
      window.scrollTo(0, 0);
      setload(true);
      axios
        .post(`${baseurl}/signup/`, {
          password: values.password,
          email: values.email,
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
    <div className="font-poppins">
      <div className="flex justify-between flex-col h-screen ">
        <NavBar />
        <div className="flex-auto bg flex flex-col px-2 xss:px-4 xs:px-6 sm:px-10 md:px-8  lg:px-[15rem] xl:px-[23rem]">
          <h1 className="text-[#F8F8FF] text-2xl font-semibold mx-auto mt-5">
            Forgot Password
          </h1>
          <div className="rounded-[11.8392px] bg-[#F8F8FF]  h-[45%] xss:h-[40%] xs:h-[30%] sm:h-[28%] md:h-[26%] lg:h-[50%] w-full mt-10 px-2 md:px-10 py-8  flex-col flex ">
            <p className="  text-[0.6rem] xss:text-[0.8rem] xs:text-[0.6rem] sm:text-sm ">
              Enter your Email address below we’ll send an email with
              instructions on how to reset your password
            </p>
            <form className="dd mx-auto flex w-full  flex-col flex-auto  justify-center items-center mt-4">
              <div class="relative z-0   w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={
                    "block font-poppins  w-full px-5 placeholder:text-xs md:placeholder:text-base  py-2 text-sm text-gray-900 bg-transparent  rounded-[5px] border-[1.5px] placeholder:text-center placeholder:px-0 border-[#87ACA3] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  }
                  placeholder="Enter your email address"
                  //   onChange={formik.handleChange}
                  //   value={formik.values.email}
                  //   onBlur={formik.handleBlur}
                />

                {/* {formik.errors.email && formik.touched.email ? (
                  <p className="text-red-500 text-xs font-poppins">
                    {formik.errors.email}
                  </p>
                ) : (
                  ""
                )} */}
              </div>{" "}
              <button className="py-3 w-full text-xs bg-[#009186] rounded-[5px] mt-5 sm:text-sm text-white">
                submit
              </button>
            </form>
          </div>
          <button className=" self-end bg-[#87ACA3] text-xs md:text-sm  float-right text-[#262626] rounded-[8px] font-semibold lg:mt-3 mt-5 xss:mt-3 xs:mt-6 px-12 py-3">
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
