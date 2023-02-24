import React from "react";
import bg from "../../assets/Rectangle.png";
const Services = () => {
  return (
    <div className="bg-[#87ACA3]  w-full mt-20 mb-[40rem] pb-20  px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem]  py-[1rem]">
      <p className="text-center text-[#F8F8FF] text-3xl font-semibold mt-5 ">
        Explore our Services
      </p>
      <div className="grid md:grid-cols-2 mt-10">
        {/* card is  self created class syle is in index.css*/}
        <div className="w-full  card  h-[20rem]  xss:h-[16rem] rounded-[14.572px] md:rounded-[23.8886px] relative mb-10">
          <img
            src={bg}
            alt=""
            className="object-cover w-full h-[20rem]  xss:h-[16rem] rounded-[16px] opacity-[0.1] md:rounded-[23.8886px] mix-blend-overlay "
          />
          <p className=" text-lg md:text-sm  lg:text-lg md:ml-5 left-0 right-0 font-semibold absolute top-[1.3rem] xss:top-[1.2rem] text-center">
            Secure Funding for Large Purchase Orders
          </p>
          <p className="text-xs font-normal mx-5 font-[#262626] absolute top-[5rem] xss:top-[4.2rem] md:top-[4.6rem] left-0 right-0 leading-[1.3rem] xss:leading-[1.5rem]   md:leading-[1.5rem] lg:leading-[2rem] ">
            We aim to provide small businesses with a new way to access working
            capital, by allowing them to crowdfund their purchase orders and
            connect with buyers directly. This eliminates the need for
            traditional lending options, which can be difficult to access and
            come with high interest rates.
          </p>
          <button className="absolute bottom-0  right-0 px-10 py-3  text-sm md:text-base bg-[#175873] rounded-tl-[4px] rounded-bl-[4px] rounded-br-[16px]  md:rounded-b-[16px] md:rounded-tl-[16px]  text-[#F8F8FF]">
            Participate
          </button>
        </div>
        <p className="flex justify-center items-center text-sm font-medium text-center  md:text-left leading-[1.5rem] md:pl-20  md:leading-[1.6rem]">
          We are providing small businesses with a new way to access working
          capital, by allowing them to crowdfund their purchase orders and
          connect with buyers directly.
        </p>
      </div>
    </div>
  );
};

export default Services;
