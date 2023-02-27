import React from "react";
import NavBar from "./../../Components/AppComponents/NavBar";
import icon from "./../../assets/google-icon.svg";
import Input from "../../Components/AppComponents/Input";
const Signup = () => {
  return (
    <div className="flex flex-col h-screen ">
      <NavBar class="" />
      <div className="grid md:grid-cols-2   flex-auto">
        <div className="w-full flex flex-col justify-around">
          <div className="">
            <h2 className="text-center text-[1.3rem] font-semibold text-[#262626] ">
              Create Account
            </h2>
            <h1 className="text-[1.5rem] font-bold  lg:mx-10 xl:mx-[5rem] 2xl:mx-[10rem]">
              Hello,
            </h1>
          </div>

          <div className="lg:h-[24rem] xl:h-[24rem]   flex flex-col justify-between   lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem]">
            <div class="relative z-0 mt-0">
              <input
                type="text"
                id="name"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="name"
                class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div class="relative z-0 ">
              <input
                type="email"
                id="email"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="email"
                class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>{" "}
            <div class="relative z-0 ">
              <input
                type="text"
                id="phonenumber"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
              />
              <label
                for="phonenumber"
                class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>{" "}
            <div class="relative z-0 ">
              <select
                type="text"
                id="country"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder="Country"
              >
                <option disabled={true} value="">
                  --Choose and option--
                </option>
              </select>
              <label
                for="country"
                class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-25 peer-focus:top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country
              </label>
            </div>{" "}
            <div class="relative z-0 ">
              <input
                type="text"
                id="password"
                class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none   focus:outline-none focus:ring-0 focus:border-[#009186] peer"
                placeholder=" "
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
                Name
              </label>
            </div>
            <button className="px-5 py-2 self-end  mt-5 bg-[#009186] text-[#F8F8FF] rounded-[8px] font-semibold">
              Create Account
            </button>
          </div>

          <div>
            {" "}
            <span className="flex items-center  lg:mx-10 xl:mx-[8rem] 2xl:mx-[10rem] ">
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
