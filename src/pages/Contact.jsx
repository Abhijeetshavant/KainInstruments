import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import axios from "axios";
import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaGlobe,
  FaUserTie,
  FaCheckCircle,
  FaSpinner,
  FaPaperPlane,
  FaCopy,
  FaCheck,
} from "react-icons/fa";

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  subject: z.string().min(5, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  company: z.string().optional(),
  inquiryType: z.enum([
    "General Inquiry",
    "Product Information",
    "Service Request",
    "Quote Request",
    "Order Related",
    "Technical Support",
    "Partnership",
    "Other",
  ]),
  preferredContact: z.enum(["phone", "email", "whatsapp"]),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(null);
  const [showWhatsAppOption, setShowWhatsAppOption] = useState(false);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      inquiryType: "General Inquiry",
      preferredContact: "phone",
    },
  });

  // API function to send inquiry to backend
  const sendInquiry = async (data) => {
    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
    const response = await axios.post(`${API_URL}/inquiries`, data);
    return response.data;
  };

  const onSubmit = async (data) => {
    try {
      setIsSubmitting(true);

      // Send to backend
      const response = await sendInquiry(data);
      setFormData(data);
      setIsSuccess(true);

      toast.success(
        "Message sent successfully! We'll get back to you within 24 hours.",
      );
      console.log("Inquiry submitted:", response);

      // Show WhatsApp option after successful submission
      setShowWhatsAppOption(true);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    reset();
    setIsSuccess(false);
    setShowWhatsAppOption(false);
    setFormData(null);
    setCopied(false);
  };

  // Generate WhatsApp message
  const getWhatsAppMessage = () => {
    if (!formData) return "";
    return `Hello KAIN Instruments Team,

I have submitted a contact form with the following details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "N/A"}
Inquiry Type: ${formData.inquiryType}
Subject: ${formData.subject}
Preferred Contact: ${formData.preferredContact}

Message:
${formData.message}

Please get back to me at the earliest. Thank you!`;
  };

  // Handle WhatsApp send
  const handleWhatsAppSend = () => {
    const message = getWhatsAppMessage();
    const whatsappNumber = "919911109709";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
    toast.success("Opening WhatsApp...");
  };

  // Copy message to clipboard
  const handleCopyMessage = () => {
    const message = getWhatsAppMessage();
    navigator.clipboard
      .writeText(message)
      .then(() => {
        setCopied(true);
        toast.success("Message copied to clipboard!");
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(() => {
        toast.error("Failed to copy message");
      });
  };

  const inquiryType = watch("inquiryType");

  return (
    <>
      <Helmet>
        <title>Contact KAIN Instruments – Industrial Solutions Provider</title>
        <meta
          name="description"
          content="Get in touch with Kain Instruments for industrial equipment, machinery, electrical solutions, and engineering support across India."
        />
      </Helmet>

      <div className="pt-20 min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A1A]">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-sm font-semibold mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-[#FF6B00]">KAIN Instruments</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have questions about our products or services? Reach out to our
              team and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          {/* Quick Contact Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              {
                icon: FaWhatsapp,
                label: "WhatsApp",
                value: "Chat Now",
                color: "text-green-500",
                href: "https://wa.me/919911109709",
              },
              {
                icon: FaPhone,
                label: "Call Us",
                value: "+91 9650895809",
                color: "text-[#FF6B00]",
                href: "tel:+919650895809",
              },
              {
                icon: FaEnvelope,
                label: "Email",
                value: "info@kaininstruments.com",
                color: "text-blue-500",
                href: "mailto:info@kaininstruments.com",
              },
              {
                icon: FaClock,
                label: "Hours",
                value: "Mon-Sat, 9AM-6PM",
                color: "text-gray-400",
                href: "#",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#1A1A1A] p-4 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all border border-[#333333] hover:border-[#FF6B00]"
              >
                <item.icon
                  className={`text-3xl mx-auto mb-2 ${item.color} group-hover:scale-110 transition-transform`}
                />
                <p className="text-xs text-gray-500">{item.label}</p>
                <p className="text-sm font-semibold text-white break-words">
                  {item.value}
                </p>
              </motion.a>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#1A1A1A] p-6 md:p-8 rounded-2xl shadow-xl border border-[#333333]"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Send Us a Message
              </h2>

              {isSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Sent! ✅
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>

                  {/* WhatsApp Option */}
                  <AnimatePresence>
                    {showWhatsAppOption && formData && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                      >
                        <p className="text-sm text-gray-400">
                          💬 Connect with us on WhatsApp for faster response:
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <button
                            onClick={handleWhatsAppSend}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all text-sm shadow-lg shadow-green-500/20"
                          >
                            <FaWhatsapp className="text-xl" />
                            Send via WhatsApp
                          </button>

                          <button
                            onClick={handleCopyMessage}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all text-sm"
                          >
                            {copied ? (
                              <>
                                <FaCheck className="text-green-500" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <FaCopy />
                                Copy Message
                              </>
                            )}
                          </button>
                        </div>

                        <button
                          onClick={handleReset}
                          className="mt-2 text-sm text-gray-500 hover:text-[#FF6B00] transition-colors"
                        >
                          Send another message →
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("name")}
                      type="text"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                      placeholder="+91 98765 43210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Company Name
                    </label>
                    <input
                      {...register("company")}
                      type="text"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                      placeholder="Enter your company name"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register("subject")}
                      type="text"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                      placeholder="Enter subject"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      {...register("inquiryType")}
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Information">
                        Product Information
                      </option>
                      <option value="Service Request">Service Request</option>
                      <option value="Quote Request">Quote Request</option>
                      <option value="Order Related">Order Related</option>
                      <option value="Technical Support">
                        Technical Support
                      </option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Preferred Contact */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                        <input
                          {...register("preferredContact")}
                          type="radio"
                          value="phone"
                          className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00]"
                        />
                        Phone Call
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                        <input
                          {...register("preferredContact")}
                          type="radio"
                          value="email"
                          className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00]"
                        />
                        Email
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-gray-300">
                        <input
                          {...register("preferredContact")}
                          type="radio"
                          value="whatsapp"
                          className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00]"
                        />
                        WhatsApp
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows="5"
                      className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all resize-none"
                      placeholder="Tell us about your requirements in detail..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF6B00] text-white py-3.5 rounded-lg font-semibold hover:bg-[#E05A00] transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-[#FF6B00]/20"
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy.
                    We'll contact you via your preferred method.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-2xl shadow-xl border border-[#333333]">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <FaUserTie className="text-[#FF6B00]" />
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <FaMapMarkerAlt className="text-[#FF6B00] text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-white">
                        Office Address
                      </h4>
                      <p className="text-gray-400 text-sm">
                        G-91 Tirkha Colony, Ballabhgarh,
                        <br />
                        Faridabad - 121004, Haryana
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <FaPhone className="text-[#FF6B00] text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <a
                        href="tel:+919650895809"
                        className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm block"
                      >
                        +91 9650895809
                      </a>
                      <a
                        href="tel:+919911109709"
                        className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm block"
                      >
                        +91 9911109709 (WhatsApp)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <FaEnvelope className="text-[#FF6B00] text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a
                        href="mailto:info@kaininstruments.com"
                        className="text-gray-400 hover:text-[#FF6B00] transition-colors text-sm"
                      >
                        info@kaininstruments.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <FaClock className="text-[#FF6B00] text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-semibold text-white">
                        Working Hours
                      </h4>
                      <p className="text-gray-400 text-sm">
                        Monday - Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#333333]">
                    <div className="flex items-center gap-3 mb-2">
                      <FaWhatsapp className="text-green-500 flex-shrink-0" />
                      <a
                        href="https://wa.me/919911109709"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-500 transition-colors text-sm"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaGlobe className="text-[#FF6B00] flex-shrink-0" />
                      <span className="text-gray-400 text-sm">
                        PAN India Service Available
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl border border-[#333333] h-60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.876543210987!2d77.3277!3d28.4089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI0JzMyLjAiTiA3N8KwMTknMzkuNyJF!5e0!3m2!1sen!2sin!4v1699999999999"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KAIN Instruments Location - Faridabad"
                />
              </div>

              {/* Quick Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#FF6B00]/10 p-4 rounded-2xl border border-[#FF6B00]/20"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-sm text-gray-400">
                    📍 Get directions to our office
                  </span>
                  <a
                    href="https://www.google.com/maps/dir//G-91+Tirkha+Colony+Ballabhgarh+Faridabad+Haryana+121004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-[#FF6B00] hover:bg-[#E05A00] text-white rounded-full text-sm font-semibold transition-all text-center w-full sm:w-auto shadow-lg shadow-[#FF6B00]/20"
                  >
                    Open in Maps
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Float Button */}
              <motion.a
                href="https://wa.me/919911109709"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="block bg-green-500 text-white p-4 rounded-2xl text-center hover:bg-green-600 transition-all shadow-lg shadow-green-500/20"
              >
                <div className="flex items-center justify-center gap-2">
                  <FaWhatsapp className="text-2xl" />
                  <span className="font-semibold">
                    Chat with us on WhatsApp
                  </span>
                </div>
                <p className="text-sm text-white/80 mt-1">
                  Quick response within minutes
                </p>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
