import React from "react";

const LandingPage = () => {
  return (
    <div className="font-poppins">
      <div className="relative">
        <img
          src={heroBg}
          className="object-cover h-[45rem] absolute blur-[2.3px] "
        />
        <div className="bg-[#00302D]/[0.85] w-full h-[45rem] z-40 relative  mix-blend-multiply   mt-[-10rem]"></div>
        <Nav />

        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
