import React from "react";
import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import TestimonialsSlider from "../../../components/TestimonialsSlider";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function Testimonials() {
  return (
    <motion.section
      id="testimonials"
      className="relative py-20 bg-gradient-to-r from-white via-gray-50 to-white text-[var(--color-text-body)] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-6xl px-6 lg:px-12">
        <motion.div
          className="flex items-center justify-start mb-6"
          variants={itemVariants}
        >
          <ChatBubbleLeftRightIcon className="w-14 h-14 text-[var(--color-secondary)]" />
          <h2 className="text-4xl sm:text-5xl font-extrabold ml-4 leading-tight text-[var(--color-text-dark)]">
            What Our <span className="text-[var(--color-secondary)]">Students Say</span>
          </h2>
        </motion.div>

        <motion.p
          className="max-w-3xl text-left mb-12 text-lg sm:text-xl text-[var(--color-text-dark)]/90"
          variants={itemVariants}
        >
          Hear from traders who have transformed their skills and career with our comprehensive courses.
        </motion.p>

        {/* Testimonials Slider */}
        <div className="px-4 sm:px-0">
          <TestimonialsSlider />
        </div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
