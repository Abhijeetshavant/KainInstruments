import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!orderId.trim()) {
      setError("Please enter an order ID");
      return;
    }

    setLoading(true);
    setError("");

    // Mock order data - will be replaced with API call
    setTimeout(() => {
      const mockOrder = {
        id: orderId,
        status: "Shipped",
        date: "2024-01-15",
        items: [
          { name: "Digital Oscilloscope", quantity: 1, price: 24999 },
          { name: "Digital Multimeter", quantity: 2, price: 5999 },
        ],
        total: 36997,
        shippingAddress: {
          name: "John Doe",
          address: "123 Main Street, Meerut, UP 250001",
          phone: "+91 9876543210",
          email: "john@example.com",
        },
        tracking: [
          {
            status: "Order Placed",
            date: "2024-01-15 10:30 AM",
            completed: true,
          },
          { status: "Processing", date: "2024-01-15 2:30 PM", completed: true },
          { status: "Shipped", date: "2024-01-16 9:00 AM", completed: true },
          {
            status: "Out for Delivery",
            date: "2024-01-17 8:00 AM",
            completed: false,
          },
          { status: "Delivered", date: "Pending", completed: false },
        ],
        estimatedDelivery: "2024-01-18",
      };
      setOrder(mockOrder);
      setLoading(false);
    }, 1000);
  };

  const getStatusIcon = (status, completed) => {
    if (completed) {
      return <CheckCircle className="text-green-500" size={24} />;
    }
    switch (status) {
      case "Order Placed":
        return <Package className="text-blue-500" size={24} />;
      case "Processing":
        return <Clock className="text-yellow-500" size={24} />;
      case "Shipped":
      case "Out for Delivery":
        return <Truck className="text-purple-500" size={24} />;
      default:
        return <Clock className="text-gray-400" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Track Your Order
          </h1>
          <p className="text-gray-500 mt-2">
            Enter your order ID to track your delivery
          </p>
        </motion.div>

        {/* Search Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          onSubmit={handleSearch}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g., ORD-2024-001)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
            >
              {loading ? "Searching..." : "Track Order"}
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </motion.form>

        {/* Order Details */}
        {order && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Order Summary */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  Order #{order.id}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "Delivered"
                      ? "bg-green-100 text-green-600"
                      : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {order.status}
                </span>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Order Date: {order.date}</p>
                <p>Estimated Delivery: {order.estimatedDelivery}</p>
                <p>Total: ₹{order.total.toLocaleString()}</p>
              </div>
            </div>

            {/* Tracking Timeline */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tracking Timeline
              </h3>
              <div className="relative">
                {order.tracking.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 mb-6 last:mb-0"
                  >
                    <div className="relative">
                      {getStatusIcon(step.status, step.completed)}
                      {index < order.tracking.length - 1 && (
                        <div
                          className={`absolute left-1/2 top-8 w-0.5 h-12 -translate-x-1/2 ${
                            step.completed ? "bg-green-500" : "bg-gray-300"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium ${step.completed ? "text-gray-800" : "text-gray-400"}`}
                      >
                        {step.status}
                      </p>
                      <p className="text-sm text-gray-500">{step.date}</p>
                    </div>
                    {step.completed && (
                      <CheckCircle
                        size={16}
                        className="text-green-500 flex-shrink-0"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Details */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Shipping Address
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-medium">{order.shippingAddress.name}</p>
                <p>{order.shippingAddress.address}</p>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>{order.shippingAddress.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{order.shippingAddress.email}</span>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Order Items
              </h3>
              <div className="space-y-3">
                {order.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-semibold text-gray-800">
                      ₹{item.price.toLocaleString()}
                    </p>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                  <p className="font-semibold text-gray-800">Total</p>
                  <p className="font-bold text-xl text-blue-600">
                    ₹{order.total.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;
