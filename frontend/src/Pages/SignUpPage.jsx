import { motion } from "framer-motion";
import Input from "./../components/Input";
import {
  CircleUserRound,
  ExternalLink,
  Fingerprint,
  Loader,
  LockKeyhole,
  Mail,
  UserCheck
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      navigate("/verify-email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          <span>
            <Fingerprint className="size-7 text-green-400 inline-block animate-pulse" />{" "}
            Create Account{" "}
          </span>
        </h2>
        <form onSubmit={handleSignUp}>
          <Input
            icon={CircleUserRound}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={LockKeyhole}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* =======error message======*/}
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          {/* ======Password strength indicator===== */}

          <PasswordStrengthMeter password={password} />

          <motion.button
            className="mt-5 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="animate-spin mx-auto " size={24} />
            ) : (
              <span className="w-6 h-5">
                Sign Up{" "}
                <UserCheck className="w-6 h-5 inline-block animate-pulse" />
              </span>
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-gray-400 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400 font-bold hover:underline"
          >
            <span>
              {" "}
              Log In <ExternalLink className="inline-block size-4" />
            </span>
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
