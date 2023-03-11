import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img1 from "../../assets/Send_Money/map.svg";
import img2 from "../../assets/Send_Money/hand.png";
import { sendmoney } from "../../Service/validate_and_api";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
const Send = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phonenumber: "",
      country: "",
      receivingcountry: "",
    },
    validationSchema: sendmoney,
    onSubmit: (values) => {},
  });
  return (
    <div className="  flex flex-col h-screen font-poppins">
      <NavBar class="fixed top-0 z-[90]" />
      <div className=" flex  flex-auto bg-[#006159] lg:mt-[3.5rem]  mxl:mt-[5.6rem]">
        <div className="lg:w-[357px] xl:w-[480px] mxl:w-[622px]  bg-[#2B7C85] flex flex-col justify-between  items-center">
          <div className="  relative xl:w-[30rem] mxl:w-full ">
            <img src={img1} alt="" className=" object-cover  " />
            <span className=" absolute mxl:top-[10rem] text-white text-[2.1rem] mxl:text-[3rem] top-[6rem] font-semibold w-[25rem] mxl:w-[33rem] right-0">
              A faster way to make international Payments
            </span>
          </div>
          <img
            src={img2}
            alt=""
            className=" object-contain lg:w-[19rem] xl:w-[18rem] mxl:w-full "
          />
        </div>{" "}
        <div className="w-full  flex flex-col justify-center items-center">
          <p className="text-[#F8F8FF] text-2xl text-center">Send Money</p>
          <div className="bg-[#F8F8FF] rounded-2xl pl-4 pr-10 p py-4  w-[34rem]  mx-auto mt-10 text-[#262626]">
            <p>Transaction Details</p>
            <form onSubmit={formik.handleSubmit}>
              {" "}
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
                <button
                  onClick={() => navigate("/signup")}
                  className=" text-[#F8F8FF] py-[0.5rem] rounded bg-[#009186] w-full mt-8"
                >
                  continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
