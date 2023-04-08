import React from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { useFormik } from "formik";
import { pendingValidate } from "../../Service/validate_and_api";
const Profile = () => {
  const formik = useFormik({
    initialValues: {
      receivername: "",
      bankName: "",
      phoneNumber: "",
      bankAddress: "",
      emailAddress: "",
      iban: "",
      accountName: "",
      swiftCode: "",
      accountNumber: "",
      receivingCountry: "",
      tractionDescription: "",
      receivingcurrency: "USD",
      sendingcurrency: "NGN",
      amountsent: "",
      amountReceived: "",
    },
    validationSchema: pendingValidate,
    onSubmit: (values) => {
      navigate("/summary", {
        state: values,
      });
    },
  });
  return (
    <div className="font-poppins">
      <NavBar class="fixed top-0 z-[2]" />
      <div className="flex justify-between items-center mt-28 px-2 xss:px-4 xs:px-6  sm:mt-26  sm:mt-26  lg:mt-20 2xl:px-[10rem] xl:px-[5rem] lg:px-10">
        <button className=" text-sm px-[4rem] py-[0.7rem]  lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3]">
          Back
        </button>

        <div
          onClick={() => alert("Notification")}
          className=" text-[#009186] items-center cursor-pointer flex "
        >
          <img
            src={bell}
            alt=""
            className="object-contain w-[1.6rem] mxl:w-[2rem] mr-3"
          />
          <p className="font-semibold mxl:text-xl hidden lg:block ">
            Notifications
          </p>
        </div>
      </div>
      <p className="text-3xl font-semibold text-center mt-10">Your Profile</p>
      <div className="flex gap-x-10 px-10">
        <form className="w-full mt-2 md:mt-5  lg:mt-0  flex flex-col   gap-y-8 mxl:gap-y-16">
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="bankName"
              className={
                formik.errors.bankName && formik.touched.bankName
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={formik.handleChange}
              value={formik.values.bankName}
              onBlur={formik.handleBlur}
            />
            <label
              for="name"
              className={
                formik.errors.bankName && formik.touched.bankName
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500   duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Name
            </label>
            {formik.errors.bankName && formik.touched.bankName ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.bankName}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="bankAddress"
              className={
                formik.errors.bankAddress && formik.touched.bankAddress
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={formik.handleChange}
              value={formik.values.bankAddress}
              onBlur={formik.handleBlur}
            />
            <label
              for="name"
              className={
                formik.errors.bankAddress && formik.touched.bankAddress
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Email
            </label>
            {formik.errors.bankAddress && formik.touched.bankAddress ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.bankAddress}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="iban"
              className={
                formik.errors.iban && formik.touched.iban
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={formik.handleChange}
              value={formik.values.iban}
              onBlur={formik.handleBlur}
            />
            <label
              for="name"
              className={
                formik.errors.iban && formik.touched.iban
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Phone number
            </label>
            {formik.errors.iban && formik.touched.iban ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.iban}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="swiftCode"
              className={
                formik.errors.swiftCode && formik.touched.swiftCode
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={formik.handleChange}
              value={formik.values.swiftCode}
              onBlur={formik.handleBlur}
            />
            <label
              for="name"
              className={
                formik.errors.swiftCode && formik.touched.swiftCode
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Address
            </label>
            {formik.errors.swiftCode && formik.touched.swiftCode ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.swiftCode}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="swiftCode"
              className={
                formik.errors.swiftCode && formik.touched.swiftCode
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={formik.handleChange}
              value={formik.values.swiftCode}
              onBlur={formik.handleBlur}
            />
            <label
              for="name"
              className={
                formik.errors.swiftCode && formik.touched.swiftCode
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Bank Verification Number (BVN)
            </label>
            {formik.errors.swiftCode && formik.touched.swiftCode ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.swiftCode}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <button className=" w-fit bg-[#009186] rounded-lg px-14 text-sm py-3 self-end text-[#F8F8FF] font-medium">
            Update
          </button>
        </form>
        {/* right side */}
        <div className="w-full mt-2 md:mt-5 px-20  lg:mt-0  flex flex-col   gap-y-8 mxl:gap-y-16">
          <p className="text-[#262626] font-medium">Change Password</p>
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="bankAddress"
              className={
                formik.errors.bankAddress && formik.touched.bankAddress
                  ? "block font-poppins  w-full  py-4 text-sm text-gray-900 bg-transparent  rounded-lg border-2 text-center  border-red-500 appearance-none   placeholder:text-[#707070]  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full   text-center py-4 text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#87ACA3] placeholder:text-[#707070] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder="Enter old password"
              onChange={formik.handleChange}
              value={formik.values.bankAddress}
              onBlur={formik.handleBlur}
            />

            {formik.errors.bankAddress && formik.touched.bankAddress ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.bankAddress}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="iban"
              className={
                formik.errors.iban && formik.touched.iban
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={formik.handleChange}
              value={formik.values.iban}
              onBlur={formik.handleBlur}
            />
            <label
              for="name"
              className={
                formik.errors.iban && formik.touched.iban
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              New Password
            </label>
            {formik.errors.iban && formik.touched.iban ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.iban}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="swiftCode"
              className={
                formik.errors.swiftCode && formik.touched.swiftCode
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={formik.handleChange}
              value={formik.values.swiftCode}
              onBlur={formik.handleBlur}
            />
            <label
              for="name"
              className={
                formik.errors.swiftCode && formik.touched.swiftCode
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Confirm Password
            </label>
            {formik.errors.swiftCode && formik.touched.swiftCode ? (
              <p className="text-red-500 text-xs font-poppins">
                {formik.errors.swiftCode}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <button className=" w-fit bg-[#87ACA3] rounded-lg px-4 text-sm py-3 self-end text-[#262626] font-medium ">
            Save Beneficiary
          </button>
          <div className="flex items-center">
            <input
              type="checkbox"
              //   checked
              className=" cursor-pointer  rounded focus:ring-0 focus:bg-green-500 hover:bg-green-500 bg-green-500
               checked:bg-green-500"
            />
            <p className="text-xs">
              I would like to receive emails on service and product update
            </p>
          </div>
          <div className="flex items-center mb-20">
            <input type="checkbox" />
            <p>Subscribe to news letter</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
