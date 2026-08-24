import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Get Started?
            <span className="gradient-text block">
              Let's Discuss Your Needs
            </span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact our team today for a free consultation and quote. We're here
            to help you find the perfect instrument for your application.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a href="tel:+919876543210" className="btn-secondary">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
