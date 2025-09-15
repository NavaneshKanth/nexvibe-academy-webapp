import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = ({ onLoginClick, onRegisterClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-[80%]">
      <nav
        className="rounded-full shadow-2xl border border-[rgba(255,255,255,0.2)]
          bg-[var(--color-primary)]/70 backdrop-blur-lg px-7 lg:px-6 py-2 flex items-center justify-between transition-all duration-500"
      >
        {/* Brand */}
        <a
          href="#home"
          className="drop-shadow-md select-none flex-shrink-0 flex items-center gap-2 md:gap-0"
        >
          <img
            src="/favicon2.png"
            alt="Nexvibe Logo"
            className="h-12"
          />
          <span className="text-[var(--color-on-primary)] font-extrabold text-2xl md:text-3xl tracking-tight">
            NEXVIBE
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-3 py-2 text-[var(--color-text-body)] font-semibold drop-shadow-md text-nowrap
                hover:text-[var(--color-secondary)] transition-colors group"
            >
              <span>{item.label}</span>
              <span
                className="absolute left-1/2 -bottom-0.5 w-0 h-0.5 bg-[var(--color-secondary)] rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/8"
                style={{ transitionProperty: "width,left" }}
              />
            </a>
          ))}
          <button
            onClick={onLoginClick}
            className="ml-4 px-4 py-2 border border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-full
              font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition duration-200 drop-shadow flex-shrink-0"
          >
            Login
          </button>
          <button
            onClick={onRegisterClick}
            className="px-6 py-2 bg-[var(--color-secondary)] text-[var(--color-on-primary)] font-bold rounded-full shadow-lg ml-3 flex items-center gap-2
              hover:bg-[var(--color-accent)] hover:shadow-2xl transition-all drop-shadow flex-shrink-0"
          >
            Register
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden z-50 text-[var(--color-on-primary)] focus:outline-none drop-shadow-md"
          aria-label="Open navigation"
        >
          {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 bg-[var(--color-primary)]/90 backdrop-blur-lg z-40 flex flex-col justify-center items-center lg:hidden transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ top: 0 }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-7 right-7 text-[var(--color-on-primary)] focus:outline-none drop-shadow-md"
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        <div className="flex flex-col gap-7 text-center text-2xl font-semibold mt-12">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[var(--color-on-primary)] hover:text-[var(--color-secondary)] transition-colors drop-shadow-md"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full mt-12 max-w-xs px-6">
          <button
            onClick={() => {
              onLoginClick();
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold text-center hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-primary)] transition-colors drop-shadow"
          >
            Login
          </button>
          <button
            onClick={() => {
              onRegisterClick();
              setIsOpen(false);
            }}
            className="w-full px-5 py-2 rounded-full text-center bg-[var(--color-secondary)] text-[var(--color-on-primary)] font-bold shadow-lg hover:bg-[var(--color-accent)] hover:scale-105 hover:shadow-xl transition-all drop-shadow"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;