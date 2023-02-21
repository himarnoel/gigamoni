import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav";
import heroBg from "./assets/hero/bg.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <img src={heroBg} className="object-cover h-[45rem] absolute blur-[3px]" />
      <div className="bg-[#00302D] w-full h-[45rem] z-40  mt-[-10rem]"></div>
    </div>
  );
}

export default App;

{
  /* <Nav/> */
}
