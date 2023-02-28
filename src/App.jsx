import { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import CheckMail from "./Pages/Auth/CheckMail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/check" element={<CheckMail />} />
      </Routes>
    </div>
  );
}

export default App;
