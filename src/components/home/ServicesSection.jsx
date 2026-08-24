import React from "react";
import { Wrench, Shield, Clock, Truck, Headphones, Award } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    description:
      "Expert installation and commissioning of all instruments with warranty.",
  },
  {
    icon: Shield,
    title: "Calibration Services",
    description:
      "NABL-accredited calibration services for all types of instruments.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support for critical industrial operations.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "Pan-India delivery with real-time tracking and insurance.",
  },
  {
    icon: Headphones,
    title: "Technical Consultation",
    description:
      "Free technical consultation for selecting the right instruments.",
  },
  {
    icon: Award,
    title: "Warranty & AMC",
    description: "Comprehensive warranty and annual maintenance contracts.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-dark-100">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-mono text-sm">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Beyond Products —
            <span className="gradient-text block">Complete Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We provide end-to-end support from selection to maintenance,
            ensuring your operations run smoothly.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-dark-200 rounded-lg p-6 border border-dark-300 hover:border-primary/50 transition-all card-hover reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
