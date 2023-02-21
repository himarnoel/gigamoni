import React from "react";
import Nav from "../Components/Nav";
import heroBg from "../assets/hero/bg.png";
import Hero from "../Components/Hero";

const LandingPage = () => {
  return (
    <div className="font-poppins">
      <div className="relative">
        <img
          src={heroBg}
          className="   w-full    h-[50rem] md:h-[36rem] object-cover absolute  "
        />
        <div className="bg-[#00302D]/[0.85] w-full h-[36rem] z-40 relative  mix-blend-multiply    lg:mt-[-10rem]"></div>
        <Nav />

        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
