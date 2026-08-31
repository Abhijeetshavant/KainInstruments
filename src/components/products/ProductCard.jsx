// src/components/products/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Plus, Eye, Whatsapp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useQuoteCart } from "../../hooks/useQuoteCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useQuoteCart();
  const [imageError, setImageError] = React.useState(false);

  const imageUrl =
    product.image ||
    "https://via.placeholder.com/400x300/333333/666666?text=No+Image";

  // Generate WhatsApp message with product details
  const generateWhatsAppMessage = () => {
    const message = `*🔧 KAIN Instruments - Product Inquiry*

*📋 Product Details:*
━━━━━━━━━━━━━━━━━━━━
🆔 Product ID: ${product.id || "N/A"}
📛 Name: ${product.name || "N/A"}
🏷️ Brand: ${product.brand || "N/A"}
📂 Category: ${product.category || "N/A"}
📦 Model: ${product.model || "N/A"}
📊 Stock Status: ${product.stockStatus || "Available"}

*📝 Specifications:*
${
  product.specs && Object.keys(product.specs).length > 0
    ? Object.entries(product.specs)
        .map(([key, value]) => `  • ${key}: ${value}`)
        .join("\n")
    : "  • No specifications available"
}

*🔗 Product Link:*
${window.location.origin}/products/${product.id}

━━━━━━━━━━━━━━━━━━━━
*👤 Customer Details:*
Name: [Your Name]
Phone: [Your Number]
Company: [Your Company]

*💬 Message:*
I am interested in this product. Please provide more information and pricing.

---
*Sent from KAIN Instruments Website*`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "919911109709";
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="group bg-[#1A1A1A] rounded-lg border border-[#333333] overflow-hidden hover:border-[#FF6B00] transition-all duration-300 card-hover">
      <div className="relative h-48 bg-[#0D0D0D] flex items-center justify-center border-b border-[#333333] overflow-hidden">
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

        {/* Quick action buttons */}
        <div className="absolute inset-0 bg-[#0D0D0D]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={handleWhatsAppClick}
            className="p-2 bg-green-500 rounded-lg hover:bg-green-600 transition-colors transform hover:scale-110"
            title="Inquire on WhatsApp"
          >
            <FaWhatsapp className="w-4 h-4 text-white" />
          </button>
          <button
            onClick={() => addToCart({ ...product, price: 0 })}
            className="p-2 bg-[#FF6B00] rounded-lg hover:bg-[#CC5500] transition-colors transform hover:scale-110"
            title="Add to Quote"
          >
            <Plus className="w-4 h-4 text-white" />
          </button>
          <Link
            to={`/products/${product.id}`}
            className="p-2 bg-[#333333] rounded-lg hover:bg-[#404040] transition-colors transform hover:scale-110"
            title="View Details"
          >
            <Eye className="w-4 h-4 text-white" />
          </Link>
        </div>

        {/* Category tags */}
        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {product.category && (
            <span className="px-2 py-0.5 text-[10px] bg-[#FF6B00]/20 text-[#FF6B00] rounded">
              {product.category}
            </span>
          )}
          {product.stockStatus && (
            <span
              className={`px-2 py-0.5 text-[10px] rounded ${
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
      </div>

      <div className="p-4 space-y-2">
        <div>
          <div className="text-xs text-[#FF6B00] font-mono">
            {product.id?.slice(-6) || "N/A"}
          </div>
          <h3 className="font-semibold text-sm mt-1 text-white group-hover:text-[#FF6B00] transition-colors line-clamp-2">
            {product.name}
          </h3>
          {product.brand && (
            <p className="text-xs text-gray-500">{product.brand}</p>
          )}
        </div>

        {/* Specs */}
        {product.specs && Object.keys(product.specs).length > 0 && (
          <div className="grid grid-cols-2 gap-1 text-xs">
            {Object.entries(product.specs)
              .slice(0, 3)
              .map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between border-b border-[#333333] py-1"
                >
                  <span className="text-gray-500">{key}:</span>
                  <span className="text-gray-300 font-mono truncate ml-1">
                    {value}
                  </span>
                </div>
              ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => addToCart({ ...product, price: 0 })}
            className="flex-1 py-2 text-sm bg-[#FF6B00]/10 text-[#FF6B00] rounded-lg hover:bg-[#FF6B00] hover:text-white transition-colors"
          >
            Request Quote
          </button>
          <button
            onClick={handleWhatsAppClick}
            className="px-4 py-2 text-sm bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-1"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span className="hidden sm:inline">Inquire</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
