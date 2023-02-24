import React from "react";
import map from "../../assets/contact/map.svg";
import call from "../../assets/contact/call.svg";
const Contact = () => {
  return (
    <div className="mt-20 text-center mb-[40rem]bg-[#87ACA3]  w-full pb-20  px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem]  py-[1rem] mb-[40rem]">
      <p className="text-[#2B7C85] text-sm text-[20px]">Contact Us</p>
      <p className="text-[#175873] text-3xl mt-4 font-semibold ">
        We would like to hear from you
      </p>

      <div className="w-full flex ">
        <div className="flex flex-col">
          <p>Our friendly 24/7 support team is here to help you</p>
          <div className="relative mt-1">
            <img src={map} className="object-cover" />
            <img
              src={call}
              className="object-contain w-20 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
