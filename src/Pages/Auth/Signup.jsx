import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import icon from "./../../assets/google-icon.svg";
const Signup = () => {
  return (
    <div>
      <NavBar />
      <div className="grid md:grid-cols-2  h-screen ">
        <div className="w-full  pt-[4rem]">
          <h2 className="text-center text-[1.5rem] font-semibold text-[#262626] ">
            Create Account
          </h2>
          <h1 className="text-3xl font-bold mt-3 lg:mx-10 xl:mx-[5rem] 2xl:mx-[10rem]">
            Hello,
          </h1>
          <div className="h-[25rem] flex flex-col justify-evenly lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
            <div class="relative z-0">
              <input
                type="text"
                id="small_standard"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="small_standard"
                class="absolute text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>{" "}
            <div class="relative z-0">
              <input
                type="text"
                id="small_standard"
                class="block font-poppins w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="small_standard"
                class="absolute text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>{" "}
            <div class="relative z-0">
              <input
                type="text"
                id="small_standard"
                class="block font-poppins w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="small_standard"
                class="absolute text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>{" "}
            <div class="relative z-0">
              <input
                type="text"
                id="small_standard"
                class="block font-poppins w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="small_standard"
                class="absolute text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country
              </label>
            </div>{" "}
            <div class="relative z-0">
              <input
                type="text"
                id="small_standard"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="small_standard"
                class="absolute text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>{" "}
            <div class="relative z-0">
              <input
                type="text"
                id="small_standard"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="small_standard"
                class="absolute text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Confirm Password
              </label>
            </div>
          </div>
          <button className="px-3 py-2 float-right lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem] bg-[#009186] text-[#F8F8FF] rounded-[8px] font-semibold">
            Create Account
          </button>
          <span className="flex items-center mt-10 lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
            {" "}
            <p className=" text-[#262626] mr-2">Already have an account?</p>
            <span className="text-[#009186]">Login</span>
          </span>

          <span className=" flex items-center justify-center py-3 border-2  border-[#009186] border-solid rounded-[8px] mt-10 mb-4 lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
            {" "}
            <p className="mr-2  text-[#009186]"> Continue with Google</p>
            <img src={icon} alt="" className="object-contain w-5" />
          </span>
        </div>
        <div className="ssds w-full h-full bg lg:px-10 xl:px-[8rem] 2xl:px-[10rem] flex justify-center items-center">
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
