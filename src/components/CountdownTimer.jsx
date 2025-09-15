import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center text-center gap-4">
      {Object.keys(timeLeft).map((unit) => (
        <motion.div
          key={unit}
          className="bg-[var(--color-bg-subtle)] p-4 rounded-lg shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Using a light color for readability on the dark background */}
          <span className="block text-4xl font-bold text-[var(--color-text-body)]">
            {timeLeft[unit] < 10 ? `0${timeLeft[unit]}` : timeLeft[unit]}
          </span>
          <span className="block text-xs uppercase mt-1 text-[var(--color-text-muted)]">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;