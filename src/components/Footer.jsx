import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[var(--color-primary)]/90 py-12 text-[var(--color-text-body)]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-y-0 text-center md:text-left md:divide-x md:divide-[var(--color-border)]/50">
          {/* Branding Section */}
          <div className="flex flex-col items-center md:items-start pr-8">
            <h3 className="text-2xl font-bold">Nexvibe</h3>
            <p className="text-base mt-4 max-w-xs leading-relaxed">
              Empowering the next generation of traders with expert-led training and a vibrant community.
            </p>
            <p className="text-sm mt-4 text-[var(--color-text-muted)]">© 2024. All Rights Reserved.</p>
          </div>

          {/* Contact & Address Section */}
          <div className="flex flex-col items-center md:items-start px-8">
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <address className="not-italic text-sm space-y-2">
              <p>2802 28th Floor, The Prism Towers</p>
              <p>Business Bay, Dubai, UAE</p>
            </address>
          </div>

          {/* Social Icons Section */}
          <div className="flex flex-col items-center md:items-start pl-8">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-secondary)] text-[var(--color-text-body)] hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-secondary)] text-[var(--color-text-body)] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://wa.me/yourphonenumber"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[var(--color-bg-subtle)] hover:bg-[var(--color-secondary)] text-[var(--color-text-body)] hover:text-white transition-all duration-300"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;