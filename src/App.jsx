import { useState } from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Navigate, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "react-datepicker/dist/react-datepicker.css";
import {
  Login,
  Signup,
  CheckMail,
  VerifyMail,
  Forgot,
  RecoverPass,
  NewPassword,
} from "./Pages/Auth/index";
import Dashboard from "./Pages/Main_Pages/Dashboard";
import Success from "./Pages/Auth/Success";
import SetMobile from "./Pages/Auth/SetMobile";
import Send from "./Pages/Send_Money/Send";
import LessThan from "./Pages/Send_Money/LessThan";
import NoAcctModal from "./Pages/Send_Money/NoAcctModal";
import BeneficiaryMobile from "./Pages/Main_Pages/BeneficiaryMobile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
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
        <Route path="/send" element={<Send />} />
        <Route path="/less" element={<LessThan />} />
        <Route path="/noacct" element={<NoAcctModal />} />
        <Route path="/beneficiary" element={<BeneficiaryMobile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
