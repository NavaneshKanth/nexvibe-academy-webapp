import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TradingViewMarketScreener from "./TradingViewMarketScreener";
import LazyLoadWidgetWrapper from "./LazyLoadWidgetWrapper";

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { scale: 0.9, opacity: 0, y: 50 },
  visible: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.4, type: "spring", damping: 15, stiffness: 100 } },
  exit: { scale: 0.9, opacity: 0, y: 50, transition: { duration: 0.2 } },
};

function MarketScreenerModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-7xl overflow-hidden rounded-lg bg-[var(--color-bg)] p-8 shadow-2xl"
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-[var(--color-text-header)]">
                Live Market Screener
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-[var(--color-text-body)] transition-colors hover:bg-white/10"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* The Market Screener Widget is placed here */}
            <div className="w-full">
              <LazyLoadWidgetWrapper height="600px">
                <TradingViewMarketScreener />
              </LazyLoadWidgetWrapper>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MarketScreenerModal;