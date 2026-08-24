// src/Authentaction/AdminLogin.jsx
import { useState } from "react";
import { Eye, EyeOff, Lock, Mail, Shield, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setLoading(true);

    // Validate inputs
    if (!data.email.trim() || !data.password.trim()) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";

      console.log("🔐 Attempting login for:", data.email.trim());

      const response = await axios.post(`${API_URL}/admin/login`, {
        email: data.email.trim(),
        password: data.password.trim(),
      });

      console.log("✅ Login Response:", response.data);

      if (response.data.success) {
        setSuccessMsg("Welcome back, Admin! 🎉");

        // Store admin session with token
        localStorage.setItem("admin", "true");
        localStorage.setItem("adminToken", response.data.token);
        localStorage.setItem("adminUser", JSON.stringify(response.data.user));
        localStorage.setItem("adminEmail", data.email.trim());

        // Store user info separately for easy access
        if (response.data.user) {
          localStorage.setItem("userName", response.data.user.name || "Admin");
          localStorage.setItem("userRole", response.data.user.role || "admin");
          localStorage.setItem(
            "userCompany",
            response.data.user.company || "KAIN Instruments",
          );
        }

        // Navigate to dashboard after short delay
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 500);
      } else {
        setError(response.data.message || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("❌ Login Error:", err);

      if (err.response) {
        // Server responded with error
        setError(err.response.data?.message || "Invalid email or password");
      } else if (err.request) {
        // Request made but no response
        setError("Server not responding. Please check your connection.");
      } else {
        // Something else happened
        setError("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#0D0D0D] px-4 relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(ellipse_at_center,_rgba(255,107,0,0.08)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,107,0,0.05)_0%,_transparent_70%)] pointer-events-none" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#FF6B00]/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl p-8 border border-[#333333] hover:border-[#FF6B00]/30 transition-all duration-300">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="flex justify-center mb-4"
            >
              <div className="w-20 h-20 bg-[#FF6B00] rounded-2xl flex items-center justify-center font-mono font-bold text-3xl text-white shadow-lg shadow-[#FF6B00]/20">
                K
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white"
            >
              KAIN <span className="text-[#FF6B00]">Instruments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 mt-2 text-sm flex items-center justify-center gap-2"
            >
              <Shield size={14} className="text-[#FF6B00]" />
              Secure Admin Access
            </motion.p>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-[#FF6B00] to-transparent mx-auto mt-3"
            />
          </div>

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2"
            >
              <span className="text-red-500">⚠️</span>
              {error}
            </motion.div>
          )}

          {/* Success Message */}
          {successMsg && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm flex items-center gap-2"
            >
              <span className="text-green-500">✅</span>
              {successMsg}
            </motion.div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">
                Admin Email
              </label>
              <div className="flex items-center bg-[#0D0D0D] border border-[#333333] rounded-xl px-4 focus-within:ring-2 focus-within:ring-[#FF6B00]/50 focus-within:border-transparent transition-all">
                <Mail size={18} className="text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter admin email"
                  className="w-full p-3 outline-none bg-transparent text-white placeholder:text-gray-600"
                  autoComplete="email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-300 mb-1.5 block">
                Password
              </label>
              <div className="flex items-center bg-[#0D0D0D] border border-[#333333] rounded-xl px-4 focus-within:ring-2 focus-within:ring-[#FF6B00]/50 focus-within:border-transparent transition-all">
                <Lock size={18} className="text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  required
                  placeholder="Enter password"
                  className="w-full p-3 outline-none bg-transparent text-white placeholder:text-gray-600"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#FF6B00] to-[#CC5500] text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-[#FF6B00]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Logging in...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Login as Admin
                </>
              )}
            </motion.button>
          </form>

          {/* Demo Credentials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-[#0D0D0D] rounded-xl border border-[#333333]"
          >
            <p className="text-xs text-gray-500 text-center flex items-center justify-center gap-2">
              <span className="text-[#FF6B00]">🔑</span>
              Demo Credentials
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 text-xs text-gray-400 mt-1">
              <span className="flex items-center gap-1">
                📧 <span className="text-white">Admin@gmail.com</span>
              </span>
              <span className="hidden sm:block text-gray-600">|</span>
              <span className="flex items-center gap-1">
                🔒 <span className="text-white">Password</span>
              </span>
            </div>
          </motion.div>

          {/* Additional Info */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
              <span className="text-[#FF6B00]">🏭</span>
              Precision Mechanical & Electrical Instruments
            </p>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-[#333333] text-center">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} KAIN Instruments. All rights
              reserved.
            </p>
            <p className="text-[10px] text-gray-700 mt-1">
              G-91, Trikha Colony, Ballabgarh, Faridabad - 121004, Haryana
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
