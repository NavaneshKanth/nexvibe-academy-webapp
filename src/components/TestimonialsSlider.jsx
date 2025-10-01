import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, StarIcon } from "@heroicons/react/24/solid";


const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Mansoori",
    quote: "The mentorship here is world-class. It’s not just theory; the practical, real-time strategy sessions were the key to my consistency. A massive return on investment.",
    role: "Senior Analyst, Dubai",
    photo: "https://placehold.co/100x100/10b981/ffffff?text=AA",
    language: "English",
  },
  {
    id: 2,
    name: "Maya Sharma",
    quote: "I was skeptical, but the systematic approach to risk management changed everything. I now trade with confidence, not guesswork.",
    role: "Entrepreneur, Mumbai",
    photo: "https://placehold.co/100x100/10b981/ffffff?text=MS",
    language: "English",
  },
  {
    id: 3,
    name: "Suresh K.",
    // Malayalam quote and its human English translation
    quote: "ഈ ട്രേഡിംഗ് അക്കാദമി എന്റെ ജീവിതം മാറ്റിമറിച്ചു. വളരെ വ്യക്തവും പ്രായോഗികവുമായ അദ്ധ്യാപനം.",
    translation: "This trading academy completely changed my life. The teaching is very clear and practical.",
    role: "Engineer, Kerala",
    photo: "https://placehold.co/100x100/10b981/ffffff?text=SK",
    language: "Malayalam",
  },
  {
    id: 4,
    name: "Omar bin Zayed",
    quote: "The focus on trading psychology and detailed strategy implementation is what sets this course apart. I'm a consistently profitable trader now.",
    role: "Trader, Sharjah",
    photo: "https://placehold.co/100x100/10b981/ffffff?text=OZ",
    language: "English",
  },
  {
    id: 5,
    name: "Priya D.",
    // Hindi quote and its human English translation
    quote: "ट्रेडिंग अब मेरे लिए रहस्य नहीं रहा। शिक्षकों ने हर संदेह को आसानी से दूर किया। मैं बहुत आभारी हूँ।",
    translation: "Trading is no longer a mystery for me. The instructors easily cleared every doubt. I am very grateful.",
    role: "Homemaker, Delhi",
    photo: "https://placehold.co/100x100/10b981/ffffff?text=PD",
    language: "Hindi",
  },
  {
    id: 6,
    name: "Jennifer Lee",
    quote: "The live market analysis sessions were gold. It truly bridged the gap between learning theory and executing in a volatile market.",
    role: "Marketing Manager, SG",
    photo: "https://placehold.co/100x100/10b981/ffffff?text=JL",
    language: "English",
  },
  {
    id: 7,
    name: "Khalid Al-Fahad",
    quote: "Excellent community support. The private group is invaluable for market discussions and immediate feedback from the instructors.",
    role: "Student, Riyadh",
    photo: "https://placehold.co/100x100/10b981/ffffff?text=KF",
    language: "English",
  },
];

// Defining the component using 'export default function' as requested
export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentTestimonial = testimonials[currentIndex];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000); // Change testimonial every 8 seconds
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-6 pb-4">
      
      {/* Testimonial Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTestimonial.id}
          // Updated Card UI: More defined shadow, cleaner border
          className="bg-white p-8 sm:p-12 rounded-3xl shadow-2xl border border-gray-100 min-h-[350px] flex flex-col justify-between text-left relative overflow-hidden transition-all duration-300 hover:shadow-3xl"
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.95, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Quote Icon */}
          <ChatBubbleLeftRightIcon className="w-16 h-16 absolute top-6 right-8 text-gray-100 opacity-70" />

          {/* Quote Content */}
          <div className="flex flex-col flex-grow">
            <div className="flex text-amber-500 mb-4">
                <StarIcon className="w-5 h-5" /><StarIcon className="w-5 h-5" /><StarIcon className="w-5 h-5" /><StarIcon className="w-5 h-5" /><StarIcon className="w-5 h-5" />
            </div>
            
            <p className="text-xl sm:text-2xl font-semibold text-[var(--color-text-dark)] mb-6 italic leading-relaxed tracking-wide">
              "{currentTestimonial.quote}"
            </p>
            
            {/* Translation for regional quotes */}
            {currentTestimonial.translation && (
                <p className="text-base text-gray-500 border-l-4 border-[var(--color-primary)]/50 pl-4 py-2 mt-4 italic font-light">
                    **Translation:** "{currentTestimonial.translation}"
                </p>
            )}

          </div>

          {/* Author Info */}
          <div className="flex items-center mt-8 pt-6 border-t border-gray-50">
            <img 
                src={currentTestimonial.photo} 
                alt={currentTestimonial.name} 
                // Larger image size and better ring/border
                className="w-14 h-14 rounded-full object-cover shadow-lg mr-4 border-2 border-[var(--color-secondary)]/50 ring-2 ring-[var(--color-primary)]/20"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/10b981/ffffff?text=" + currentTestimonial.name.charAt(0) }} // Fallback
            />
            <div>
              <p className="font-extrabold text-xl text-[var(--color-text-dark)]">{currentTestimonial.name}</p>
              <p className="text-sm text-[var(--color-text-muted)] flex items-center gap-2 mt-0.5">
                <AcademicCapIcon className="w-4 h-4 text-[var(--color-primary)]" />
                {currentTestimonial.role}
                <span className="ml-2 font-medium text-xs bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] px-2 py-0.5 rounded-full">{currentTestimonial.language}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls Block (Grouped at the bottom for a cleaner look) */}
      <div className="flex justify-between items-center mt-10 px-4 sm:px-0">
        
        {/* Empty space/Placeholder to align controls to the right on desktop */}
        <div className="hidden sm:block"></div> 

        <div className="flex items-center gap-4 ml-auto">
            {/* Navigation Buttons (Sleeker design, grouped) */}
            <div className="flex gap-2">
                <button
                    onClick={handlePrev}
                    // Sleek button style
                    className="p-3 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-100 hover:text-[var(--color-secondary)] transition-all duration-300 shadow-md hidden sm:block"
                    aria-label="Previous Testimonial"
                >
                    <ChevronLeftIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={handleNext}
                    // Sleek button style
                    className="p-3 rounded-full border border-gray-200 text-gray-700 bg-white hover:bg-gray-100 hover:text-[var(--color-secondary)] transition-all duration-300 shadow-md hidden sm:block"
                    aria-label="Next Testimonial"
                >
                    <ChevronRightIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center items-center gap-2">
                {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-[var(--color-secondary)] scale-110' : 'bg-gray-300 hover:bg-[var(--color-primary)]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                ></button>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};
