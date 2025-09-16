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
          className="fixed inset-0 z-50 bg-black/50 flex lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="w-72 max-w-full h-full bg-[var(--color-primary)] text-white flex flex-col py-4 px-4 gap-2 shadow-2xl relative"
            style={{
              minWidth: "200px",
            }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-bold">Menu</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-white p-1"
                aria-label="Close"
              >
                <XMarkIcon className="w-7 h-7" style={{ color: "var(--color-secondary)" }} />
              </button>
            </div>
            <div className="flex flex-col gap-1 mt-2">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base font-semibold rounded-lg px-2 py-2 hover:bg-[var(--color-secondary)] hover:text-[var(--color-on-primary)] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onLoginClick && onLoginClick(); }}
                className="mt-3 px-3 py-2 border border-[var(--color-secondary)] text-[var(--color-secondary)] rounded-full font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition"
              >
                Login
              </button>
              <button
                onClick={() => { setMenuOpen(false); onRegisterClick && onRegisterClick(); }}
                className="px-4 py-2 bg-[var(--color-secondary)] text-[var(--color-on-primary)] font-bold rounded-full shadow mt-2 flex items-center gap-2 hover:bg-[var(--color-accent)] transition-all"
              >
                Register
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex-1" />
        </div>
      )}
    </header>
  );
};

export default Navbar;
