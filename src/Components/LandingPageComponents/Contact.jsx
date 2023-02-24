import React from "react";
import map from "../../assets/contact/map.svg";
import call from "../../assets/contact/call.svg";
import { HiEnvelope } from "react-icons/hi2";
import { RiPhoneFill } from "react-icons/ri";
const Contact = () => {
  return (
    <div className="mt-20 text-center mb-[40rem]bg-[#87ACA3]  w-full pb-20  px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem]  py-[1rem] mb-[40rem]">
      <p className="text-[#2B7C85] text-sm text-[20px]">Contact Us</p>
      <p className="text-[#175873] text-3xl mt-4 font-semibold ">
        We would like to hear from you
      </p>

      <div className="w-full grid md:grid-cols-2">
        <div className="flex flex-col">
          <div className="font-medium mt-5">
            <p className="text-xs text-left ">
              Our friendly 24/7 support team is here to help you
            </p>
            <p className="flex text-xs text-[#009186] mt-5">
              <HiEnvelope className="text-sm mr-2" />
              <p>Email: support@gigamoni.com</p>
            </p>
            <p className="text-xs  flex text-[#009186] mt-5">
              <RiPhoneFill className="text-sm mr-2" />
              <p> Phone: +2347040940000</p>
            </p>
          </div>
          <div className="relative mt-5 w-full">
            <img src={map} className="object-contain" />
            <img
              src={call}
              className="object-contain w-[7rem] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
            />
          </div>
        </div>
        <div>
          <div>
            {" "}
            <p className="text-[#2B7C85] text-[24px] font-semibold text-right md:mr-4">
              Tell us how we can serve you better
            </p>
            <p className="text-[#262626] text-xs text-right ">
              Let’s make your payments easier, together.
            </p>
          </div>
          <form action="" method="post" onSubmit="">
            <input
              name="text"
              id="name"
              placeholder="Name"
              className={`border border-solid border-[#87ACA3] mt-3 p-2 rounded-md w-full  focus:outline-[#D1D1D1] placeholder:text-xs placeholder:text-[#707070] `}
              type="name"
              // onChange={formik.handleChange}
              // value={formik.values.password}
              // onBlur={formik.handleBlur}
              required
            />{" "}
            <input
              name="email"
              id="email"
              placeholder="Email Address"
              className={`border border-solid border-[#87ACA3] mt-3 p-2 rounded-md w-full  focus:outline-[#D1D1D1] placeholder:text-xs placeholder:text-[#707070]  `}
              type="email"
              // onChange={formik.handleChange}
              // value={formik.values.password}
              // onBlur={formik.handleBlur}
              required
            />{" "}
            <textarea
              placeholder="Drop a messages for us"
              className={`border border-solid border-[#87ACA3] mt-3 p-2 rounded-md w-full  focus:outline-[#D1D1D1] placeholder:text-xs placeholder:text-[#707070] `}
              type="text"
              name="message"
              id="message"
              cols="30"
              rows="10"
              // onChange={formik.handleChange}
              // value={formik.values.password}
              // onBlur={formik.handleBlur}
              required
            ></textarea>
            <button
              className="p-5 rounded-[8px] text-[#F8F8FF] bg-[#009186]"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
