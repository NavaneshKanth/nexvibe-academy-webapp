import React, { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];
const Navbar = ({ onLoginClick, onRegisterClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] lg:w-[80%]">
      <nav
        className="rounded-full shadow-2xl border border-[rgba(255,255,255,0.2)] bg-[var(--color-primary)]/70 backdrop-blur-lg px-7 lg:px-6 py-2 flex items-center justify-between transition-all duration-500"
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
              className="relative px-3 py-2 text-[var(--color-text-body)] font-semibold drop-shadow-md text-nowrap hover:text-[var(--color-secondary)] transition-colors group"
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
            className="ml-4 px-4 py-2 border border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-full font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition duration-200 drop-shadow flex-shrink-0"
          >
            Login
          </button>
          <button
            onClick={onRegisterClick}
            className="px-6 py-2 bg-[var(--color-secondary)] text-[var(--color-on-primary)] font-bold rounded-full shadow-lg ml-3 flex items-center gap-2 hover:bg-[var(--color-accent)] hover:shadow-2xl transition-all drop-shadow flex-shrink-0"
          >
            Register
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
        {/* Mobile Burger */}
        <button
          className="lg:hidden flex items-center justify-center ml-2"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Bars3Icon className="w-8 h-8" style={{ color: "var(--color-secondary)" }} />
        </button>
      </nav>
      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-[var(--color-primary)] flex flex-col justify-start items-center lg:hidden transition-all duration-300"
          style={{ minHeight: "100vh", minWidth: "100vw" }}
          onClick={() => setMenuOpen(false)}
        >
          {/* Close Button - top right, position absolute */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white bg-[var(--color-secondary)] rounded-full p-2"
            aria-label="Close"
            style={{ boxShadow: "0 2px 10px rgba(0,0,0,.08)" }}
          >
            <XMarkIcon className="w-7 h-7" />
          </button>
          {/* Menu links, centered */}
          <nav className="flex flex-col gap-6 mt-28 w-full items-center">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-xl font-semibold px-8 py-4 rounded-lg hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-primary)] w-4/5 text-center transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onLoginClick && onLoginClick(); }}
              className="w-4/5 py-3 mt-4 border border-[var(--color-secondary)] text-[var(--color-secondary)] text-lg rounded-full font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition"
            >
              Login
            </button>
            <button
              onClick={() => { setMenuOpen(false); onRegisterClick && onRegisterClick(); }}
              className="w-4/5 py-3 bg-[var(--color-secondary)] text-[var(--color-on-primary)] text-lg font-bold rounded-full shadow mt-2 flex items-center gap-2 justify-center hover:bg-[var(--color-accent)] transition-all"
            >
              Register
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
