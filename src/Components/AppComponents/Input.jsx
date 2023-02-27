import React from "react";

const Input = () => {
  return (
    <div class="relative z-0 mt-2">
      <input
        type="text"
        id="small_standard"
        class="block font-poppins  w-full pl-8 pb-1 pt-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-[1.5px] border-[#262626] appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-[#009186] peer"
        placeholder=" "
      />
      <label
        for="small_standard"
        class="absolute text-xs font-poppins text-[#262626]  duration-300 transform -translate-y-6 scale-75 top-4 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#009186]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Name
      </label>
    </div>
  );
};

export default Input;
