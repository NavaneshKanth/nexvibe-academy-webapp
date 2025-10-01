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
      className="relative py-20 lg:py-28 bg-gradient-to-r from-gray-50 via-white to-gray-50 text-[var(--color-text-body)] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12"
          variants={itemVariants}
        >
          <div>
            <div className="flex items-center mb-2">
                <ChatBubbleLeftRightIcon className="w-8 h-8 text-[var(--color-secondary)]" />
                <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)] ml-3">
                    Verified Success Stories
                </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--color-text-dark)]">
              Real Results From Our <span className="text-[var(--color-secondary)]">Traders</span>
            </h2>
          </div>
        </motion.div>

        <motion.p
          className="max-w-4xl text-left mb-16 text-lg sm:text-xl text-[var(--color-text-dark)]/80"
          variants={itemVariants}
        >
          Hear directly from students across the globe—from Dubai to Kerala—who have transformed their trading skills and achieved financial consistency with our mentorship program.
        </motion.p>

        {/* Testimonials Slider (Now integrated) */}
        <TestimonialsSlider />
      </div>
    </motion.section>
  );
}

export default Testimonials;