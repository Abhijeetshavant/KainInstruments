import React from "react";
import {
  Building2,
  Factory,
  Droplets,
  Leaf,
  Flame,
  Stethoscope,
} from "lucide-react";

const industries = [
  { icon: Factory, name: "Manufacturing", count: "45+ projects" },
  { icon: Building2, name: "Construction", count: "38+ projects" },
  { icon: Droplets, name: "Water Treatment", count: "27+ projects" },
  { icon: Leaf, name: "Renewable Energy", count: "32+ projects" },
  { icon: Flame, name: "Oil & Gas", count: "19+ projects" },
  { icon: Stethoscope, name: "Pharmaceuticals", count: "23+ projects" },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-mono text-sm">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Trusted Across
            <span className="gradient-text block">Critical Industries</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="bg-dark-200 rounded-lg p-6 text-center border border-dark-300 hover:border-primary/50 transition-all card-hover reveal"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-3">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-sm font-semibold">{industry.name}</h4>
                <span className="text-xs text-gray-500">{industry.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
