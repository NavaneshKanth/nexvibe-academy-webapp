import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const RegistrationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    city: '',
    course: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would add code to send the form data to your server or email service
    onClose();
    alert('Thank you for registering! We will be in touch shortly.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 rounded-lg shadow-2xl bg-[var(--color-bg-subtle)] border border-[var(--color-border)] transform transition-all duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-body)] hover:text-[var(--color-secondary)] transition-colors"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>
        <h2 className="text-3xl font-bold text-center text-[var(--color-text-header)] mb-6">
          Register Now – Limited Seats
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
              WhatsApp Number
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
              City
            </label>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
              required
            >
              <option value="" disabled>Select your city</option>
              <option value="Dubai">Dubai</option>
              <option value="Sharjah">Sharjah</option>
              <option value="Abu Dhabi">Abu Dhabi</option>
              <option value="Ajman">Ajman</option>
              <option value="Other">Other (UAE)</option>
            </select>
          </div>
          <div>
            <span className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
              Select Course
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className="flex items-center gap-2 text-[var(--color-text-body)] cursor-pointer">
                <input
                  type="radio"
                  name="course"
                  value="Classroom"
                  checked={formData.course === 'Classroom'}
                  onChange={handleChange}
                  className="form-radio text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]"
                  required
                />
                Classroom Training
              </label>
              <label className="flex items-center gap-2 text-[var(--color-text-body)] cursor-pointer">
                <input
                  type="radio"
                  name="course"
                  value="Online"
                  checked={formData.course === 'Online'}
                  onChange={handleChange}
                  className="form-radio text-[var(--color-secondary)] focus:ring-[var(--color-secondary)]"
                  required
                />
                Online Training
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[var(--color-secondary)] text-[var(--color-on-primary)] py-3 rounded-lg font-bold shadow-lg hover:bg-[var(--color-accent)] transition-colors duration-300"
          >
            Book My Demo Class
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;