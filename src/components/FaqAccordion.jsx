import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What is the duration of the course?",
    answer: "Our comprehensive course runs for 2 months, covering all essential aspects of Forex, Crypto, and Stock trading."
  },
  {
    question: "Do I need prior trading experience?",
    answer: "No prior experience is required. Our course caters to beginners and provides a solid foundation in trading principles."
  },
  {
    question: "What kind of support will I receive?",
    answer: "You’ll benefit from real-time trading experience, personalized mentorship, and ongoing guidance from expert."
  },
  {
    question: "Are the courses online or offline?",
    answer: "Our courses are offered offline, allowing participants to engage in face-to-face learning experiences. We provide in-person workshops and seminars designed to foster interactive learning and networking opportunities."
  }
];

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("I have some doubts about your courses. Can you please help?");
    const phoneNumber = "+971501234567"; // Replace with your WhatsApp number
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-subtle)] transition-all duration-300 hover:border-[var(--color-accent)]"
            initial={false}
          >
            <button
              className="flex w-full items-center justify-between p-5 text-left"
              onClick={() => toggleAnswer(index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-content-${index}`}
            >
              <span className="text-lg font-semibold text-[var(--color-text-header)]">
                {faq.question}
              </span>
              <motion.span
                className="ml-4 flex-shrink-0 text-[var(--color-text-muted)]"
                initial={false}
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === index ? (
                  <ChevronUpIcon className="h-6 w-6" />
                ) : (
                  <ChevronDownIcon className="h-6 w-6" />
                )}
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`faq-content-${index}`}
                  className="overflow-hidden p-5 pt-0"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-[var(--color-text-body)] leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="mb-4 text-xl font-medium text-[var(--color-text-header)]">Still have questions?</p>
        <button
          onClick={handleWhatsAppClick}
          className="rounded-full bg-[var(--color-accent)] px-8 py-3 font-bold text-[var(--color-on-primary)] shadow-lg transition-all duration-300 hover:scale-105"
        >
          Contact Us on WhatsApp
        </button>
      </div>
    </div>
  );
}

export default FaqAccordion;