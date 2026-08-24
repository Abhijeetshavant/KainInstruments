import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Loader from "./components/ui/Loader";
import { CartProvider } from "./context/CartContext";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const AdminLogin = lazy(() => import("./Authentaction/AdminLogin"));
const Contact = lazy(() => import("./pages/Contact"));

// Admin pages
import AdminDashboard from "./pages/Admin/Dashboard";
import ProductForm from "./pages/Admin/ProductForm";

function App() {
  return (
    <CartProvider>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public routes with Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin routes - WITHOUT Layout */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/products/add" element={<ProductForm />} />
          <Route path="/admin/products/edit/:id" element={<ProductForm />} />
        </Routes>
      </Suspense>
    </CartProvider>
  );
}

export default App;
