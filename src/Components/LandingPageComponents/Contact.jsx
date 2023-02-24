import React from "react";
import img from "../../assets/contact/call.svg";
const Contact = () => {
  return (
    <div className="mt-20 text-center mb-[40rem]">
      <p className="text-[#2B7C85] text-sm text-[20px]">Contact Us</p>
      <p className="text-[#175873] text-3xl mt-4 font-semibold ">
        We would like to hear from you
      </p>

      <div className="w-full flex ">
        <div className="flex flex-col">
          <p>Our friendly 24/7 support team is here to help you</p>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
