// src/pages/Admin/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Plus,
  Edit,
  Trash2,
  Search,
  Grid,
  List,
  Package,
  X,
  Eye,
  Home,
  LogOut,
} from "lucide-react";
import axios from "axios";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  // Fetch products from API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get(`${API_URL}/products`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        setProducts(response.data.products || []);
      } else {
        console.error("Failed to fetch products:", response.data.message);
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Stats
  const stats = [
    {
      label: "Total Products",
      value: products.length.toString(),
      icon: Package,
      color: "orange",
      change: `${products.length} total`,
    },
  ];

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      await axios.delete(`${API_URL}/products/${selectedProduct._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setProducts(products.filter((p) => p._id !== selectedProduct._id));
      setShowDeleteModal(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleEdit = (product) => {
    navigate(`/admin/products/edit/${product._id}`);
  };

  const handleAddProduct = () => {
    navigate("/admin/products/add");
  };

  const handleViewProduct = (product) => {
    navigate(`/products/${product._id}`);
  };

  const handleGoHome = () => {
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    localStorage.removeItem("adminEmail");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userCompany");
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name?.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "all" || product.category === selectedCategory),
  );

  // Get unique categories for filter
  const categories = [
    "all",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] p-6">
      {/* Header with Home Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Manage your products</p>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          {/* Go to Home Button */}
          <button
            onClick={handleGoHome}
            className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl transition-all hover:scale-105 border border-gray-700"
          >
            <Home size={20} />
            <span className="hidden sm:inline">Home</span>
          </button>

          {/* Add Product Button */}
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 px-6 py-3 bg-[#FF6B00] text-white rounded-xl hover:bg-[#CC5500] transition-all hover:scale-105"
          >
            <Plus size={20} />
            Add New Product
          </button>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-xl transition-all hover:scale-105 border border-red-500/20"
            title="Logout"
          >
            <LogOut size={20} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="bg-[#1A1A1A] rounded-xl shadow-sm p-5 border border-[#333333] hover:border-[#FF6B00] transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <span className="text-xs text-[#FF6B00]">{stat.change}</span>
              </div>
              <div className="p-3 bg-[#FF6B00]/10 rounded-xl">
                <stat.icon className="text-[#FF6B00]" size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-[#1A1A1A] rounded-xl shadow-sm p-4 mb-6 border border-[#333333]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={20}
            />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent transition text-white"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 bg-[#0D0D0D] border border-[#333333] rounded-lg focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent text-white"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "All Categories" : cat}
                </option>
              ))}
            </select>
            <div className="flex bg-[#0D0D0D] rounded-lg p-1 border border-[#333333]">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition ${
                  viewMode === "grid"
                    ? "bg-[#FF6B00] text-white"
                    : "hover:bg-[#333333] text-gray-400"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition ${
                  viewMode === "list"
                    ? "bg-[#FF6B00] text-white"
                    : "hover:bg-[#333333] text-gray-400"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Display */}
      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FF6B00]"></div>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-12 bg-[#1A1A1A] rounded-xl border border-[#333333]">
          <Package size={48} className="text-gray-500 mx-auto mb-4" />
          <p className="text-gray-400">No products found</p>
          <button
            onClick={handleAddProduct}
            className="mt-4 text-[#FF6B00] hover:text-[#CC5500] transition-colors"
          >
            Add your first product
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }
        >
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                key={product._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`bg-[#1A1A1A] rounded-xl shadow-sm overflow-hidden group border border-[#333333] hover:border-[#FF6B00] transition-all ${
                  viewMode === "list" ? "flex items-center" : ""
                }`}
              >
                <div
                  className={`relative ${
                    viewMode === "list"
                      ? "w-32 h-32 flex-shrink-0"
                      : "w-full h-48"
                  }`}
                >
                  <img
                    src={
                      product.image ||
                      "https://via.placeholder.com/400x300/333333/FFFFFF?text=No+Image"
                    }
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300/333333/FFFFFF?text=No+Image";
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="p-2 bg-white rounded-lg hover:scale-110 transition"
                    >
                      <Eye size={20} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleEdit(product)}
                      className="p-2 bg-white rounded-lg hover:scale-110 transition"
                    >
                      <Edit size={20} className="text-green-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(product)}
                      className="p-2 bg-white rounded-lg hover:scale-110 transition"
                    >
                      <Trash2 size={20} className="text-red-600" />
                    </button>
                  </div>
                </div>

                <div
                  className={`p-4 flex-1 ${
                    viewMode === "list"
                      ? "flex items-center justify-between"
                      : ""
                  }`}
                >
                  <div>
                    <h3 className="font-semibold text-white line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-400">{product.brand}</p>
                    {product.category && (
                      <span className="inline-block mt-1 px-2 py-0.5 text-xs bg-[#FF6B00]/20 text-[#FF6B00] rounded">
                        {product.category}
                      </span>
                    )}
                  </div>

                  {viewMode === "list" && (
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${
                          product.stockStatus === "In Stock"
                            ? "bg-green-500/20 text-green-400"
                            : product.stockStatus === "On Order"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {product.stockStatus || "In Stock"}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Delete Modal */}
      <AnimatePresence>
        {showDeleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setShowDeleteModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1A1A1A] rounded-2xl max-w-md w-full p-6 shadow-2xl border border-[#333333]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trash2 size={32} className="text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Delete Product
                </h3>
                <p className="text-gray-400 mb-6">
                  Are you sure you want to delete "
                  <span className="font-semibold text-white">
                    {selectedProduct?.name}
                  </span>
                  "? This action cannot be undone.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteModal(false)}
                    className="flex-1 px-4 py-2.5 border border-[#333333] rounded-lg hover:bg-[#333333] transition font-medium text-gray-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDelete}
                    className="flex-1 px-4 py-2.5 bg-red-500 text-white rounded-lg hover:bg-red-600 transition font-medium"
                  >
                    Delete Product
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
