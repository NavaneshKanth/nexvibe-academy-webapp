import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";

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

function Courses({ onRegisterClick }) {
  return (
    <motion.section
      id="courses"
      className="relative py-20 lg:py-32 text-[var(--color-text-dark)] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Blob background using the imported variable */}
      <div
        className="pointer-events-none absolute inset-0  z-0"
        style={{
          backgroundImage: `url("/blobBG.svg")`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: '120%',
        }}
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-6 lg:px-12 z-10 max-w-6xl">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold text-center text-[var(--color-text-dark)] mb-14 leading-tight"
          variants={itemVariants}
        >
          <span className="text-[var(--color-accent-dark)]">Limited-Time</span>{" "}
          Course Pricing
        </motion.h2>

        <div className="flex flex-col gap-10">
          {/* Main Content Panel */}
          <motion.div
            className="w-full lg:max-w-4xl mx-auto space-y-8 p-8 rounded-2xl bg-white shadow-lg border border-gray-200"
            variants={itemVariants}
          >
            {/* Pricing Details */}
            <div className="flex flex-col md:flex-row justify-around items-center gap-6">
              {/* Classroom Training */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-1 text-[var(--color-text-dark)]">
                  Classroom Training
                </h3>
                <p className="text-lg font-medium text-gray-500 mb-2">
                 Corporate Office
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-[var(--color-accent-dark)]">
                    AED 2,500
                  </span>
                  <span className="text-base text-gray-400 line-through mt-1">
                    AED 4,500
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">(Opening Offer)</p>
              </div>

              <div className="hidden md:block w-px h-32 bg-gray-300"></div>

              {/* Online Training */}
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-1 text-[var(--color-text-dark)]">
                  Online Training
                </h3>
                <p className="text-lg font-medium text-gray-500 mb-2">
                  Live Classes
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold text-[var(--color-accent-dark)]">
                    AED 2,000
                  </span>
                  <span className="text-base text-gray-400 line-through mt-1">
                    AED 4,000
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">(Opening Offer)</p>
              </div>
            </div>

            {/* Features List */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xl font-bold text-[var(--color-text-dark)] mb-4">
                What's Included:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base font-medium text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-[var(--color-accent-dark)] flex-shrink-0 mt-1" />
                  <span>Lifetime mentorship & access to our exclusive trader community.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="w-5 h-5 text-[var(--color-accent-dark)] flex-shrink-0 mt-1" />
                  <span>Comprehensive course materials and live trading sessions.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="mt-6 text-center" variants={itemVariants}>
            <p className="text-xl font-bold text-[var(--color-accent-dark)] mb-4 animate-pulse">
              ⚡ Special Launch Discount – Limited Time Only!
            </p>
            <motion.button
              onClick={onRegisterClick}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 font-bold rounded-full shadow-lg transition-all duration-300 bg-[var(--color-accent-dark)] text-white hover:bg-[var(--color-secondary)] hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              Start Your Journey
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Courses;