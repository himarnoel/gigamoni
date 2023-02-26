import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import img from "../../assets/app_assets/bg1.png";
const Signup = () => {
  return (
    <div>
      <NavBar />
      <div className="grid md:grid-cols-2  h-screen ">
        <div className="sjs w-full lg:px-10 xl:px-[8rem] 2xl:px-[10rem] pt-[5.4rem]">
          <h2 className="text-center text-[1.9rem] font-semibold text-[#262626]">
            Create Account
          </h2>
          <h1 className="text-4xl font-bold mt-10">Hello,</h1>
          <div class="relative z-0">
            <input
              type="text"
              id="small_standard"
              class="block font-poppins mt-10 w-full pl-5 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
              placeholder=" "
            />
            <label
              for="small_standard"
              class="absolute text-sm font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
        </div>
        <div className="ssds w-full h-screen bg lg:px-10 xl:px-[8rem] 2xl:px-[10rem]"></div>
      </div>
    </div>
  );
};

export default Signup;
