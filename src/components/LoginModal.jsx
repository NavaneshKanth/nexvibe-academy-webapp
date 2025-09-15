import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

const LoginModal = ({ isOpen, onClose, onRegisterClick }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', formData);
    // Add your login authentication logic here
    onClose();
    alert('Login successful! Welcome back.');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 rounded-lg shadow-2xl bg-[var(--color-bg-subtle)] border border-[var(--color-border)]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[var(--color-text-body)] hover:text-[var(--color-secondary)] transition-colors"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>
        <h2 className="text-3xl font-bold text-center text-[var(--color-text-header)] mb-6">
          Log In to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            <label htmlFor="password" className="block text-sm font-medium mb-2 text-[var(--color-text-body)]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-black/30 border border-[var(--color-border)] text-[var(--color-text-body)] focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] transition-colors"
              required
            />
          </div>
          <a href="#" className="text-sm font-semibold text-[var(--color-secondary)] hover:underline">
            Forgot Password?
          </a>
          <button
            type="submit"
            className="w-full bg-[var(--color-secondary)] text-[var(--color-on-primary)] py-3 rounded-lg font-bold shadow-lg hover:bg-[var(--color-accent)] transition-colors duration-300"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[var(--color-text-body)]">
          Don't have an account?{" "}
          <button
            onClick={onRegisterClick}
            className="text-[var(--color-secondary)] font-semibold hover:underline"
          >
            Register Now
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;