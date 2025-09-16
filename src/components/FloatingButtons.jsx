import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon, EnvelopeIcon, ChatBubbleOvalLeftIcon, XMarkIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline";

// Framer Motion variants for the main button
const buttonVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  },
  hover: { scale: 1.1, transition: { duration: 0.2 } }
};

// Framer Motion variants for the submenu container
const menuVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 10, staggerChildren: 0.1 }
  },
  exit: { opacity: 0, scale: 0.8, x: 20, transition: { duration: 0.2 } }
};

// Framer Motion variants for the individual menu items
const menuItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export default function FloatingButtons() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contactNumber = "+971522967505";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const handleWhatsAppClick = () => {
    const message = "Hello, I would like to know more about your trading courses.";
    const whatsappUrl = `https://wa.me/${contactNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener noreferrer');
    setIsMenuOpen(false); // Close menu after click
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3">
      {/* Main Connect Button */}
      <motion.button
        onClick={toggleMenu}
        aria-label="Connect"
        className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white p-4 rounded-l-full shadow-lg transition-colors"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
        whileHover="hover"
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }}>
              <XMarkIcon className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }}>
              <ChatBubbleOvalLeftEllipsisIcon className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      
      {/* Dynamic Connect Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute right-full top-0 mr-4 p-2 rounded-full flex flex-col items-center gap-2"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.a
              href={`tel:${contactNumber}`}
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
              variants={menuItemVariants}
            >
              <PhoneIcon className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:nexvibeacademy@gmail.com"
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
              variants={menuItemVariants}
            >
              <EnvelopeIcon className="w-6 h-6" />
            </motion.a>
            <motion.button
              onClick={handleWhatsAppClick}
              className="bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] text-white p-4 rounded-full shadow-lg transition-colors flex items-center justify-center"
              variants={menuItemVariants}
            >
              <ChatBubbleOvalLeftIcon className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}