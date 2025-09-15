import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import marketvalueup from "../../../assets/investment_illustration.png";

const features = [
  {
    label: "Live Market Sessions",
    desc: "Engage in real-time trading guided by world-class mentors and practitioners.",
    color: "var(--color-secondary)",
  },
  {
    label: "Personal Coaching",
    desc: "One-on-one mentorship—tailored strategies, accountability, and true growth.",
    color: "var(--color-accent-dark)",
  },
  {
    label: "Cutting-edge Platform",
    desc: "You get exclusive access to data tools, analytics, and active community forums.",
    color: "var(--color-warning)",
  },
  {
    label: "Flexible Learning",
    desc: "Blend in-person Dubai learning with self-paced online classes anytime.",
    color: "var(--color-warning)",
  },
];

function About() {
  // Parallax glow effect for bg element
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 1], [-60, 100]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.22, 0.12]);

  return (
    <section
      id="about"
      className="relative isolate py-24 lg:py-24 px-0 min-h-[100vh] bg-[var(--color-bg-subtle)] overflow-hidden"
    >
      {/* Floating Glow */}
      <motion.div
        style={{
          y: glowY,
          opacity: glowOpacity,
        }}
        className="pointer-events-none z-0 absolute left-[5%] top-[-80px] w-[340px] h-[340px] bg-[var(--color-secondary)] blur-[110px] opacity-30 rounded-full"
      />

      {/* Large diagonal accent shape right bg */}
      <div className="hidden lg:block absolute right-0 top-0 h-[110%] w-3/5 z-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-[120%] h-full bg-gradient-to-tr from-[var(--color-bg)] via-[var(--color-primary)]/90 to-[var(--color-accent-dark)]/80 opacity-85 rounded-l-[6rem]" />
        <motion.div
          style={{ y: glowY, opacity: glowOpacity }}
          className="absolute right-[-80px] bottom-14 w-[220px] h-[220px] bg-[var(--color-secondary)] blur-[90px] opacity-35 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-20 p-6 sm:p-12 md:p-20 lg:p-0">
        {/* Image/visual */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="lg:w-1/2 w-full flex items-center justify-center"
        >
          <div className="relative">
            <motion.img // Changed to motion.img
              src={marketvalueup}
              alt="Trading Education Visual"
              className="w-full max-w-[440px] mx-auto rounded-3xl shadow-2xl border-[5px] border-[var(--color-primary)]"
              style={{ background: "linear-gradient(135deg, var(--color-bg) 20%, var(--color-bg-subtle) 100%)" }}
              whileHover={{
                scale: 1.03, // Slightly enlarge the image
                rotate: 1.5, // A subtle rotation
                boxShadow: "0 20px 30px rgba(0,0,0,0.3)", // A more pronounced shadow
                // You can add other properties here, e.g., filter: "brightness(1.1)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }} // Transition for hover
            />
            <div className="absolute top-5 left-4 w-24 h-24 rounded-full bg-[var(--color-secondary)] blur-3xl opacity-60 pointer-events-none animate-pulse" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="lg:w-1/2 w-full space-y-12"
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { delay: 0.1, duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-2 flex flex-wrap items-center gap-3">
            <span className="text-[var(--color-on-primary)]">About</span>
            <span className="px-3 rounded-lg bg-[var(--color-secondary)]/90 text-[var(--color-on-primary)]">
              Dubai Trading Academy
            </span>
          </h2>
          <div className="text-lg text-[var(--color-text-body)] leading-relaxed space-y-2">
            <p>
              <span className="text-[var(--color-accent-dark)] font-semibold">Build with expertise.</span>{" "}
              Dubai Trading Academy is where practical strategy and mentorship converge for modern market success.
            </p>
            <p>
              <span className="text-[var(--color-secondary)] font-semibold">Our vision:</span> Transform Dubai into a global leader in trading education while making financial freedom accessible to driven learners everywhere.
            </p>
          </div>
          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  type: "spring",
                  damping: 16,
                  stiffness: 200,
                  mass: 0.8,
                  delay: i * 0.13,
                }}
                className="group border rounded-lg border-[var(--color-border)] bg-[var(--color-bg-subtle)] px-6 py-5 shadow-lg relative"
              >
                <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-lg transition-all duration-300 group-hover:bg-[var(--color-accent)]/10" />
                <span className="relative z-10 text-xl font-bold" style={{ color: f.color }}>
                  {f.label}
                </span>
                <p className="relative z-10 text-[var(--color-text-body)] mt-2 text-base">{f.desc}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-md font-medium text-[var(--color-text-muted)] pt-6">
            Trusted by 2,000+ traders seeking proven results & mentorship.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;