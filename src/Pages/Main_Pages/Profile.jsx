import React, { useEffect, useRef, useState } from "react";
import NavBar from "../../Components/AppComponents/NavBar";
import bell from "../../assets/bell.svg";
import { Formik, useFormik } from "formik";
import caller from "../../assets/Dashboard/caller.svg";
import {
  baseurl,
  pendingValidate,
  updatePassword,
  updateProfile,
} from "../../Service/validate_and_api";
import axios from "axios";
import { RingLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import DashNav from "../../Components/DashBoardComponents/DashNav";
import { toast } from "react-toastify";
const Profile = () => {
  const navigate = useNavigate();
  const safeDocument = typeof document !== "undefined" ? document : {};
  const { body } = safeDocument;
  const [load, setload] = useState(false);
  useEffect(() => {
    window.scroll({ top: 0, left: 0 });
    const val = localStorage.getItem("LoggedIntoken");
    if (!val) {
      navigate("/login");
    } else {
      body.style.overflow = "hidden";
      setload(true);
      axios
        .get(`${baseurl}/accounts/profile/`, {
          headers: {
            Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
          },
        })
        .then((res) => {
          console.log(res);
          body.style.overflow = "";
          setload(false);
          editprofileformik.setValues({
            name: res.data.fullname,
            phoneNumber: res.data.phoneNumber,
            address: "",
            email: res.data.email,
          });
        })
        .catch((e) => {
          console.log(e);
          setload(false);
          body.style.overflow = "";
          if (e.response.data.detail == "Invalid token.") {
            toast.error("token expired");
          } else {
            toast.error("An error occurred");
          }
        });
    }
  }, []);

  const editprofileformik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      bvn: "",
    },
    validationSchema: updateProfile,
    onSubmit: (values) => {
      window.scroll({ top: 0, left: 0 });
      body.style.overflow = "hidden";
      setload(true);
      axios
        .put(
          `${baseurl}/accounts/profile/`,
          {
            fullname: values.name,
          },

          {
            headers: {
              Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
            },
          }
        )
        .then((res) => {
          setload(false);
          console.log(res);
          body.style.overflow = "";
        })
        .catch((e) => {
          console.log(e);
          body.style.overflow = "";
          setload(false);
          if (e.response.data.detail == "Invalid token.") {
            toast.error("token expired");
          } else {
            toast.error("An error occurred");
          }
          console.log(e);
        });
    },
  });
  const changepasswordformik = useFormik({
    initialValues: {
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
    },
    validationSchema: updatePassword,
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(
          (`${baseurl}/accounts/change-password/`,
          {
            oldPassword: values.oldpassword,
            password: values.confirmpassword,
          },
          {
            headers: {  
              Authorization: `Token ${localStorage.getItem("LoggedIntoken")}`,
            },
          })
        )
        .then((res) => {
          setload(false);
          console.log(res);
          body.style.overflow = "";
        })
        .catch((e) => {
          console.log(e);
          body.style.overflow = "";
          setload(false);
          if (e.response.data.detail == "Invalid token.") {
            toast.error("token expired");
          } else {
            toast.error("An error occurred");
          }
          console.log(e);
        });
    },
  });
  return (
    <div className="font-poppins">
      <DashNav class="fixed top-0 z-[2]" />
      <div
        className={
          load
            ? "absolute top-0   bg-[#262626]/[0.8]   z-[90] h-screen w-full flex  justify-center items-center text-3xl"
            : "hidden"
        }
      >
        <RingLoader color="#009186" size={90} />
      </div>

      <div className="flex justify-between items-center mt-28 px-2 xss:px-4 xs:px-6  sm:mt-26  sm:mt-26  lg:mt-20 2xl:px-[10rem] xl:px-[5rem] lg:px-10">
        <button
          onClick={() => navigate("/dashboard")}
          className=" text-sm px-[4rem] py-[0.7rem]  lg:px-[4rem] lg:py-[0.7rem] rounded-lg bg-[#87ACA3]"
        >
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
      <p className="text-[1.7rem] font-semibold text-center mt-4 ">
        Your Profile
      </p>
      <div className="flex justify-between gap-x-10 2xl:px-[10rem] xl:px-[5rem] lg:px-10 mt-8">
        <form
          onSubmit={editprofileformik.handleSubmit}
          className="w-full mt-2 md:mt-5  lg:mt-0  flex flex-col h-[24rem]   px-5  justify-between mxl:gap-y-16"
        >
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="name"
              className={
                editprofileformik.errors.name && editprofileformik.touched.name
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={editprofileformik.handleChange}
              value={editprofileformik.values.name}
              onBlur={editprofileformik.handleBlur}
            />
            <label
              for="name"
              className={
                editprofileformik.errors.name && editprofileformik.touched.name
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500   duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Name
            </label>
            {editprofileformik.errors.name && editprofileformik.touched.name ? (
              <p className="text-red-500 text-xs font-poppins">
                {editprofileformik.errors.name}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="email"
              disabled
              className={
                editprofileformik.errors.email &&
                editprofileformik.touched.email
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={editprofileformik.handleChange}
              value={editprofileformik.values.email}
              onBlur={editprofileformik.handleBlur}
            />
            <label
              for="name"
              className={
                editprofileformik.errors.email &&
                editprofileformik.touched.email
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Email
            </label>
            {editprofileformik.errors.email &&
            editprofileformik.touched.email ? (
              <p className="text-red-500 text-xs font-poppins">
                {editprofileformik.errors.email}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="phoneNumber"
              disabled
              className={
                editprofileformik.errors.phoneNumber &&
                editprofileformik.touched.phoneNumber
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={editprofileformik.handleChange}
              value={editprofileformik.values.phoneNumber}
              onBlur={editprofileformik.handleBlur}
            />
            <label
              for="name"
              className={
                editprofileformik.errors.phoneNumber &&
                editprofileformik.touched.phoneNumber
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Phone number
            </label>
            {editprofileformik.errors.phoneNumber &&
            editprofileformik.touched.phoneNumber ? (
              <p className="text-red-500 text-xs font-poppins">
                {editprofileformik.errors.phoneNumber}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="address"
              disabled
              className={
                editprofileformik.errors.address &&
                editprofileformik.touched.address
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={editprofileformik.handleChange}
              value={editprofileformik.values.address}
              onBlur={editprofileformik.handleBlur}
            />
            <label
              for="name"
              className={
                editprofileformik.errors.address &&
                editprofileformik.touched.address
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Address
            </label>
            {editprofileformik.errors.address &&
            editprofileformik.touched.address ? (
              <p className="text-red-500 text-xs font-poppins">
                {editprofileformik.errors.address}
              </p>
            ) : (
              ""
            )}
          </div>{" "}
          <div className="relative z-0 mt-0">
            <input
              type="text"
              id="bvn"
              disabled
              className={
                editprofileformik.errors.bvn && editprofileformik.touched.bvn
                  ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                  : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              }
              placeholder=" "
              onChange={editprofileformik.handleChange}
              value={editprofileformik.values.bvn}
              onBlur={editprofileformik.handleBlur}
            />
            <label
              for="name"
              className={
                editprofileformik.errors.bvn && editprofileformik.touched.bvn
                  ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              }
            >
              Bank Verification Number (BVN)
            </label>
            {editprofileformik.errors.bvn && editprofileformik.touched.bvn ? (
              <p className="text-red-500 text-xs font-poppins">
                {editprofileformik.errors.bvn}
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
        <div className="w-full mt-2 md:mt-5 mx-20 mb-10  lg:mt-0  flex flex-col h-[30rem] justify-between     mxl:gap-y-16">
          <p className="text-[#262626] font-medium">Change Password</p>
          <form
            onSubmit={changepasswordformik.handleSubmit}
            className="mxl:gap-y-16 flex flex-col justify-between h-[16rem] "
          >
            <div className="relative z- 0 mt-0">
              <input
                type="text"
                id="oldpassword"
                className={
                  changepasswordformik.errors.oldpassword &&
                  changepasswordformik.touched.oldpassword
                    ? "block font-poppins  w-full  py-[0.9rem] text-sm text-gray-900 bg-transparent  rounded-lg border-2 text-center  border-red-500 appearance-none   placeholder:text-[#707070]  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full  py-[0.9rem] text-center  text-sm text-gray-900 bg-transparent border-2 rounded-lg border-[#87ACA3] placeholder:text-[#707070] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder="Enter old password"
                onChange={changepasswordformik.handleChange}
                value={changepasswordformik.values.oldpassword}
                onBlur={changepasswordformik.handleBlur}
              />

              {changepasswordformik.errors.oldpassword &&
              changepasswordformik.touched.oldpassword ? (
                <p className="text-red-500 text-xs font-poppins">
                  {changepasswordformik.errors.oldpassword}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="newpassword"
                className={
                  changepasswordformik.errors.newpassword &&
                  changepasswordformik.touched.newpassword
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={changepasswordformik.handleChange}
                value={changepasswordformik.values.newpassword}
                onBlur={changepasswordformik.handleBlur}
              />
              <label
                for="name"
                className={
                  changepasswordformik.errors.newpassword &&
                  changepasswordformik.touched.newpassword
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                New Password
              </label>
              {changepasswordformik.errors.newpassword &&
              changepasswordformik.touched.newpassword ? (
                <p className="text-red-500 text-xs font-poppins">
                  {changepasswordformik.errors.newpassword}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <div className="relative z-0 mt-0">
              <input
                type="text"
                id="confirmpassword"
                className={
                  changepasswordformik.errors.confirmpassword &&
                  changepasswordformik.touched.confirmpassword
                    ? "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px]  border-red-500 appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                    : "block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                }
                placeholder=" "
                onChange={changepasswordformik.handleChange}
                value={changepasswordformik.values.confirmpassword}
                onBlur={changepasswordformik.handleBlur}
              />
              <label
                for="name"
                className={
                  changepasswordformik.errors.confirmpassword &&
                  changepasswordformik.touched.confirmpassword
                    ? "absolute text-xs mxl:text-sm font-poppins text-red-500  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    : "absolute text-xs mxl:text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186] peer-placeholder-shown:scale-100   peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                }
              >
                Confirm Password
              </label>
              {changepasswordformik.errors.confirmpassword &&
              changepasswordformik.touched.confirmpassword ? (
                <p className="text-red-500 text-xs font-poppins">
                  {changepasswordformik.errors.confirmpassword}
                </p>
              ) : (
                ""
              )}
            </div>{" "}
            <button
              type="submit"
              className=" w-fit bg-[#87ACA3] rounded-lg px-8 text-sm py-[13px]  self-end text-[#262626] font-medium "
            >
              Change password
            </button>
          </form>
          <div className="flex items-center">
            <input
              type="checkbox"
              //   checked
              className=" cursor-pointer  rounded focus:ring-0  
              "
            />
            <input
              type="checkbox"
              name="genres"
              className="border-[#009186] border-2 checked:border-[#009186]"
              value="adventure"
              id="adventure_id"
            />
            <label for="adventure_id" className="text-sm"></label>
            <p className="text-xs ml-2">
              I would like to receive emails on service and product update
            </p>
          </div>
          <div className="flex items-center ">
            <input
              type="checkbox"
              className="border-[#009186] border"
              name="genres"
              value="adventure"
              id="adventure"
            />
            <label for="adventure" className="text-sm"></label>
            <p className="text-xs ml-2">Subscribe to news letter</p>
          </div>
          <button
            className="py-2
           hidden  mxl:py-[12px] mxl:text-xl  lg:flex text-sm   mxl:mt-[6rem] justify-center items-center text-[#009186] mt-1   rounded-lg border-2 border-[#009186] w-full "
          >
            Customer Support
            <img src={caller} alt="" className="ml-2 mxl:w-[2.8rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
