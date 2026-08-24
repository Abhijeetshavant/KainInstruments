import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Eye,
  Shield,
  Heart,
  TrendingUp,
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Clock,
  Truck,
  Headphones,
  ThumbsUp,
  Sparkles,
  Rocket,
  Globe,
  Building2,
} from "lucide-react";

const About = () => {
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className=" min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-[#0A1628] via-[#0D1F3C] to-[#1A2D4D] py-20"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#FF6B00]/20 text-[#FF6B00] rounded-full text-sm font-semibold mb-4"
            >
              About Kain Instruments
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Building India's
              <span className="block text-[#FF6B00]">Industrial Future</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Precision engineering solutions since 2024 — serving India's
              industrial sector with excellence and innovation.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                Empowering Indian Industry
                <span className="block text-[#FF6B00]">
                  With Precision & Trust
                </span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                KAIN Instruments was founded with a vision to provide
                high-quality mechanical and electrical instruments to India's
                growing industrial sector. With a focus on precision,
                reliability, and customer satisfaction, we've quickly become a
                trusted partner for leading companies across the country.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our team brings decades of combined experience in
                instrumentation, engineering, and industrial automation. We
                understand the challenges of modern industry and offer solutions
                that work in real-world conditions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#FF6B00] w-5 h-5" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    ISO Certified
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#FF6B00] w-5 h-5" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    PAN India Presence
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-[#FF6B00] w-5 h-5" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    24/7 Support
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { number: "500+", label: "Products Delivered", icon: Award },
                { number: "200+", label: "Happy Clients", icon: Users },
                { number: "50+", label: "Cities Served", icon: MapPin },
                { number: "98%", label: "Satisfaction Rate", icon: ThumbsUp },
              ].map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{
                      y: -5,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-6 h-6 text-[#FF6B00]" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-[#FF6B00] font-mono">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
              Mission & Vision
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To empower Indian industries with world-class mechanical and
                electrical instruments, delivering precision, reliability, and
                innovation that drives operational excellence and sustainable
                growth.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-[#FF6B00]/10 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-[#FF6B00]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                Our Vision
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To be India's most trusted partner for industrial
                instrumentation, recognized for our commitment to quality,
                customer service, and contribution to the nation's industrial
                growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
              What Drives Us
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-3">
              These core values guide everything we do at Kain Instruments
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Target,
                title: "Precision",
                desc: "Every instrument is tested for accuracy and reliability.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Shield,
                title: "Quality",
                desc: "We maintain the highest standards in everything we do.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: Heart,
                title: "Trust",
                desc: "Building long-term relationships with our clients.",
                color: "from-red-500 to-rose-500",
              },
              {
                icon: Zap,
                title: "Innovation",
                desc: "Staying ahead with the latest technology and solutions.",
                color: "from-purple-500 to-pink-500",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-[#0A1628] text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
              Why Kain Instruments
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">
              Your Trusted Industrial Partner
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Award,
                title: "Quality Guaranteed",
                desc: "Premium products with strict quality control",
              },
              {
                icon: Clock,
                title: "Fast Response",
                desc: "24/7 support with rapid emergency response",
              },
              {
                icon: Truck,
                title: "PAN India Delivery",
                desc: "Reliable logistics across all states",
              },
              {
                icon: Headphones,
                title: "Expert Team",
                desc: "Skilled professionals with years of experience",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/10 transition-all"
                >
                  <div className="w-14 h-14 bg-[#FF6B00]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-[#FF6B00]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <span className="text-[#FF6B00] font-semibold text-sm tracking-wider uppercase">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-800 dark:text-white">
              Meet Our Experts
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-3">
              Our team of dedicated professionals with decades of industry
              experience
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                name: "Arjun Singh",
                role: "CEO & Founder",
                experience: "25+ Years Experience",
                image:
                  "https://ui-avatars.com/api/?name=Arjun+Singh&background=FF6B00&color=fff&size=128",
              },
              {
                name: "Meera Patel",
                role: "Head of Engineering",
                experience: "20+ Years Experience",
                image:
                  "https://ui-avatars.com/api/?name=Meera+Patel&background=FF6B00&color=fff&size=128",
              },
              {
                name: "Vikram Rao",
                role: "Sales Director",
                experience: "18+ Years Experience",
                image:
                  "https://ui-avatars.com/api/?name=Vikram+Rao&background=FF6B00&color=fff&size=128",
              },
              {
                name: "Anita Sharma",
                role: "Operations Manager",
                experience: "15+ Years Experience",
                image:
                  "https://ui-avatars.com/api/?name=Anita+Sharma&background=FF6B00&color=fff&size=128",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-[#FF6B00] object-cover"
                />
                <h4 className="font-bold text-lg text-gray-800 dark:text-white">
                  {member.name}
                </h4>
                <p className="text-[#FF6B00] text-sm font-medium">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  {member.experience}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#FF6B00] to-[#E05A00]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Let's discuss your instrument requirements. We're here to help you
              find the perfect solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <button className="px-8 py-3 bg-white text-[#FF6B00] rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  Get in Touch
                </button>
              </Link>
              <Link to="/products">
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Explore Products
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
