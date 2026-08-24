// src/pages/ProductDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingCart,
  Share2,
  Download,
  Truck,
  Shield,
  Clock,
  Star,
  ChevronRight,
} from "lucide-react";
import axios from "axios";
import { useQuoteCart } from "../hooks/useQuoteCart";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useQuoteCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specs");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}/products/${id}`);
        if (response.data.success) {
          const productData = response.data.product;
          setProduct({
            id: productData._id,
            name: productData.name,
            category: productData.category,
            subcategory: productData.subcategory,
            brand: productData.brand,
            description: productData.description,
            specifications: productData.specifications || "",
            applications: productData.applications || "",
            image: productData.image,
            stockStatus: productData.stockStatus,
            model: productData.model,
            warranty: productData.warranty,
            featured: productData.featured,
            specs: {
              Brand: productData.brand,
              Model: productData.model || "N/A",
              Category: productData.category,
              Subcategory: productData.subcategory || "N/A",
              "Stock Status": productData.stockStatus || "In Stock",
              Warranty: productData.warranty || "1 Year",
            },
          });

          // Fetch related products (same category)
          if (productData.category) {
            const relatedRes = await axios.get(
              `${API_URL}/products?category=${productData.category}`,
            );
            if (relatedRes.data.success) {
              const related = relatedRes.data.products
                .filter((p) => p._id !== productData._id)
                .slice(0, 4)
                .map((p) => ({
                  id: p._id,
                  name: p.name,
                  category: p.category,
                  image: p.image,
                }));
              setRelatedProducts(related);
            }
          }
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FF6B00]/20 border-t-[#FF6B00] rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading product...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-red-400">{error || "Product not found"}</p>
          <Link
            to="/products"
            className="mt-4 text-[#FF6B00] hover:text-[#FF8C33] transition-colors inline-block"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity, price: 0 });
  };

  const features = [
    { icon: Shield, text: "ISO 9001:2015 Certified" },
    { icon: Clock, text: product.warranty || "1 Year Warranty" },
    { icon: Truck, text: "Pan-India Delivery" },
    { icon: Star, text: "98% Customer Satisfaction" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-[#FF6B00] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to="/products"
            className="hover:text-[#FF6B00] transition-colors"
          >
            Products
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-[#1A1A1A] rounded-2xl border border-[#333333] p-8 flex items-center justify-center min-h-[400px]">
            <img
              src={
                product.image ||
                "https://via.placeholder.com/400x300/333333/FFFFFF?text=No+Image"
              }
              alt={product.name}
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300/333333/FFFFFF?text=No+Image";
              }}
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="text-[#FF6B00] text-sm font-mono">
                {product.id?.slice(-6) || "N/A"}
              </span>
              {product.category && (
                <span className="ml-2 px-2 py-1 text-xs bg-[#FF6B00]/20 text-[#FF6B00] rounded">
                  {product.category}
                </span>
              )}
              <h1 className="text-3xl md:text-4xl font-bold mt-2 text-white">
                {product.name}
              </h1>
            </div>

            {product.subcategory && (
              <p className="text-gray-400 text-sm mb-4">
                Category: {product.subcategory}
              </p>
            )}

            <p className="text-gray-400 mb-6 leading-relaxed">
              {product.description ||
                "High-quality product designed for industrial applications."}
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-2 text-sm text-gray-300"
                  >
                    <Icon className="w-4 h-4 text-[#FF6B00]" />
                    <span>{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span
                className={`px-3 py-1 text-sm rounded-full ${
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

            {/* Quantity */}
            <div className="flex items-center space-x-4 mb-6">
              <label className="text-sm text-gray-400">Quantity:</label>
              <div className="flex items-center bg-[#1A1A1A] rounded-lg border border-[#333333]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:text-[#FF6B00] transition-colors text-white"
                >
                  -
                </button>
                <span className="w-12 text-center font-mono text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:text-[#FF6B00] transition-colors text-white"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="btn-primary flex-1 justify-center"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Quote
              </button>
              <button className="p-3 bg-[#1A1A1A] border border-[#333333] rounded-lg hover:border-[#FF6B00] transition-colors">
                <Share2 className="w-5 h-5 text-gray-400" />
              </button>
              <button className="p-3 bg-[#1A1A1A] border border-[#333333] rounded-lg hover:border-[#FF6B00] transition-colors">
                <Download className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex border-b border-[#333333]">
            <button
              onClick={() => setActiveTab("specs")}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === "specs"
                  ? "text-[#FF6B00] border-b-2 border-[#FF6B00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab("details")}
              className={`px-4 py-3 font-medium transition-colors ${
                activeTab === "details"
                  ? "text-[#FF6B00] border-b-2 border-[#FF6B00]"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Details
            </button>
          </div>

          <div className="py-6">
            {activeTab === "specs" && (
              <div className="bg-[#1A1A1A] rounded-lg border border-[#333333] overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs || {}).map(([key, value]) => (
                      <tr
                        key={key}
                        className="border-b border-[#333333] last:border-0"
                      >
                        <td className="px-4 py-3 text-sm text-gray-400 font-medium">
                          {key}
                        </td>
                        <td className="px-4 py-3 text-sm text-white font-mono">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === "details" && (
              <div className="bg-[#1A1A1A] rounded-lg border border-[#333333] p-6">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Product Overview
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {product.description || "No detailed description available."}
                </p>
                {product.applications && (
                  <>
                    <h4 className="font-semibold text-white mt-6 mb-3">
                      Applications
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {product.applications}
                    </p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="bg-[#1A1A1A] rounded-lg border border-[#333333] p-4 hover:border-[#FF6B00] transition-all card-hover"
                >
                  <div className="text-2xl text-center mb-2">⚙️</div>
                  <h3 className="text-sm font-medium text-white text-center line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    {product.category}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
