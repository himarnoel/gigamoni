import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import heroBg from "./assets/hero/bg.png";
import circle from "./assets/hero/circle.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-poppins">
      <div className="relative">
        <img src={heroBg} className="object-cover h-[45rem] absolute " />
        <div className="bg-[#00302D]/[0.85] w-full h-[45rem] z-40 relative  mix-blend-multiply   mt-[-10rem]"></div>
        <Nav />

        <div className="grid lg:grid-cols-2">
          <div
            className=" absolute top-80 left-16 text-white z-40 text-4xl  leading-loose
        "
          >
            <p> Transfer globally, finance </p>
            <div className="flex items-center">
              {" "}
              <span className="relative w-[20rem] flex">
                <p>locally</p>
                <img
                  src={circle}
                  alt=""
                  className="object-contain w-[13.5rem] left-[6.5rem] top-0  absolute z-[60]"
                />
                <p className="relative left-1"> with ease</p>
              </span>
            </div>
            <p className="text-[1.2rem] font-[600] w-[30rem] leading-[1.7] mt-3">
              Make international transactions with ease. Get money across to
              family, friends, and business partners faster and easier{" "}
            </p>

            <ol>
              <li>Transfer money online in African currencies</li>
              <li>Payment received in USD, GBP, and EUR </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <Nav/> */
}
