import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import BrandsSection from "../components/home/BrandsSection";
import CategoryGrid from "../components/home/CategoryGrid";
import ServicesSection from "../components/home/ServicesSection";
import WhyUsSection from "../components/home/WhyUsSection";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 },
    );

    reveals.forEach((reveal) => observer.observe(reveal));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <HeroSection />
      <BrandsSection />
      <CategoryGrid />
      <ServicesSection />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
