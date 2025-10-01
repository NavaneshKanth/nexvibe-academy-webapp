import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

// IMPORTANT: Your Formspree Endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblzovbb";

// Animation Variants (reused from the main page)
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  hover: { scale: 1.02 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Added phone field
    country: '', // Added country field
    message: '',
  });
  const [status, setStatus] = useState(null); // 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', country: '', message: '' }); // Clear all fields on success
      } else {
        const data = await response.json();
        // Extract error message from Formspree response
        const msg = data.errors 
          ? data.errors.map(err => err.message).join(', ') 
          : 'Failed to send message.';
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('An unexpected network error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-[var(--color-bg)] text-[var(--color-text-body)]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* FIX: Corrected closing tag from motion.h.2 to motion.h2 */}
        <motion.h2 className="text-4xl lg:text-5xl font-extrabold text-center text-[var(--color-text-header)] mb-12" variants={itemVariants}>
          Get In <span className="text-[var(--color-secondary)]">Touch</span>
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Info & Form */}
          <motion.div className="flex flex-col space-y-12" variants={containerVariants}>
            
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6 text-[var(--color-text-header)]">Contact Information</h3>
              <div className="flex flex-col space-y-6">
                <div className="flex items-center gap-4">
                  <MapPinIcon className="w-8 h-8 flex-shrink-0 text-[var(--color-secondary)]" />
                  <p className="text-lg text-[var(--color-text-body)]">Dubai, UAE</p>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="w-8 h-8 flex-shrink-0 text-[var(--color-secondary)]" />
                  <a
                    href="tel:+971522967505"
                    className="text-lg text-[var(--color-text-body)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    +971 52 296 7505 ( WhatsApp / Phone )
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <EnvelopeIcon className="w-8 h-8 flex-shrink-0 text-[var(--color-secondary)]" />
                  <a
                    href="mailto:nexvibeacademy@gmail.com"
                    className="text-lg text-[var(--color-text-body)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    nexvibeacademy@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="p-8 rounded-lg shadow-xl bg-[var(--color-bg-subtle)] border border-[var(--color-border)]"
              variants={itemVariants}
            >
              <h3 className="text-3xl font-bold mb-6 text-[var(--color-text-header)]">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
                  />
                </div>
                {/* Phone Number Input */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
                  />
                </div>
                {/* Country Input */}
                <div>
                  <label htmlFor="country" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
                  ></textarea>
                </div>
                
                {/* Submission Status Messages */}
                {status === 'success' && (
                  <div className="bg-green-100 text-green-800 p-3 rounded-lg font-medium shadow-md">
                    Message sent successfully! We'll be in touch soon.
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="bg-red-100 text-red-800 p-3 rounded-lg font-medium shadow-md">
                    Error: {errorMessage || 'Failed to send message. Please check your network.'}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full text-[var(--color-on-primary)] py-3 rounded-lg font-bold shadow-lg transition-all duration-300 transform active:scale-95
                    ${status === 'submitting' 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-[var(--color-secondary)] hover:bg-[var(--color-accent)]'
                    }`}
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Column: Google Map */}
          <motion.div
            className="w-full h-[400px] lg:h-full rounded-lg overflow-hidden shadow-2xl border border-[var(--color-border)] lg:sticky lg:top-12"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.6105740439683!2d55.27982181501174!3d25.26359568386616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f432742491a13%3A0x6b77202b28c2271c!2sDubai%20World%20Trade%20Centre%20-%20One%20Central%20-%20The%20Offices%204!5e0!3m2!1sen!2sae!4v1625907409249!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dubai Location Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
