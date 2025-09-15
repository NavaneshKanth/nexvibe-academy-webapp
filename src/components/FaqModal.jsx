import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import FaqAccordion from "./FaqAccordion";

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const contentVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, type: "spring", damping: 15, stiffness: 100 } },
  exit: { scale: 0.95, opacity: 0, transition: { duration: 0.2 } },
};

function FaqModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-xl md:max-w-2xl lg:max-w-3xl rounded-xl shadow-2xl bg-[var(--color-primary)] border border-[var(--color-border)]"
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-8 pb-4">
              <h2 className="text-3xl font-bold text-[var(--color-text-header)]">
                Frequently Asked Questions
              </h2>
              <button
                onClick={onClose}
                className="rounded-full p-2 transition-colors duration-200 text-[var(--color-text-body)] hover:bg-[var(--color-bg-subtle)]"
                aria-label="Close modal"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Modal Body with Custom Scrollbar */}
            <div className="p-8 pt-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <FaqAccordion />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FaqModal;