import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

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
  hover: { scale: 1.05 },
};

function Hero({ onRegisterClick }) {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/Hero4.webm" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/70 to-[var(--color-primary)]/20"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 max-w-4xl text-left">
          <motion.span variants={itemVariants} className="text-white">
            Master the Art{" "}
          </motion.span>
          <motion.span variants={itemVariants} className="text-[var(--color-secondary)]">
            of Trading in Dubai
          </motion.span>
        </h1>
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl max-w-2xl text-[var(--color-text-body)]"
        >
          Learn Forex, Gold & Crypto trading with expert guidance and real strategies
        </motion.p>
        <motion.button
          onClick={onRegisterClick}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          className="mt-8 bg-[var(--color-secondary)] text-[var(--color-on-primary)] px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[var(--color-accent)] transition-colors flex items-center justify-center gap-2"
        >
          Register Now – Limited Seats
          <ArrowRightIcon className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;