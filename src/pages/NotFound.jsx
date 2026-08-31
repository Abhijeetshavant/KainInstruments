// src/pages/NotFound.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome, FaArrowLeft, FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg w-full text-center"
      >
        {/* 404 Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex justify-center mb-6"
        >
          <div className="w-32 h-32 bg-[#FF6B00]/10 rounded-full flex items-center justify-center border-4 border-[#FF6B00]/20">
            <FaExclamationTriangle className="text-6xl text-[#FF6B00]" />
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-8xl md:text-9xl font-bold text-[#FF6B00] font-mono"
        >
          404
        </motion.h1>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl font-bold text-white mt-4"
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 mt-3 text-sm md:text-base"
        >
          Oops! The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Go Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#333333] hover:bg-[#404040] text-white rounded-lg transition-all hover:scale-105"
          >
            <FaArrowLeft className="text-sm" />
            <span>Go Back</span>
          </button>

          {/* Go Home Button */}
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B00] hover:bg-[#CC5500] text-white rounded-lg transition-all hover:scale-105"
          >
            <FaHome className="text-sm" />
            <span>Go Home</span>
          </Link>
        </motion.div>

        {/* Warning Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg"
        >
          <p className="text-sm text-yellow-400">
            ⚠️ The page you requested could not be found. Please check the URL
            or navigate using the buttons above.
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap justify-center gap-4 text-xs text-gray-600"
        >
          <Link to="/" className="hover:text-[#FF6B00] transition-colors">
            Home
          </Link>
          <span>|</span>
          <Link
            to="/products"
            className="hover:text-[#FF6B00] transition-colors"
          >
            Products
          </Link>
          <span>|</span>
          <Link
            to="/services"
            className="hover:text-[#FF6B00] transition-colors"
          >
            Services
          </Link>
          <span>|</span>
          <Link
            to="/contact"
            className="hover:text-[#FF6B00] transition-colors"
          >
            Contact
          </Link>
        </motion.div>

        {/* Company Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8"
        >
          <div className="w-12 h-12 bg-[#FF6B00] rounded-lg flex items-center justify-center font-mono font-bold text-lg text-white mx-auto">
            K
          </div>
          <p className="text-xs text-gray-600 mt-2">
            © {new Date().getFullYear()} KAIN Instruments. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
