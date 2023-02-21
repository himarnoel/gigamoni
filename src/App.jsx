import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import heroBg from "./assets/hero/bg.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <img
        src={heroBg}
        className="object-cover h-[45rem] absolute "
      />
      <div className="bg-[#00302D]/[0.85] w-full h-[45rem] z-40 relative  mix-blend-multiply   mt-[-10rem]"></div>
      <Nav />
    </div>
  );
}

export default App;

{
  /* <Nav/> */
}
