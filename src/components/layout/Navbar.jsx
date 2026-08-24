// src/components/layout/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {
  FaWhatsapp,
  FaUserCircle,
  FaSignInAlt,
  FaCog,
  FaUserShield,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAccountDropdown, setShowAccountDropdown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAccountDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
    setShowAccountDropdown(false);
  };

  const handleAdminLogin = () => {
    navigate("/admin/login");
    setShowAccountDropdown(false);
    setIsOpen(false);
  };

  const handleAdminDashboard = () => {
    navigate("/admin/dashboard");
    setShowAccountDropdown(false);
    setIsOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setShowAccountDropdown(false);
    setIsOpen(false);
    navigate("/");
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "glassmorphism-dark py-3" : "bg-transparent py-4 md:py-5"
        }`}
        style={{ height: scrolled ? "64px" : "80px" }}
      >
        <div className="container-custom flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center font-mono font-bold text-lg text-white">
              K
            </div>
            <div>
              <span className="text-2xl font-heading font-bold gradient-text">
                KAIN
              </span>
              <span className="block text-xs text-[#FF6B00] font-mono">
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
                    : "text-text-primary hover:text-[#FF6B00]"
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

            {/* Account Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                className={`flex items-center space-x-2 text-text-primary hover:text-[#FF6B00] transition-colors ${
                  location.pathname === "/admin/login" ||
                  location.pathname === "/admin/dashboard"
                    ? "text-[#FF6B00]"
                    : ""
                }`}
              >
                <FaUserCircle className="text-2xl" />
                <span className="text-sm font-medium hidden lg:inline">
                  Account
                </span>
              </button>

              <AnimatePresence>
                {showAccountDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl border border-[#333333] z-50"
                  >
                    {isAuthenticated ? (
                      <div className="py-2">
                        <div className="px-4 py-3 border-b border-[#333333]">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                              <FaUserShield className="text-[#FF6B00] text-xl" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                Admin
                              </p>
                              <p className="text-xs text-gray-400">
                                Administrator
                              </p>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={handleAdminDashboard}
                          className="w-full px-4 py-3 text-left hover:bg-[#333333] transition-colors flex items-center space-x-3 text-white"
                        >
                          <FaCog className="text-gray-400" />
                          <span className="text-sm">Dashboard</span>
                        </button>
                        <button
                          onClick={handleLogout}
                          className="w-full px-4 py-3 text-left hover:bg-[#333333] transition-colors flex items-center space-x-3 border-t border-[#333333] text-white"
                        >
                          <FaSignInAlt className="text-red-500" />
                          <span className="text-sm text-red-500">Logout</span>
                        </button>
                      </div>
                    ) : (
                      <div className="py-2">
                        <div className="px-4 py-3 border-b border-[#333333]">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                              <FaUserCircle className="text-[#FF6B00] text-xl" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                Guest User
                              </p>
                              <p className="text-xs text-gray-400">
                                Sign in for admin access
                              </p>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={handleAdminLogin}
                          className="w-full px-4 py-3 text-left hover:bg-[#333333] transition-colors flex items-center space-x-3 text-white"
                        >
                          <FaSignInAlt className="text-[#FF6B00]" />
                          <span className="text-sm">Admin Login</span>
                        </button>
                        <div className="px-4 py-2 border-t border-[#333333]">
                          <p className="text-xs text-gray-500">
                            <span className="text-[#FF6B00]">🔒</span> Secure
                            admin access
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${
                import.meta.env.VITE_WHATSAPP_NUMBER || "919911109709"
              }`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors flex-shrink-0"
            >
              <FaWhatsapp className="text-lg" />
              <span className="text-sm font-medium hidden lg:inline">
                WhatsApp
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => {
                if (isAuthenticated) {
                  navigate("/admin/dashboard");
                } else {
                  navigate("/admin/login");
                }
                setIsOpen(false);
              }}
              className="text-2xl text-text-primary hover:text-[#FF6B00] transition-colors"
            >
              <FaUserCircle />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-text-primary hover:text-[#FF6B00] transition-colors"
            >
              {isOpen ? <IoClose /> : <GiHamburgerMenu />}
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
              style={{ maxHeight: "80vh", overflowY: "auto" }}
            >
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3 pb-4 border-b border-[#333333]">
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/20 flex items-center justify-center">
                    <FaUserCircle className="text-[#FF6B00] text-xl" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {isAuthenticated ? "Admin" : "Guest User"}
                    </p>
                    <p className="text-xs text-gray-400">
                      {isAuthenticated
                        ? "Administrator"
                        : "Sign in for admin access"}
                    </p>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleNavClick}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.path
                        ? "text-[#FF6B00]"
                        : "text-text-primary hover:text-[#FF6B00]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {isAuthenticated ? (
                  <>
                    <button
                      onClick={handleAdminDashboard}
                      className="text-left text-lg font-medium text-text-primary hover:text-[#FF6B00] transition-colors"
                    >
                      📊 Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="text-left text-lg font-medium text-red-500 hover:text-red-400 transition-colors"
                    >
                      🚪 Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={handleAdminLogin}
                    className="text-left text-lg font-medium text-[#FF6B00] hover:text-[#CC5500] transition-colors"
                  >
                    🔐 Admin Login
                  </button>
                )}

                <a
                  href={`https://wa.me/${
                    import.meta.env.VITE_WHATSAPP_NUMBER || "919911109709"
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
      {/* Spacer div to push content down - matching navbar height */}
      <div
        className={`${scrolled ? "h-16" : "h-20"} md:${scrolled ? "h-16" : "h-20"}`}
      />
    </>
  );
};

export default Navbar;
