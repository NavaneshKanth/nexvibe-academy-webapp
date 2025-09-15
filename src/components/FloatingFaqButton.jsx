import React from 'react';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

function FloatingFaqButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed left-0 bottom-35 z-50 flex items-center gap-2 px-4 py-2 rounded-r-lg bg-[var(--color-primary)] text-[var(--color-secondary)] border border-[var(--color-border)] shadow-2xl transition-all duration-300 hover:translate-x-1 hover:scale-105 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
      aria-label="Frequently Asked Questions"
    >
      <QuestionMarkCircleIcon className="w-6 h-6 flex-shrink-0" />
      <span className="font-bold text-lg text-[var(--color-text-header)]">FAQ</span>
    </button>
  );
}

export default FloatingFaqButton;