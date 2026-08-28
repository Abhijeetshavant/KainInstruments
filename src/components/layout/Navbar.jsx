// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaWhatsapp, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check authentication status on mount and route change
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    setIsAuthenticated(!!token);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleAccountClick = () => {
    // Check if user is authenticated
    const token = localStorage.getItem("adminToken");
    if (token) {
      // If authenticated, go to dashboard
      navigate("/admin/dashboard");
    } else {
      // If not authenticated, go to login
      navigate("/admin/login");
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0D0D]/95 backdrop-blur-lg shadow-lg border-b border-gray-800 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center font-mono font-bold text-lg text-white">
            K
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white">
              KAIN
            </span>
            <span className="block text-[10px] text-[#FF6B00] font-mono tracking-wider">
              INSTRUMENTS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors relative group ${
                location.pathname === link.path
                  ? "text-[#FF6B00]"
                  : "text-gray-300 hover:text-[#FF6B00]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF6B00] transition-transform ${
                  location.pathname === link.path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          ))}

          {/* Account Button - Redirects based on auth status */}
          <button
            onClick={handleAccountClick}
            className={`flex items-center space-x-2 transition-colors ${
              isAuthenticated
                ? "text-[#FF6B00] hover:text-[#CC5500]"
                : "text-gray-300 hover:text-[#FF6B00]"
            }`}
            aria-label={isAuthenticated ? "Dashboard" : "Admin Login"}
          >
            <FaUserCircle className="text-2xl" />
            <span className="text-sm font-medium hidden lg:inline">
              {isAuthenticated ? "Dashboard" : "Admin"}
            </span>
            {isAuthenticated && (
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            )}
          </button>

          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${
              import.meta.env.VITE_WHATSAPP_NUMBER || "919650895809"
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors"
          >
            <FaWhatsapp className="text-lg" />
            <span className="text-sm font-medium hidden lg:inline">
              WhatsApp
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          {/* Mobile Account Button - Redirects based on auth status */}
          <button
            onClick={handleAccountClick}
            className={`text-2xl transition-colors ${
              isAuthenticated
                ? "text-[#FF6B00]"
                : "text-gray-300 hover:text-[#FF6B00]"
            }`}
            aria-label={isAuthenticated ? "Dashboard" : "Admin Login"}
          >
            <FaUserCircle />
            {isAuthenticated && (
              <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-gray-300 hover:text-[#FF6B00] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A1A1A] absolute top-full left-0 w-full p-6 border-b border-[#333333]"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`text-lg font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-[#FF6B00]"
                      : "text-gray-300 hover:text-[#FF6B00]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Account Action */}
              <button
                onClick={handleAccountClick}
                className={`text-left text-lg font-medium transition-colors ${
                  isAuthenticated
                    ? "text-[#FF6B00] hover:text-[#CC5500]"
                    : "text-[#FF6B00] hover:text-[#CC5500]"
                }`}
              >
                {isAuthenticated ? "📊 Dashboard" : "🔐 Admin Login"}
              </button>

              <a
                href={`https://wa.me/${
                  import.meta.env.VITE_WHATSAPP_NUMBER || "919650895809"
                }`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full transition-colors mt-2"
              >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
