import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProductCard from "../products/ProductCard";
import { productsData } from "../../data/productsData";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // In production, fetch from API
    setProducts(productsData.slice(0, 6));
  }, []);

  return (
    <section className="section-padding bg-dark-100">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="reveal">
            <span className="text-primary font-mono text-sm">OUR PRODUCTS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Premium Industrial
              <span className="gradient-text block">Instruments</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-lg">
              From precision gauges to advanced electrical systems — all tested
              to international standards.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center text-primary hover:text-primary-light transition-colors mt-4 md:mt-0"
          >
            View All Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
