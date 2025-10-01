import React from "react";
import { motion } from "framer-motion";

// Animation Variants
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

// Extracted Video ID from: https://youtu.be/WY2-Sn4L-XU?si=XK5_0jYhVArjhAxI
const VIDEO_ID = "WY2-Sn4L-XU";
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=0&modestbranding=1&rel=0`;

export default function VideoExplainer() {
  return (
    <motion.section
      id="explainer-video"
      className="py-16 md:py-24 bg-[var(--color-bg)] text-[var(--color-text-body)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <motion.h2 
          className="text-4xl lg:text-5xl font-extrabold text-center text-[var(--color-text-header)] mb-12" 
          variants={itemVariants}
        >
          <span className="text-[var(--color-secondary)]">What</span> We Teach You
        </motion.h2>

        <motion.p 
          className="text-center text-lg max-w-3xl mx-auto mb-10 text-[var(--color-text-body)]"
          variants={itemVariants}
        >
          Watch this quick video to understand the core principles, strategies, and comprehensive support you will receive in our academy.
        </motion.p>

        {/* Responsive Video Container */}
        <motion.div
          className="relative w-full overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
          variants={itemVariants}
          style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full "
            src={EMBED_URL}
            title="What We Teach You - Program Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </motion.section>
  );
}
