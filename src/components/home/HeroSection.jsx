import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gauge, Zap, Cpu } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

      {/* Animated Circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-mono text-primary">
                Est. 2024 • India's Trusted Supplier
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Precision
              <span className="gradient-text block">Instruments</span>
              <span className="text-2xl md:text-3xl font-normal text-gray-400">
                for Modern Industry
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg">
              KAIN Instruments delivers high-precision mechanical and electrical
              instruments that power India's industrial growth. Quality tested.
              Performance guaranteed.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary">
                Explore Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Contact Sales
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-2xl font-bold font-mono text-primary">
                  500+
                </div>
                <div className="text-sm text-gray-500">Products</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-primary">
                  200+
                </div>
                <div className="text-sm text-gray-500">Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-primary">
                  98%
                </div>
                <div className="text-sm text-gray-500">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Gauge Animation */}
          <div className="relative flex justify-center">
            <div className="gauge-container">
              {/* Gauge Background */}
              <svg className="w-64 h-64" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#1A1A1A"
                  strokeWidth="12"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#FF6B00"
                  strokeWidth="12"
                  strokeDasharray="502"
                  strokeDashoffset="100"
                  strokeLinecap="round"
                />
                {/* Tick marks */}
                {[...Array(12)].map((_, i) => {
                  const angle = (i / 12) * 2 * Math.PI - Math.PI / 2;
                  const x1 = 100 + 60 * Math.cos(angle);
                  const y1 = 100 + 60 * Math.sin(angle);
                  const x2 = 100 + 72 * Math.cos(angle);
                  const y2 = 100 + 72 * Math.sin(angle);
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#333"
                      strokeWidth="2"
                    />
                  );
                })}
              </svg>

              {/* Gauge Needle */}
              <div className="gauge-needle">
                <div className="w-1 h-32 bg-primary origin-bottom"></div>
              </div>

              {/* Center Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold font-mono text-primary">
                    98%
                  </div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
              </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 animate-float">
              <div className="w-12 h-12 bg-dark-200 border border-primary/30 rounded-lg flex items-center justify-center">
                <Gauge className="w-6 h-6 text-primary" />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 animate-float delay-700">
              <div className="w-12 h-12 bg-dark-200 border border-primary/30 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
