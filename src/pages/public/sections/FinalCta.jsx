import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CountdownTimer from "../../../components/CountdownTimer";

function FinalCta({ onRegisterClick }) {
  const targetDate = new Date("2025-09-30T23:59:59");

  return (
    <motion.section
      id="final-cta"
      className="py-24 bg-gradient-to-r from-white via-gray-100 to-white" // Remove text- color here
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Add a wrapper div to set text color for the entire section */}
      <div className="container max-w-5xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-y-14 md:gap-y-0 md:gap-x-20 text-[var(--color-text-dark)]">
        {/* Left side: headline and paragraph */}
        <motion.div
          className="md:flex-1 text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Seats are{" "}
            <span className="text-[var(--color-secondary)]">filling fast!</span> Don’t miss the launch offer.
          </h2>
          {/* Use the dark color for the paragraph as well */}
          <p className="text-lg md:text-xl max-w-lg text-[var(--color-text-dark)]/90">
            This is your final chance to enroll in our limited-time offer and secure your spot in Dubai’s premier trading course.
          </p>
        </motion.div>

        {/* Right side: vertical stack of countdown timer and register button */}
        <motion.div
          className="md:flex-1 flex flex-col items-center md:items-end gap-8 w-full max-w-xs"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CountdownTimer targetDate={targetDate} />

          <motion.button
            onClick={onRegisterClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-14 py-4 font-semibold rounded-md shadow-md bg-[var(--color-secondary)] text-white hover:bg-[var(--color-accent)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Today & Start Trading Smarter
            <ArrowRightIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FinalCta;