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

        <p
          className=" absolute top-80 left-16 text-white z-40 text-4xl w-[30rem] leading-loose
        "
        >
          Transfer globally, finance locally with{" "}
          <span className="relative">
            <img src={circle} alt="" className="object-contain w-48 absolute z-[60]" />
            <p className="relative left-10  ">ease</p>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;

{
  /* <Nav/> */
}
