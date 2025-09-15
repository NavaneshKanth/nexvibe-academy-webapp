import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[var(--color-primary)]/90 py-12 text-[var(--color-text-body)]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between gap-y-12 md:gap-y-0 md:gap-x-12 text-center md:text-left">
          
          {/* Branding Section with Logo */}
          <div className="flex flex-col items-center md:items-start md:pr-8 flex-shrink-0">
            <img 
              src="/nexvibe_Institute_logo_dark_bg.png" 
              alt="Nexvibe Institute Logo" 
              className="h-28 sm:h-32 mb-4" // Use responsive height and more bottom margin
            />
            <p className="text-base text-[var(--color-text-body)] max-w-xs leading-relaxed opacity-80 mt-4">
              Empowering the next generation of traders with expert-led training and a vibrant community.
            </p>
            <p className="text-sm mt-6 text-[var(--color-text-muted)]">© 2024. All Rights Reserved.</p>
          </div>

          {/* Right-side content container */}
          <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-12 justify-around w-full">
            {/* Contact & Address Section */}
            <div className="flex flex-col items-center md:items-start flex-1">
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <address className="not-italic text-sm space-y-2 text-[var(--color-text-body)] opacity-80">
                <p>Business Bay, Dubai, UAE</p>
                <a href="mailto:nexvibeinstitute@gmail.com" className="block hover:underline">
                  nexvibeinstitute@gmail.com
                </a>
                <a href="tel:+971522967505" className="block hover:underline">
                  +971 52 296 7505
                </a>
              </address>
            </div>

            {/* Social Icons Section */}
            <div className="flex flex-col items-center md:items-start flex-1">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-secondary)] text-[var(--color-text-body)] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaFacebookF size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-secondary)] text-[var(--color-text-body)] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://wa.me/971522967505"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-secondary)] text-[var(--color-text-body)] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;