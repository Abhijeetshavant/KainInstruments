import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "Plant Manager, Tata Steel",
    content:
      "KAIN Instruments has been our preferred supplier for 5 years. Their product quality and technical support are exceptional.",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=FF6B00&color=fff",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Procurement Head, Reliance Industries",
    content:
      "The team at KAIN understands our requirements perfectly. They provide cost-effective solutions without compromising on quality.",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Priya+Sharma&background=FF6B00&color=fff",
  },
  {
    id: 3,
    name: "Amit Patel",
    position: "CEO, Patel Engineering",
    content:
      "Weve been using KAINs instruments for all our projects. Their after-sales support is outstanding and products are highly reliable.",
    rating: 5,
    image:
      "https://ui-avatars.com/api/?name=Amit+Patel&background=FF6B00&color=fff",
  },
  {
    id: 4,
    name: "Sunita Reddy",
    position: "Technical Director, L&T",
    content:
      "KAINs precision instruments have significantly improved our quality control processes. Highly recommended for any industrial application.",
    rating: 4,
    image:
      "https://ui-avatars.com/api/?name=Sunita+Reddy&background=FF6B00&color=fff",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12 reveal">
          <span className="text-primary font-mono text-sm">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            What Our
            <span className="gradient-text block">Clients Say</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-200 rounded-2xl border border-dark-300 p-6 md:p-8 reveal">
            <div className="flex flex-col items-center text-center">
              {/* Client Image */}
              <img
                src={current.image}
                alt={current.name}
                className="w-20 h-20 rounded-full border-2 border-primary mb-4"
              />

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < current.rating
                        ? "text-primary fill-primary"
                        : "text-gray-500"
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-lg text-gray-300 mb-6 italic">
                "{current.content}"
              </blockquote>

              <div>
                <h4 className="font-semibold">{current.name}</h4>
                <p className="text-sm text-gray-500">{current.position}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-dark-300 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex ? "w-8 bg-primary" : "bg-dark-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 bg-dark-300 rounded-lg hover:bg-primary/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
