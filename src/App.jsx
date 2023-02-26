import { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <Nav/> */
}
