import { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import CheckMail from "./Pages/Auth/CheckMail";
import VerifyMail from "./Pages/Auth/VerifyMail";
import Forgot from "./Pages/Auth/Forgot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/check" element={<CheckMail />} />
        <Route path="/verify" element={<VerifyMail />} />
        <Route path="/forgot" element={<Forgot />} />
      </Routes>
    </div>
  );
}

export default App;
