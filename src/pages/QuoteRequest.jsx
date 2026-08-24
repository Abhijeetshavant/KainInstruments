import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  Send,
  ShoppingBag,
  ArrowLeft,
  CheckCircle,
  FileText,
  Users,
  Calendar,
  Building2,
} from "lucide-react";
import { useQuoteCart } from "../hooks/useQuoteCart";
import { generateAIResponse } from "../services/aiService";

const QuoteRequest = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } =
    useQuoteCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    deliveryAddress: "",
    deliveryDate: "",
    industry: "",
    quantity: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aiSuggestion, setAiSuggestion] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getAIRecommendation = async () => {
    if (!formData.message && !formData.industry) {
      alert("Please describe your requirement or select an industry first.");
      return;
    }

    setIsAiLoading(true);
    try {
      const prompt = `Based on this requirement: "${formData.message}" and industry: "${formData.industry}", 
        provide recommendations for instruments, best practices, and any special considerations.
        Keep it concise and professional.`;

      const response = await generateAIResponse(prompt);
      setAiSuggestion(response);
    } catch (error) {
      console.error("AI Error:", error);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Please add at least one product to your quote request.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // In production, send to backend
    console.log("Quote Request:", { ...formData, items: cartItems });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (cartItems.length === 0 && !isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-[#0D0D0D]">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">
            Your Quote Cart is Empty
          </h2>
          <p className="text-gray-400 mb-6">
            Browse our products and add items to request a quote.
          </p>
          <Link to="/products" className="btn-primary inline-flex">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#0D0D0D]">
      <div className="bg-[#1A1A1A] border-b border-[#333333] py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/products"
              className="text-gray-400 hover:text-[#FF6B00] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Request a Quote
              </h1>
              <p className="text-gray-400 text-sm">
                Fill in your details and we'll get back to you with a custom
                quote
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1A1A1A] rounded-2xl border border-[#333333] p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">
                  Selected Products ({cartItems.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-sm text-red-500 hover:text-red-400 transition-colors"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-3">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-[#0D0D0D] p-3 rounded-lg border border-[#333333]"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-[#FF6B00] font-mono">
                        {item.id}
                      </div>
                      <div className="font-medium text-white truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.category || "Industrial"}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:text-[#FF6B00] transition-colors text-gray-400"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-mono text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:text-[#FF6B00] transition-colors text-gray-400"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-[#333333] flex justify-between">
                <span className="text-gray-400">Total Items:</span>
                <span className="text-xl font-bold font-mono text-[#FF6B00]">
                  {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
            </div>

            {/* AI Recommendations */}
            <div className="bg-[#1A1A1A] rounded-2xl border border-[#333333] p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                🤖 AI Recommendations
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Industry:</span>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="px-3 py-1 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm"
                  >
                    <option value="">Select Industry</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Construction">Construction</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="Pharmaceuticals">Pharmaceuticals</option>
                    <option value="Renewable Energy">Renewable Energy</option>
                    <option value="Water Treatment">Water Treatment</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={getAIRecommendation}
                  disabled={isAiLoading}
                  className="w-full py-2 bg-[#FF6B00]/10 text-[#FF6B00] rounded-lg hover:bg-[#FF6B00] hover:text-white transition-colors disabled:opacity-50"
                >
                  {isAiLoading
                    ? "Getting Recommendations..."
                    : "Get AI Recommendations"}
                </button>
                {aiSuggestion && (
                  <div className="mt-3 p-3 bg-[#0D0D0D] rounded-lg border border-[#333333]">
                    <p className="text-sm text-gray-300 whitespace-pre-wrap">
                      {aiSuggestion}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-1">
            <div className="bg-[#1A1A1A] rounded-2xl border border-[#333333] p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-white mb-4">
                Your Details
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Delivery Address
                  </label>
                  <textarea
                    name="deliveryAddress"
                    value={formData.deliveryAddress}
                    onChange={handleChange}
                    rows="2"
                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm resize-none"
                    placeholder="Delivery address for quotation"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Required Delivery Date
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Additional Requirements
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-3 py-2 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white text-sm resize-none"
                    placeholder="Any specific requirements or notes..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || cartItems.length === 0}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Quote Request Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Quote Request
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center mt-2">
                  <CheckCircle className="w-3 h-3 inline mr-1" />
                  We'll respond within 24 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteRequest;
