import React, { useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// TradingViewChart Component
const TradingViewChart = memo(() => {
  const container = useRef();

  useEffect(() => {
    // Check if the script has already been added to avoid duplicates
    if (container.current.querySelector('script')) {
      return;
    }

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "OANDA:XAUUSD",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "dark",
        "style": "1",
        "locale": "en",
        "enable_publishing": false,
        "backgroundColor": "rgba(10, 20, 30, 1)",
        "hide_top_toolbar": false,
        "allow_symbol_change": true,
        "save_image": false,
        "calendar": false,
        "hide_volume": true,
        "hotlist": false,
        "details": false,
        "studies": ["STD;BollingerBands", "STD;RSI"],
        "support_buttons": false
      }`;
    container.current.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      if (container.current && container.current.contains(script)) {
        container.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "600px", width: "100%" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
});

// The new standalone component
export default function TradingViewSection() {
  return (
    <motion.section
      id="trading-view-section"
      className="relative py-20 bg-[var(--color-bg)] text-[var(--color-text-body)] px-6 lg:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div className="text-center mb-10" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-header)] mb-2 leading-tight">
            Our Strategy in <span className="text-[var(--color-secondary)]">Action</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[var(--color-text-body)]/80">
            See our proprietary methods on live market data for XAU/USD.
          </p>
        </motion.div>
        
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl border border-[var(--color-border)]"
          variants={itemVariants}
        >
          <TradingViewChart />
        </motion.div>
      </div>
    </motion.section>
  );
}