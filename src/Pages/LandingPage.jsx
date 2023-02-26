import React from "react";
import heroBg from "../assets/hero/bg.png";
import {
  Hero,
  Nav,
  Send,
  Steps,
  Reason,
  Services,
  Contact,
  Faqs,
  Foot,
} from "../Components/LandingPageComponents/index";

const LandingPage = () => {
 

  return (
    <div className="font-poppins bg-[]">
      <div className="relative">
        <img
          src={heroBg}
          className="   w-full    h-[53rem] sm:h-[50rem] md:h-[36rem] lg:h-[40rem] xl:h-[42rem] object-cover absolute  "
        />
        <div className="bg-[#00302D]/[0.85] w-full  h-[53rem] sm:h-[50rem] md:h-[36rem] lg:h-[40rem] xl:h-[42rem] z-40 relative  mix-blend-multiply    lg:mt-[-10rem]"></div>
        <Nav/>
        <Hero />
      </div>
      <Send />
      <Steps />
      <Reason />
      <Services />
      <Contact />
      <Faqs />
      <Foot />

    </div>
  );
};

export default LandingPage;
