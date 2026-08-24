import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Star, Shield, Truck, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  const {
    id,
    name,
    price,
    images,
    details,
    warranty,
    rating,
    reviews,
    inStock,
    category,
    subCategory,
    brand,
    model,
    specifications,
  } = product;

  const handleInquire = () => {
    navigate(`/product/${id}/inquire`);
  };

  const handleBuyNow = () => {
    navigate(`/product/${id}/buy`);
  };

  return (
    <motion.div
      className="relative w-full max-w-sm bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Image Container with Zoom Effect */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <motion.img
          src={images[currentImage]}
          alt={name}
          className="w-full h-full object-cover"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Image Navigation Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImage ? "bg-blue-600 w-4" : "bg-white/60"
                }`}
              />
            ))}
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {inStock ? (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
              In Stock
            </span>
          ) : (
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Out of Stock
            </span>
          )}
          {rating >= 4.5 && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
              <Star size={12} fill="white" />
              Best Seller
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-transform">
          <Heart size={18} className="text-gray-600 hover:text-red-500" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-gray-500">{brand}</p>
          </div>
          <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded">
            <Star size={14} className="text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-2 flex flex-wrap gap-1">
          {specifications?.slice(0, 2).map((spec, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Price and Warranty */}
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-blue-600">
              ₹{price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through ml-2">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <Shield size={14} />
            <span>{warranty}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <motion.button
            onClick={handleInquire}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Eye size={18} />
            Get Inquire
          </motion.button>

          <motion.button
            onClick={handleBuyNow}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ShoppingCart size={18} />
            Buy Now
          </motion.button>
        </div>

        {/* Additional Info */}
        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <Truck size={14} />
            <span>Free Delivery</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>2-3 Days</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
