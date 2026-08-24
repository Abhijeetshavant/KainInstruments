// src/pages/Products.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  Grid,
  List,
  Zap,
  Wrench,
  Settings,
  Shield,
  Cable,
  Wind,
  Lightbulb,
  ToggleLeft,
  Droplets,
  Flame,
} from "lucide-react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

// Map icon names to components
const iconMap = {
  Zap: Zap,
  Wrench: Wrench,
  Settings: Settings,
  Shield: Shield,
  Cable: Cable,
  Wind: Wind,
  Lightbulb: Lightbulb,
  ToggleLeft: ToggleLeft,
  Droplets: Droplets,
  Flame: Flame,
};

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  // Fetch categories from API
  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/products/categories`);
      if (response.data.success) {
        const categoryList = response.data.categories.map((cat, index) => ({
          id: cat || `category-${index}`,
          name: cat.charAt(0).toUpperCase() + cat.slice(1),
          slug: cat,
          icon: "Settings",
          subcategoryCount: 0,
        }));
        setCategories(categoryList);
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Fetch all products from API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/products`);
      if (response.data.success) {
        const productList = response.data.products.map((product) => ({
          id: product._id,
          name: product.name,
          category: product.category,
          subcategory: product.subcategory,
          brand: product.brand,
          description: product.description,
          specifications: product.specifications,
          applications: product.applications,
          image: product.image,
          stockStatus: product.stockStatus,
          model: product.model,
          warranty: product.warranty,
          featured: product.featured,
          createdAt: product.createdAt,
        }));
        setProducts(productList);
        setFilteredProducts(productList);
      } else {
        setError("Failed to fetch products");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = products;

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name?.toLowerCase().includes(term) ||
          p.category?.toLowerCase().includes(term) ||
          p.brand?.toLowerCase().includes(term) ||
          p.description?.toLowerCase().includes(term),
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, products]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsCategoryOpen(false);
  };

  const getCategoryIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent className="w-5 h-5" />
    ) : (
      <Settings className="w-5 h-5" />
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
  };

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FF6B00]/20 border-t-[#FF6B00] rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-[#0D0D0D]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D] border-b border-[#333333] py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Our Products
          </h1>
          <p className="text-gray-400 mt-2">
            Browse our extensive range of industrial instruments and equipment
          </p>
          {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search products by name, category, brand..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg focus:outline-none focus:border-[#FF6B00] text-white placeholder-gray-500 transition-colors"
            />
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="flex items-center justify-between w-64 px-4 py-3 bg-[#1A1A1A] border border-[#333333] rounded-lg hover:border-[#FF6B00] transition-colors"
            >
              <span className="text-white">
                {selectedCategory
                  ? categories.find((c) => c.id === selectedCategory)?.name
                  : "All Categories"}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-gray-400 transition-transform ${isCategoryOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-[#1A1A1A] border border-[#333333] rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setIsCategoryOpen(false);
                  }}
                  className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-[#333333] transition-colors text-left text-white border-b border-[#333333]"
                >
                  <span className="font-medium">All Categories</span>
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategorySelect(category.id)}
                    className="flex items-center space-x-3 w-full px-4 py-3 hover:bg-[#333333] transition-colors text-left text-white border-b border-[#333333] last:border-0"
                  >
                    {getCategoryIcon(category.icon)}
                    <span className="font-medium">{category.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear filters button */}
          {(searchTerm || selectedCategory) && (
            <button
              onClick={clearFilters}
              className="px-4 py-3 text-sm text-[#FF6B00] hover:text-[#CC5500] transition-colors"
            >
              Clear Filters ✕
            </button>
          )}
        </div>

        {/* View Controls */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-gray-400">
            {filteredProducts.length}{" "}
            {filteredProducts.length === 1 ? "product" : "products"} found
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-[#FF6B00] text-white"
                  : "bg-[#1A1A1A] text-gray-400 hover:text-white"
              }`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-[#FF6B00] text-white"
                  : "bg-[#1A1A1A] text-gray-400 hover:text-white"
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            className={`grid ${
              viewMode === "grid"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                : "grid-cols-1 gap-4"
            }`}
          >
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <ProductCard product={product} viewMode={viewMode} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 bg-[#1A1A1A] rounded-xl border border-[#333333]">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-400 text-lg">
              {searchTerm || selectedCategory
                ? "No products found matching your criteria."
                : "No products available yet. Check back soon!"}
            </p>
            {(searchTerm || selectedCategory) && (
              <button
                onClick={clearFilters}
                className="mt-4 text-[#FF6B00] hover:text-[#CC5500] transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product, viewMode }) => {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const imageUrl =
    product.image ||
    "https://via.placeholder.com/400x300/333333/666666?text=No+Image";

  if (viewMode === "list") {
    return (
      <Link to={`/products/${product.id}`} className="block">
        <div className="bg-[#1A1A1A] rounded-xl border border-[#333333] overflow-hidden hover:border-[#FF6B00] transition-all duration-300 flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-[#0D0D0D]">
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={() => setImageError(true)}
            />
            {imageError && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A]">
                <span className="text-4xl">⚙️</span>
              </div>
            )}
            {product.featured && (
              <span className="absolute top-2 left-2 px-2 py-1 text-xs bg-[#FF6B00] text-white rounded">
                Featured
              </span>
            )}
          </div>
          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-[#FF6B00] font-mono">
                  {product.id?.slice(-6) || "N/A"}
                </span>
                {product.category && (
                  <span className="px-2 py-0.5 text-xs bg-[#FF6B00]/20 text-[#FF6B00] rounded">
                    {product.category}
                  </span>
                )}
                {product.stockStatus && (
                  <span
                    className={`px-2 py-0.5 text-xs rounded ${
                      product.stockStatus === "In Stock"
                        ? "bg-green-500/20 text-green-400"
                        : product.stockStatus === "On Order"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {product.stockStatus}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mt-1 group-hover:text-[#FF6B00] transition-colors">
                {product.name}
              </h3>
              {product.brand && (
                <p className="text-sm text-gray-400">{product.brand}</p>
              )}
              {product.description && (
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {product.description}
                </p>
              )}
            </div>
            <div className="mt-4 flex items-center gap-4">
              <span className="text-sm text-[#FF6B00]">View Details →</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Grid View
  return (
    <Link to={`/products/${product.id}`} className="block h-full">
      <div
        className="bg-[#1A1A1A] rounded-xl border border-[#333333] overflow-hidden hover:border-[#FF6B00] transition-all duration-300 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Container with Zoom Effect */}
        <div className="relative h-56 overflow-hidden bg-[#0D0D0D]">
          <motion.img
            src={imageUrl}
            alt={product.name}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
            onError={() => setImageError(true)}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#1A1A1A]">
              <span className="text-6xl">⚙️</span>
            </div>
          )}

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Quick View Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <span className="px-4 py-2 bg-[#FF6B00] text-white rounded-lg text-sm font-medium hover:bg-[#CC5500] transition-colors">
              View Details
            </span>
          </motion.div>

          {/* Tags */}
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.featured && (
              <span className="px-2 py-1 text-xs bg-[#FF6B00] text-white rounded">
                Featured
              </span>
            )}
            {product.category && (
              <span className="px-2 py-1 text-xs bg-[#FF6B00]/80 text-white rounded">
                {product.category}
              </span>
            )}
          </div>

          {/* Stock Status Badge */}
          {product.stockStatus && (
            <div className="absolute top-2 right-2">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  product.stockStatus === "In Stock"
                    ? "bg-green-500 text-white"
                    : product.stockStatus === "On Order"
                      ? "bg-yellow-500 text-white"
                      : "bg-red-500 text-white"
                }`}
              >
                {product.stockStatus}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-[#FF6B00] font-mono">
                {product.id?.slice(-6) || "N/A"}
              </span>
              {product.subcategory && (
                <span className="px-2 py-0.5 text-[10px] bg-[#333333] text-gray-400 rounded">
                  {product.subcategory}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-sm mt-1 text-white group-hover:text-[#FF6B00] transition-colors line-clamp-2">
              {product.name}
            </h3>
            {product.brand && (
              <p className="text-xs text-gray-500 mt-0.5">by {product.brand}</p>
            )}
            {product.model && (
              <p className="text-xs text-gray-600">Model: {product.model}</p>
            )}
          </div>

          {/* Specs Preview */}
          {product.specifications && (
            <div className="mt-3 pt-3 border-t border-[#333333]">
              <p className="text-xs text-gray-400 line-clamp-2">
                {product.specifications}
              </p>
            </div>
          )}

          <div className="mt-3 pt-3 border-t border-[#333333] flex items-center justify-between">
            <span className="text-xs text-[#FF6B00]">View Details →</span>
            {product.warranty && (
              <span className="text-xs text-gray-500">
                🛡️ {product.warranty}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Products;
