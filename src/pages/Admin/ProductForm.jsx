// src/pages/Admin/ProductForm.jsx (Updated Image Handling)
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  X,
  Loader2,
  Upload,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

// Category data
const categories = [
  { value: "electrical", label: "Electrical" },
  { value: "automation", label: "Automation" },
  { value: "sensors", label: "Sensors" },
  { value: "bearings", label: "Bearings" },
  { value: "fasteners", label: "Fasteners" },
  { value: "spares", label: "Spare Parts" },
  { value: "engineering-spares", label: "Engineering Spares" },
  { value: "mro", label: "MRO Items" },
  { value: "safety", label: "Safety Equipment" },
  { value: "power-tools", label: "Power Tools" },
  { value: "pneumatic", label: "Pneumatic Tools" },
  { value: "welding", label: "Welding" },
  { value: "consumables", label: "Consumables" },
  { value: "hydraulics", label: "Hydraulics" },
  { value: "valves", label: "Valves" },
  { value: "pumps", label: "Pumps" },
  { value: "motors", label: "Motors" },
  { value: "control-panels", label: "Control Panels" },
  { value: "cables", label: "Cables" },
  { value: "testing", label: "Testing Equipment" },
  { value: "cctv", label: "CCTV" },
  { value: "hardware", label: "Hardware" },
];

const stockStatusOptions = [
  { value: "In Stock", label: "In Stock" },
  { value: "On Order", label: "On Order" },
  { value: "Out of Stock", label: "Out of Stock" },
];

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    subcategory: "",
    brand: "",
    description: "",
    specifications: "",
    applications: "",
    featured: false,
    stockStatus: "In Stock",
    whatsappNumber: "+919911109709",
    model: "",
    warranty: "1 Year",
  });

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size must be less than 5MB");
      return;
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a JPEG, PNG, GIF, or WebP image");
      return;
    }

    setError("");
    setImageFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Product name is required");
      return false;
    }
    if (!formData.category) {
      setError("Please select a category");
      return false;
    }
    if (!formData.brand.trim()) {
      setError("Brand is required");
      return false;
    }
    if (!formData.description.trim()) {
      setError("Description is required");
      return false;
    }
    if (!imageFile && !isEditing) {
      setError("Product image is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api";
      const token = localStorage.getItem("adminToken");

      // Create FormData for multipart/form-data
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("category", formData.category);
      formDataToSend.append("subcategory", formData.subcategory || "");
      formDataToSend.append("brand", formData.brand.trim());
      formDataToSend.append("description", formData.description.trim());
      formDataToSend.append("specifications", formData.specifications || "");
      formDataToSend.append("applications", formData.applications || "");
      formDataToSend.append("featured", formData.featured);
      formDataToSend.append("stockStatus", formData.stockStatus);
      formDataToSend.append(
        "whatsappNumber",
        formData.whatsappNumber || "+919911109709",
      );
      formDataToSend.append("model", formData.model || "");
      formDataToSend.append("warranty", formData.warranty || "1 Year");

      // Append image file if exists
      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      console.log(
        "Submitting product with image:",
        imageFile ? imageFile.name : "No image",
      );

      const response = await axios.post(`${API_URL}/products`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        setSuccess("Product saved successfully!");

        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1500);
      } else {
        setError(response.data.message || "Failed to save product");
      }
    } catch (err) {
      console.error("Error submitting product:", err);
      setError(err.response?.data?.message || "Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1A1A1A] p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("/admin/dashboard")}
            className="p-2 hover:bg-[#333333] rounded-lg transition text-gray-400 hover:text-white"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {isEditing ? "Edit Product" : "Add New Product"}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {isEditing
                ? "Update product details"
                : "Create a new product listing"}
            </p>
          </div>
        </div>

        {/* Error/Success Messages */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm flex items-center gap-2"
          >
            <AlertCircle size={18} />
            {error}
          </motion.div>
        )}

        {success && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm flex items-center gap-2"
          >
            <CheckCircle size={18} />
            {success}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Product Image Upload */}
          <motion.div
            className="bg-[#1A1A1A] rounded-xl p-6 border border-[#333333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg font-semibold text-white mb-4">
              Product Image
            </h2>

            {imagePreview ? (
              <div className="relative w-full max-w-sm">
                <img
                  src={imagePreview}
                  alt="Product preview"
                  className="w-full h-48 object-cover rounded-lg border border-[#333333]"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-1.5 bg-red-500 hover:bg-red-600 rounded-full text-white transition-colors"
                >
                  <X size={16} />
                </button>
                <p className="text-xs text-green-400 mt-2">✓ Image selected</p>
              </div>
            ) : (
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  disabled={uploadingImage}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="border-2 border-dashed border-[#333333] rounded-lg p-8 text-center hover:border-[#FF6B00] transition-colors">
                  <Upload className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                  <p className="text-gray-300 font-medium">
                    Click to upload image
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    PNG, JPG, JPEG, WebP • Max 5MB
                  </p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Basic Information */}
          <motion.div
            className="bg-[#1A1A1A] rounded-xl p-6 border border-[#333333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-lg font-semibold text-white mb-4">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter product name"
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Brand *
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                  placeholder="Enter brand name"
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-[#FF6B00] transition appearance-none"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Subcategory
                </label>
                <input
                  type="text"
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleChange}
                  placeholder="Enter subcategory"
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition"
                />
              </div>
            </div>
          </motion.div>

          {/* Stock & Warranty */}
          <motion.div
            className="bg-[#1A1A1A] rounded-xl p-6 border border-[#333333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-white mb-4">
              Stock & Warranty
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Stock Status
                </label>
                <select
                  name="stockStatus"
                  value={formData.stockStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white focus:outline-none focus:border-[#FF6B00] transition appearance-none"
                >
                  {stockStatusOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Warranty
                </label>
                <input
                  type="text"
                  name="warranty"
                  value={formData.warranty}
                  onChange={handleChange}
                  placeholder="e.g., 2 Years"
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition"
                />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            className="bg-[#1A1A1A] rounded-xl p-6 border border-[#333333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-lg font-semibold text-white mb-4">
              Description & Details
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Enter detailed product description"
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Specifications
                </label>
                <textarea
                  name="specifications"
                  value={formData.specifications}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter product specifications"
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Applications
                </label>
                <textarea
                  name="applications"
                  value={formData.applications}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Enter product applications"
                  className="w-full px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B00] transition resize-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Featured & Submit */}
          <motion.div
            className="bg-[#1A1A1A] rounded-xl p-6 border border-[#333333]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
                className="w-5 h-5 accent-[#FF6B00] rounded"
              />
              <label className="text-sm font-medium text-gray-300">
                Feature this product (show on homepage)
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => navigate("/admin/dashboard")}
                className="px-6 py-3 border border-[#333333] rounded-lg hover:bg-[#333333] transition font-medium text-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading || uploadingImage}
                className="flex-1 px-6 py-3 bg-[#FF6B00] hover:bg-[#CC5500] text-white rounded-lg transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    {isEditing ? "Updating..." : "Adding..."}
                  </>
                ) : (
                  <>{isEditing ? "Update Product" : "Add Product"}</>
                )}
              </button>
            </div>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
