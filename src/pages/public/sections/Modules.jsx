import React from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

const modules = [
  {
    icon: ChartBarIcon,
    title: "Introduction to Trading",
    description: "Forex, Gold & Crypto basics, and market structure overview.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Trading Instruments",
    description: "Currencies, commodities, indices, and leverage usage.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Technical Analysis",
    description: "Charts, candlesticks, trends, and key indicators mastery.",
  },
  {
    icon: LightBulbIcon,
    title: "Fundamental Analysis",
    description: "Economic news & events impact interpretation.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Risk Management",
    description: "Strategies for protecting capital and managing risks.",
  },
  {
    icon: AcademicCapIcon,
    title: "Commodities & Indices",
    description: "Trading Gold and major index-focused strategies.",
  },
  {
    icon: UserCircleIcon,
    title: "Trading Psychology",
    description: "Building the mindset for trading success.",
  },
];

const staggerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const moduleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function ModulesRoadmap() {
  return (
    <section id="modules-roadmap" className="bg-[var(--color-bg)] py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative">
        {/* Section Title */}
        <div className="mb-14">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-[var(--color-text-header)] mb-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Your <span className="text-[var(--color-secondary)]">Trading</span> Roadmap
          </motion.h2>
        </div>

        {/* Vertical Timeline Line */}
        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 w-1 -ml-0.5 h-full bg-[var(--color-secondary)]/30 rounded"></div>

          {/* Modules List */}
          <motion.div
            className="w-full flex flex-col space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerVariants}
          >
            {modules.map((module, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  className={`group relative flex items-center w-full ${isLeft ? "justify-start pl-8 lg:pl-0" : "justify-end pr-8 lg:pr-0"
                    }`}
                  variants={moduleVariants}
                >
                  {/* Timeline Dot */}
                  <span
                    className="absolute z-10 w-5 h-5 rounded-full bg-[var(--color-secondary)] ring-4 ring-[var(--color-bg)] transition-all duration-300 left-1/2 -ml-2 group-hover:bg-[var(--color-accent)] group-hover:scale-125"
                    aria-hidden="true"
                  ></span>

                  {/* Content Card */}
                  <div
                    className={`w-full max-w-md p-6 rounded-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border)] shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-[var(--color-secondary)] group-hover:shadow-[0_12px_24px_-12px_rgba(0,128,128,0.5)]`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 text-[var(--color-secondary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                        <module.icon />
                      </div>
                      <h3 className="font-bold text-xl text-[var(--color-on-primary)]">{module.title}</h3>
                    </div>
                    <p className="text-[var(--color-text-body)]">{module.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}