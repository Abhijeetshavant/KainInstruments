import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "JCB India", logo: "JCB", location: "Ballabgarh" },
  { name: "Escorts", logo: "E", location: "Faridabad" },
  { name: "Maruti Suzuki", logo: "MS", location: "Gurugram" },
  { name: "Hero MotoCorp", logo: "HM", location: "Rewari" },
  { name: "Whirlpool", logo: "W", location: "Faridabad" },
  { name: "Havells", logo: "H", location: "Bhiwadi" },
  { name: "Luminous", logo: "L", location: "Gurugram" },
  { name: "Samsung", logo: "S", location: "Noida" },
  { name: "Yamaha", logo: "Y", location: "Greater Noida" },
  { name: "Honda", logo: "H", location: "Greater Noida" },
];

const BrandsSection = () => {
  return (
    <section className="py-12 bg-dark-100 border-y border-dark-200 overflow-hidden">
      <div className="container-custom px-4 md:px-8">
        <div className="text-center mb-8">
          <span className="text-sm text-primary font-mono font-semibold">
            TRUSTED BY LEADING COMPANIES
          </span>
          <h3 className="text-lg text-gray-400 mt-2">
            Serving Haryana's{" "}
            <span className="text-white font-semibold">Industrial Giants</span>
          </h3>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-dark-100 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-dark-100 to-transparent z-10" />

          <motion.div
            className="flex gap-12 items-center"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Double the brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="flex items-center gap-4 flex-shrink-0"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-dark-200 rounded-full border border-dark-300">
                  <span className="text-lg font-bold text-gray-300">
                    {brand.logo}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">
                    {brand.name}
                  </p>
                  <p className="text-xs text-gray-500">{brand.location}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
