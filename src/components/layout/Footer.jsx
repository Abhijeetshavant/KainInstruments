import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] border-t border-[#333333] mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#FF6B00] rounded-lg flex items-center justify-center font-mono font-bold text-lg text-white">
                K
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  KAIN
                </span>
                <span className="block text-xs text-[#FF6B00] font-mono">
                  INSTRUMENTS
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Precision mechanical and electrical instruments for India's
              industrial growth.
            </p>
            {/* Address */}
            <div className="flex items-start gap-2 text-sm text-gray-400">
              <FaMapMarkerAlt className="text-[#FF6B00] mt-1 flex-shrink-0" />
              <span>
                G-91, Trikha Colony, Ballabgarh, <br />
                Faridabad - 121004, Haryana
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <FaPhone className="text-[#FF6B00]" />
                <a
                  href="tel:+919650895809"
                  className="hover:text-[#FF6B00] transition-colors"
                >
                  +91 96508 95809
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-green-500" />
                <a
                  href="https://wa.me/919650895809"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6B00] transition-colors"
                >
                  +91 9650895809
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF6B00]" />
                <a
                  href="mailto:info@kaininstruments.com"
                  className="hover:text-[#FF6B00] transition-colors"
                >
                  info@kaininstruments.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe for product updates and industry news.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-[#333333] border border-[#404040] rounded-l-lg focus:outline-none focus:border-[#FF6B00] text-sm text-white"
              />
              <button
                type="submit"
                className="px-4 bg-[#FF6B00] rounded-r-lg hover:bg-[#CC5500] transition-colors text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#333333]">
          <div className="flex justify-center text-sm text-gray-500">
            <p>© {currentYear} KAIN Instruments. All rights reserved.</p>
          </div>

          <div className="flex justify-center mt-3 text-sm text-gray-500">
            <p>
              Developed by{" "}
              <a
                href="#"
                className="text-[#FF6B00] hover:text-[#CC5500] transition-colors font-medium"
              >
                StarkAI Technology
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
