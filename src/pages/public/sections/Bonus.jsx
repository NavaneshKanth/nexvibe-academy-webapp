import React from "react";
import { motion } from "framer-motion";
import {
  StarIcon,
  ChartBarSquareIcon,
  AcademicCapIcon,
  BoltIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    scale: 1.07,
    boxShadow: "0 15px 40px rgba(0,128,128,0.2)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const bonusFeatures = [
  {
    icon: StarIcon,
    title: "Developed & Tested",
    description: "Years of expert development ensure precision and profitability.",
  },
  {
    icon: ChartBarSquareIcon,
    title: "Exclusive Insights",
    description: "Deep analysis of XAU/USD price action with proprietary methods.",
  },
  {
    icon: AcademicCapIcon,
    title: "Institutional Strategies",
    description: "Market-beating institutional-level trading tactics.",
  },
  {
    icon: BoltIcon,
    title: "Included Free",
    description: "Bonus content offered free with your course subscription.",
  },
];

export default function Bonus({ onRegisterClick }) {
  return (
    <motion.section
      id="bonus"
      className="relative py-24 bg-gradient-to-br from-[var(--color-bg-light)] via-[var(--color-bg-light)]/80 to-[var(--color-bg-light)] text-[var(--color-text-dark)] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl px-8 lg:px-12">
        <motion.h2
          className="text-5xl font-extrabold mb-6 max-w-4xl leading-tight tracking-tight drop-shadow-lg mx-auto text-center"
          variants={itemVariants}
        >
          <span className="block text-[var(--color-secondary)] mb-2">Exclusive Bonus</span>
          Our Signature Strategy
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-center text-lg italic text-[var(--color-text-dark)]/80 mb-16"
          variants={itemVariants}
        >
          ✨ Our Signature Strategy – Available Only at Dubai Trading Academy ✨
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {bonusFeatures.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={i}
              className="flex items-center space-x-6 rounded-xl bg-gray-100/50 p-6 backdrop-blur-md border border-gray-200/50 cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="p-4 bg-[var(--color-secondary)] rounded-lg flex items-center justify-center text-[var(--color-accent)]"
                variants={itemVariants}
                whileHover={{ rotate: [0, 10, -10, 0], scale: 1.1 }}
                style={{ minWidth: 56 }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-text-dark)]">{title}</h3>
                <p className="text-[var(--color-text-dark)]/90 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-20 text-center" variants={itemVariants}>
          <motion.button
            onClick={onRegisterClick}
            className="bg-[var(--color-secondary)] text-white px-14 py-4 rounded-xl font-bold shadow-lg hover:bg-[var(--color-accent)] transition-all duration-300 flex items-center justify-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Claim Your Bonus <ArrowRightIcon className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Decorative floating shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-150px] left-[-200px] w-96 h-96 rounded-full bg-[var(--color-secondary)] opacity-10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-120px] right-[-180px] w-72 h-72 rounded-full bg-[var(--color-accent)] opacity-10 blur-2xl"
        />
      </div>
    </motion.section>
  );
}