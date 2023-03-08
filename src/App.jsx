import { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import {
  Login,
  Signup,
  CheckMail,
  VerifyMail,
  Forgot,
  RecoverPass,
  NewPassword,
} from "./Pages/Auth/index";
import Dashboard from "./Pages/Dashboard";
import Success from "./Pages/Auth/Success";
import SetMobile from "./Pages/Auth/SetMobile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/check" element={<CheckMail />} />
        <Route path="/mobile" element={<SetMobile />} />
        <Route path="/verify" element={<VerifyMail />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/recover" element={<RecoverPass />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
