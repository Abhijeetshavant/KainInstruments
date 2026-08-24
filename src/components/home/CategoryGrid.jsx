// src/components/home/CategoryGrid.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { getCategoryImage } from "../../data/categoryImages";

const categories = [
  {
    id: 1,
    name: "Electrical",
    slug: "electrical",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345273/electrical_i5zsz3.png",
    description: "Electrical components & equipment",
  },
  {
    id: 2,
    name: "Automation",
    slug: "automation",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345277/automation_rzj652.png",
    description: "Industrial automation solutions",
  },
  {
    id: 3,
    name: "Sensors",
    slug: "sensors",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345263/industrialSensors_jevmci.png",
    description: "Precision sensors & detectors",
  },
  {
    id: 4,
    name: "Bearings",
    slug: "bearings",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345263/bearings_cwcrwi.png",
    description: "High-quality bearings",
  },
  {
    id: 5,
    name: "Fasteners",
    slug: "fasteners",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345283/fastner_tuuow5.png",
    description: "Industrial fasteners",
  },
  {
    id: 6,
    name: "Spare Parts",
    slug: "spares",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345299/spareparts_j2tftw.png",
    description: "Machine spare parts",
  },
  {
    id: 7,
    name: "Engineering Spares",
    slug: "engineering-spares",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345308/engineeringspare_xv6lt8.png",
    description: "Engineering spare parts",
  },
  {
    id: 8,
    name: "MRO Items",
    slug: "mro",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345313/mroitems_prl23i.png",
    description: "Maintenance & repair items",
  },
  {
    id: 9,
    name: "Safety Equipment",
    slug: "safety",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345299/saftey_mrhlw8.png",
    description: "Safety equipment",
  },
  {
    id: 10,
    name: "Power Tools",
    slug: "power-tools",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345297/powertool_jldmfg.png",
    description: "Professional power tools",
  },
  {
    id: 11,
    name: "Pneumatic Tools",
    slug: "pneumatic",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345300/penumaticstool_ldw1gh.png",
    description: "Pneumatic systems",
  },
  {
    id: 12,
    name: "Welding",
    slug: "welding",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345296/welding_t8rerw.png",
    description: "Welding equipment",
  },
  {
    id: 13,
    name: "Consumables",
    slug: "consumables",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345280/consumables_jfmwcf.png",
    description: "Industrial consumables",
  },
  {
    id: 14,
    name: "Hydraulics",
    slug: "hydraulics",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345268/hydrolics_z70wk8.png",
    description: "Hydraulic systems",
  },
  {
    id: 15,
    name: "Valves",
    slug: "valves",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345264/valves_tqym3x.png",
    description: "Industrial valves",
  },
  {
    id: 16,
    name: "Pumps",
    slug: "pumps",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345303/pumps_iyupeh.png",
    description: "Industrial pumps",
  },
  {
    id: 17,
    name: "Motors",
    slug: "motors",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345288/moters_smovdx.png",
    description: "Electric motors",
  },
  {
    id: 18,
    name: "Control Panels",
    slug: "control-panels",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345288/controlpanel_dsweuf.png",
    description: "Control panels & systems",
  },
  {
    id: 19,
    name: "Cables",
    slug: "cables",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345278/cables_vkcxkf.png",
    description: "Industrial cables & wires",
  },
  {
    id: 20,
    name: "Testing Equipment",
    slug: "testing",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345288/testing_aujwuj.png",
    description: "Testing equipment",
  },
  {
    id: 21,
    name: "CCTV",
    slug: "cctv",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345268/cctv_baplm8.png",
    description: "CCTV & security systems",
  },
  {
    id: 22,
    name: "Hardware",
    slug: "hardware",
    image:
      "https://res.cloudinary.com/ssxygquk/image/upload/v1785345268/industriesHardware_rigbvr.png",
    description: "Industrial hardware",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-[#0D0D0D]">
      <div className="container-custom px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 bg-[#FF6B00]/10 text-[#FF6B00] text-xs font-mono font-semibold rounded-full mb-3"
          >
            PRODUCT CATEGORIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Explore Our <span className="text-[#FF6B00]">Categories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Discover our wide range of industrial products across various
            categories
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link
                to={`/products?category=${category.slug}`}
                className="block bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#333333] hover:border-[#FF6B00]/50 transition-all duration-300 group"
              >
                {/* Category Image */}
                <div className="relative w-full h-32 overflow-hidden bg-[#0D0D0D]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Crect width='100' height='100' fill='%231A1A1A'/%3E%3Ctext x='50' y='50' text-anchor='middle' dy='.3em' fill='%23666' font-size='14'%3E${category.name}%3C/text%3E%3C/svg%3E`;
                    }}
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category name overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xs font-medium text-white text-center">
                      {category.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-3 text-center">
                  <p className="text-xs text-gray-500 line-clamp-1">
                    {category.description}
                  </p>

                  {/* Hover Indicator */}
                  <div className="mt-1.5 h-0.5 w-8 mx-auto bg-[#FF6B00]/0 group-hover:bg-[#FF6B00] transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#FF6B00] hover:bg-[#CC5500] text-white rounded-lg transition-all hover:scale-105"
          >
            View All Products
            <span className="text-lg">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
