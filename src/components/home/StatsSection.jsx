import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Package, Building2 } from "lucide-react";

const StatItem = ({ icon: Icon, target, label, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={elementRef} className="text-center">
      <div className="flex justify-center mb-3">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl font-bold font-mono text-primary">
        {count}
        <span className="text-xl">{suffix}</span>
      </div>
      <div className="text-sm text-gray-400 mt-1">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { icon: Package, target: 500, label: "Products" },
    { icon: Users, target: 200, label: "Happy Clients" },
    { icon: Building2, target: 50, label: "Cities Served" },
    { icon: Award, target: 98, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-dark to-dark-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
