import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Mansoori",
      quote:
        "The best trading course in Dubai. The instructors are experts, and the curriculum is incredibly practical. I've seen a huge improvement in my trading results in just a few weeks!",
      role: "Student, Dubai",
    },
    {
      id: 2,
      name: "Fatima Khan",
      quote:
        "I was a complete beginner, and this academy made trading easy to understand. The support is fantastic, and the live sessions helped me gain confidence. Highly recommend!",
      role: "Student, Abu Dhabi",
    },
    {
      id: 3,
      name: "Omar bin Zayed",
      quote:
        "The focus on risk management and trading psychology is what sets this course apart. It's not just about signals; it's about becoming a consistently profitable trader.",
      role: "Trader, Sharjah",
    },
    {
      id: 4,
      name: "Noura Saeed",
      quote:
        "The course on Gold trading was a game-changer for me. I finally understand market dynamics and can make informed decisions. Thank you, Nexvibe!",
      role: "Entrepreneur, Al Ain",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000); // Change testimonial every 7 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="bg-[var(--color-bg-subtle)] p-8 rounded-xl shadow-2xl border border-[var(--color-border)] min-h-[250px] flex flex-col justify-center text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-xl italic text-[var(--color-text-body)] mb-6">
            "{testimonials[currentIndex].quote}"
          </p>
          <div className="text-center">
            <p className="font-bold text-lg text-[var(--color-text-header)] mb-1">
              {testimonials[currentIndex].name}
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Previous Testimonial"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Next Testimonial"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-border)]'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;