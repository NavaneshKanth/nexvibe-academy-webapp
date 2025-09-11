import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Course", href: "#courses" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  // Close menu on resize for a better user experience
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] lg:w-[80%] z-50">
      <div className="bg-white/30 backdrop-blur-xl rounded-full shadow-xl border border-[--color-border] px-6 lg:px-8 py-3 flex items-center justify-between transition-all duration-500">
        {/* Logo */}
        <a href="#home" className="text-[--color-primary] font-bold text-2xl hover:scale-105 transition-transform">
          Nexvibe
        </a>

        {/* Desktop Menu and Buttons */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[--color-text-body] hover:text-[--color-secondary] font-medium transition-colors relative group">
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[--color-secondary] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <div className="flex items-center gap-3 ml-6">
            <a href="/login" className="px-4 py-2 rounded-full border border-[--color-primary] text-[--color-primary] font-medium hover:bg-[--color-primary] hover:text-white transition-colors duration-300">
              Login
            </a>
            <a href="/register" className="px-5 py-2 rounded-full bg-[--color-primary] text-white font-medium shadow-lg hover:shadow-2xl hover:bg-[--color-secondary] transition-colors duration-300 flex items-center gap-1">
              Register
              <ChevronRightIcon className="w-4 h-4" />
            </a>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-[--color-primary] z-50 focus:outline-none" aria-label="Toggle mobile menu">
          {isOpen ? <XMarkIcon className="w-8 h-8" /> : <Bars3Icon className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`fixed top-0 left-0 h-full w-full bg-white/50 backdrop-blur-xl flex flex-col justify-center items-center transition-transform duration-500 ease-in-out transform md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={toggleMenu} className="absolute top-6 right-8 text-[--color-primary] focus:outline-none" aria-label="Close mobile menu">
          <XMarkIcon className="w-8 h-8" />
        </button>
        <div className="flex flex-col space-y-8 text-center text-3xl font-semibold">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-[--color-text-body] hover:text-[--color-secondary] transition-colors" onClick={handleLinkClick}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4 mt-8 px-8 w-full max-w-xs">
          <a href="/login" className="px-4 py-2 text-center rounded-full border border-[--color-primary] text-[--color-primary] font-medium hover:bg-[--color-primary] hover:text-white transition-colors duration-300" onClick={handleLinkClick}>
            Login
          </a>
          <a href="/register" className="px-5 py-2 text-center rounded-full bg-[--color-primary] text-white font-medium shadow-lg hover:shadow-2xl hover:bg-[--color-secondary] transition-colors duration-300" onClick={handleLinkClick}>
            Register
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;