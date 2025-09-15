import React from "react";
import { ChartBarIcon } from "@heroicons/react/24/outline";

function FloatingScreenerButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed left-0 bottom-20 z-50 flex items-center gap-2 px-4 py-2 rounded-r-lg bg-[var(--color-secondary)] text-[var(--color-on-primary)] shadow-2xl transition-all duration-300 hover:translate-x-1 hover:scale-105 hover:bg-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:ring-opacity-50"
      aria-label="Open Market Screener"
    >
      <ChartBarIcon className="w-6 h-6 flex-shrink-0" />
      <span className="font-bold text-lg">Screener</span>
    </button>
  );
}

export default FloatingScreenerButton;