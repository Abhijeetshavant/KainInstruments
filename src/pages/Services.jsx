import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTachometerAlt,
  FaCog,
  FaWrench,
  FaMicrochip,
  FaPlug,
  FaShieldVirus,
  FaChartLine,
  FaLeaf,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaTrophy,
  FaHeadset,
  FaTruck,
  FaBuilding,
  FaRobot,
  FaTools,
  FaCogs,
  FaShieldAlt,
  FaClipboardCheck,
  FaRocket,
  FaUsers,
  FaStar,
  FaQuoteRight,
} from "react-icons/fa";
import { GiGearHammer, GiElectric, GiFactory, GiGears } from "react-icons/gi";
import { MdEngineering, MdPrecisionManufacturing } from "react-icons/md";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialInterval = useRef(null);

  const services = [
    {
      id: 1,
      icon: GiGearHammer,
      title: "Industrial Machinery Supply",
      subtitle: "Complete Equipment Solutions",
      description:
        "Premium quality industrial machinery and equipment sourcing with guaranteed performance and reliability.",
      features: [
        "High-precision manufacturing equipment",
        "Quality-tested machinery",
        "Competitive pricing structure",
        "PAN India delivery network",
      ],
      stats: { projects: 250, clients: 180, years: 15 },
      color: "from-blue-600 to-cyan-500",
      gradient:
        "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30",
    },
    {
      id: 2,
      icon: GiElectric,
      title: "Electrical Systems & Control",
      subtitle: "Smart Control Solutions",
      description:
        "Cutting-edge electrical systems and control solutions for modern industrial automation and efficiency.",
      features: [
        "PLC & SCADA integration",
        "Control panel manufacturing",
        "Energy management systems",
        "Automation consulting",
      ],
      stats: { projects: 180, clients: 120, years: 12 },
      color: "from-purple-600 to-pink-500",
      gradient:
        "from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30",
    },
    {
      id: 3,
      icon: GiFactory,
      title: "On-Site Setup & Commissioning",
      subtitle: "Complete Installation Services",
      description:
        "Expert on-site installation and commissioning services ensuring seamless integration of your equipment.",
      features: [
        "Professional installation teams",
        "Site preparation support",
        "Equipment calibration",
        "Performance optimization",
      ],
      stats: { projects: 320, clients: 240, years: 18 },
      color: "from-orange-600 to-yellow-500",
      gradient:
        "from-orange-50 to-yellow-50 dark:from-orange-950/30 dark:to-yellow-950/30",
    },
    {
      id: 4,
      icon: MdPrecisionManufacturing,
      title: "Precision Maintenance",
      subtitle: "Predictive & Preventive Care",
      description:
        "Comprehensive maintenance programs designed to maximize equipment lifespan and operational efficiency.",
      features: [
        "Predictive maintenance analytics",
        "Preventive maintenance schedules",
        "Emergency repair services",
        "Spare parts inventory",
      ],
      stats: { projects: 400, clients: 280, years: 20 },
      color: "from-green-600 to-emerald-500",
      gradient:
        "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
    },
    {
      id: 5,
      icon: MdEngineering,
      title: "Technical Engineering Services",
      subtitle: "Expert Consulting & Support",
      description:
        "Professional engineering consulting and technical support for complex industrial challenges.",
      features: [
        "Engineering audits",
        "Process optimization",
        "Project management",
        "Technical documentation",
      ],
      stats: { projects: 150, clients: 95, years: 10 },
      color: "from-red-600 to-rose-500",
      gradient:
        "from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30",
    },
    {
      id: 6,
      icon: GiGears,
      title: "Automation Solutions",
      subtitle: "Smart Factory Integration",
      description:
        "Industry 4.0 automation solutions for enhanced productivity, quality control, and operational excellence.",
      features: [
        "Robotic process automation",
        "IoT sensor integration",
        "Data analytics platforms",
        "Quality management systems",
      ],
      stats: { projects: 120, clients: 85, years: 8 },
      color: "from-indigo-600 to-blue-500",
      gradient:
        "from-indigo-50 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Plant Manager, ABC Manufacturing",
      quote:
        "Kain Instruments transformed our production line with their expert installation and automation solutions.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Operations Director, TechCorp",
      quote:
        "The maintenance support from Kain Instruments is exceptional. Our equipment downtime reduced by 70%.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "CEO, GreenEnergy Solutions",
      quote:
        "Their electrical systems have significantly improved our energy efficiency. Highly recommended.",
      rating: 5,
    },
  ];

  useEffect(() => {
    testimonialInterval.current = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(testimonialInterval.current);
  }, []);

  const handleServiceClick = (index) => {
    setActiveService(index);
  };

  return (
    <>
      <Helmet>
        <title>Industrial Services | Kain Instruments</title>
        <meta
          name="description"
          content="Comprehensive industrial services including machinery supply, electrical systems, installation, maintenance, and automation solutions for startups and enterprises."
        />
      </Helmet>

      <div className=" min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section with 3D Effect */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#0D1F3C] to-[#1A2D4D]">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          </div>

          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-[#FF6B00]/20 text-[#FF6B00] rounded-full text-sm font-semibold mb-6"
              >
                Our Services
              </motion.span>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Industrial Solutions
                <span className="block text-[#FF6B00]">
                  for Modern Industry
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
                From machinery supply to complete automation, we deliver
                end-to-end industrial services for startups and established
                enterprises.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <button className="px-8 py-3 bg-[#FF6B00] text-white rounded-lg font-semibold hover:bg-[#E05A00] transition-all transform hover:scale-105">
                    Get a Quote
                  </button>
                </Link>
                <a href="#services-grid">
                  <button className="px-8 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all">
                    Explore Services
                  </button>
                </a>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
              >
                {[
                  { number: "500+", label: "Projects Delivered" },
                  { number: "98%", label: "Client Satisfaction" },
                  { number: "24/7", label: "Support Available" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl font-bold text-white">
                      {stat.number}
                    </p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section id="services-grid" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
                What We Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Comprehensive Industrial Services
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Tailored solutions designed to meet your specific industrial
                requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative group cursor-pointer transition-all duration-500 ${
                    activeService === index ? "scale-105 z-10" : "scale-100"
                  }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(index)}
                >
                  <div
                    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden ${
                      activeService === index
                        ? "ring-2 ring-[#FF6B00] shadow-xl shadow-[#FF6B00]/20"
                        : ""
                    }`}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl text-white transform group-hover:rotate-12 transition-transform duration-500`}
                        >
                          <service.icon />
                        </div>
                        {activeService === index && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="px-3 py-1 bg-[#FF6B00] text-white text-xs font-semibold rounded-full"
                          >
                            Selected
                          </motion.span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold mb-1">
                        {service.title}
                      </h3>
                      <p className="text-[#FF6B00] text-sm font-medium mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        {service.description}
                      </p>

                      <AnimatePresence>
                        {(hoveredService === index ||
                          activeService === index) && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-3"
                          >
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                              {service.features.map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 py-1"
                                >
                                  <FaCheckCircle className="text-[#FF6B00] text-xs flex-shrink-0" />
                                  {feature}
                                </motion.div>
                              ))}
                            </div>

                            <div className="flex items-center gap-4 text-xs">
                              <span className="flex items-center gap-1">
                                <FaTrophy className="text-[#FF6B00]" />
                                {service.stats.projects}+ Projects
                              </span>
                              <span className="flex items-center gap-1">
                                <FaUsers className="text-[#FF6B00]" />
                                {service.stats.clients}+ Clients
                              </span>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <span className="text-xs text-gray-500">
                          {service.stats.years} Years Experience
                        </span>
                        <motion.span
                          className="text-[#FF6B00] font-semibold text-sm flex items-center gap-1"
                          animate={{ x: hoveredService === index ? 5 : 0 }}
                        >
                          Learn More
                          <FaArrowRight className="text-xs" />
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-[#0A1628] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
                Why Kain Instruments
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                Your Trusted Industrial Partner
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Quality Guaranteed",
                  description:
                    "ISO-certified products with strict quality control",
                },
                {
                  icon: FaClock,
                  title: "Fast Response",
                  description: "24/7 support with rapid emergency response",
                },
                {
                  icon: FaTruck,
                  title: "PAN India Delivery",
                  description: "Reliable logistics across all states",
                },
                {
                  icon: FaUsers,
                  title: "Expert Team",
                  description: "Skilled professionals with years of experience",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all group"
                >
                  <div className="w-16 h-16 mx-auto bg-[#FF6B00]/20 rounded-full flex items-center justify-center text-3xl text-[#FF6B00] group-hover:scale-110 transition-transform mb-4">
                    <item.icon />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                How We Work
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  desc: "Understanding your requirements",
                },
                {
                  step: "02",
                  title: "Planning",
                  desc: "Customized solution design",
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Professional implementation",
                },
                {
                  step: "04",
                  title: "Support",
                  desc: "Ongoing maintenance & care",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all">
                    <div className="text-4xl font-bold text-[#FF6B00]/20 group-hover:text-[#FF6B00]/40 transition-colors">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg mt-2">{item.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 text-2xl text-[#FF6B00]/30">
                      →
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-[#0A1628] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
                Client Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center"
                >
                  <FaQuoteRight className="text-4xl text-[#FF6B00]/40 mx-auto mb-6" />
                  <p className="text-xl md:text-2xl font-light mb-6">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div>
                      <p className="font-bold">
                        {testimonials[currentTestimonial].name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-[#FF6B00] text-sm" />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentTestimonial === index
                        ? "w-8 bg-[#FF6B00]"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[#FF6B00] to-[#E05A00]">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Get expert industrial solutions tailored to your needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <button className="px-8 py-3 bg-white text-[#FF6B00] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                    Contact Our Team
                  </button>
                </Link>
                <Link to="/products">
                  <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                    Browse Products
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
