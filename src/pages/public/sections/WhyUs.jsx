import React from "react";
import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  WalletIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.18,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hover: { scale: 1.05 },
};

const features = [
  {
    icon: AcademicCapIcon,
    title: "Expert Mentors",
    description:
      "Learn from professional traders with proven experience and a track record of success.",
  },
  {
    icon: ComputerDesktopIcon,
    title: "Hands-On Training",
    description:
      "Get practical, hands-on live training that goes beyond theory to prepare you for real markets.",
  },
  {
    icon: WalletIcon,
    title: "Affordable & Transparent",
    description:
      "Enjoy affordable fees with clear pricing and special offers that provide exceptional value.",
  },
  {
    icon: UsersIcon,
    title: "Exclusive Community",
    description:
      "Gain access to a fast-growing, supportive trader community right here in Dubai.",
  },
];

export default function WhyUs() {
  return (
    <motion.section
      id="why-us"
      className="relative py-20 bg-[var(--color-bg)] text-[var(--color-text-body)] max-w-6xl mx-auto px-6 sm:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Optional SVG / PNG background shape overlay can be added here */}

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-header)] mb-16"
        variants={itemVariants}
      >
        Why <span className="text-[var(--color-secondary)]">Choose Us</span>
      </motion.h2>

      <div>
        {features.map(({ icon: Icon, title, description }, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-8 py-6 border-b border-[var(--color-border)] last:border-none cursor-default group"
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="flex-shrink-0 relative">
              <motion.div
                className="p-5 rounded-lg bg-[var(--color-accent)]/30 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              >
                <Icon className="w-10 h-10 text-[var(--color-secondary)]" />
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-[var(--color-secondary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 rounded"></div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[var(--color-on-primary)]">
                {title}
              </h3>
              <p className="max-w-xl text-[var(--color-text-body)] leading-relaxed">
                {description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
