import React from "react";
import bg from "../../assets/Rectangle.png";
const Services = () => {
  return (
    <div className="bg-[#87ACA3] w-full mt-20 mb-[40rem]  px-2 sm:px-10  md:px-8  lg:px-10  xl:px-[10rem]  py-[1rem]">
      <p className="text-center text-[#F8F8FF] text-xl font-semibold">
        Explore our Services
      </p>
      <div className="grid md:grid-cols-2 mt-10">
        {/* card is  self created class syle is in index.css*/}
        <div className="w-full  card  h-[16rem] rounded-[23.8886px] relative">
          <img
            src={bg}
            alt=""
            className="object-cover w-full h-[16rem] rounded-[23.8886px]"
          />
          <p className="text-lg ml-5 font-semibold absolute top-[1.5rem] text-center">
            Secure Funding for Large Purchase Orders
          </p>
        <p className="text-xs font-normal mx-5 text- absolute top-[4.6rem] left-0 right-0 leading-[2rem]">
            We aim to provide small businesses with a new way to access working
            capital, by allowing them to crowdfund their purchase orders and
            connect with buyers directly. This eliminates the need for
            traditional lending options, which can be difficult to access and
            come with high interest rates.
          </p>
          <button className="absolute bottom-0  right-0 px-8 py-3  bg-[#175873] rounded-b-[16px] rounded-tl-[16px]  text-[#F8F8FF]">
            Participate
          </button>
        </div>
        <p className="flex justify-center items-center text-xs pl-20 leading-[1.6rem]">
          We are providing small businesses with a new way to access working
          capital, by allowing them to crowdfund their purchase orders and
          connect with buyers directly.
        </p>
      </div>
    </div>
  );
};

export default Services;
