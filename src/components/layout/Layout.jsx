// src/components/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "../ui/WhatsAppButton";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D] flex flex-col">
      <Navbar />
      {/* Add proper padding-top to account for fixed navbar */}
      <main className="flex-1 pt-20 md:pt-24 lg:pt-28">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
