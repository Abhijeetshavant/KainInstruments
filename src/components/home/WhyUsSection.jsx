import React from "react";
import {
  Shield,
  Award,
  Users,
  TrendingUp,
  Clock,
  Settings,
} from "lucide-react";

const whyUsPoints = [
  {
    icon: Shield,
    title: "Quality Assured",
    description:
      "All products tested to international standards with ISO certification.",
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description:
      "10+ years of experience in mechanical and electrical instruments.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description: "Customized solutions tailored to your specific requirements.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description: "Best prices with volume discounts and special offers.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "99% on-time delivery rate with real-time tracking.",
  },
  {
    icon: Settings,
    title: "After-Sales Support",
    description: "Comprehensive warranty, AMC, and technical support.",
  },
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-dark-100">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-mono text-sm">WHY KAIN</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Why Choose
            <span className="gradient-text block">KAIN Instruments?</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-dark-200 rounded-lg p-6 border border-dark-300 hover:border-primary/50 transition-all card-hover reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
                <p className="text-sm text-gray-400">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
