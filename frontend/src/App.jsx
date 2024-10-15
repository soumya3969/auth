import { Route, Routes } from "react-router-dom";
import FLoatingShape from "./components/FloatingShape";
import SignUpPage from "./Pages/SignUpPage";
import LogInPage from "./Pages/LogInPage";
import EmailVerificationPage from "./Pages/EmailVerificationPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
      <FLoatingShape
        color="bg-green-500"
        size="w-64 h-64"
        top="5%"
        left="10%"
        delay={0}
      />
      <FLoatingShape
        color="bg-emerald-500"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FLoatingShape
        color="bg-green-300"
        size="w-32 h-32"
        top="40%"
        left="0%"
        delay={3}
      />

      {/* !!!!!!!! App Routes !!!!!!!! */}
      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
