import { Routes, Route } from "react-router-dom";
import {ChangePassword, Dashboard, ForgotPassword, Login, LoginType, Signup, VerifyOTP} from "./component";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/login-type" element={<LoginType />} />
        <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
