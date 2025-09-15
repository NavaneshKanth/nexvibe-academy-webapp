import React from 'react';
import { AcademicCapIcon, ArrowTrendingUpIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

const features = [
  {
    icon: AcademicCapIcon,
    title: "Learn",
    description: "Master the fundamentals of market analysis and risk management with our expert-led guidance."
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Trade",
    description: "Apply proven strategies in real-time. Our mentorship gives you the confidence to execute trades with precision."
  },
  {
    icon: CurrencyDollarIcon,
    title: "Earn",
    description: "Turn your skills into consistent profits and achieve lasting financial independence through strategic trading."
  },
];

function LearnTradeEarn() {
  return (
    <section className="py-20 text-center bg-[var(--color-bg-light)] text-[var(--color-text-dark)]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-[var(--color-text-dark)]">
          Your Path to Trading Success
        </h2>
        <p className="text-xl mb-16 max-w-2xl mx-auto">
          We provide a clear roadmap from a beginner to a profitable trader.
        </p>

        {/* This container now holds both the elements and the connecting lines */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center flex-1 py-8">
                <feature.icon className="w-12 h-12 mb-6 text-[var(--color-accent-dark)]" />
                <h3 className="text-2xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="max-w-[300px]">
                  {feature.description}
                </p>
              </div>

              {/* Conditionally render the line div between elements */}
              {index < features.length - 1 && (
                <div className="h-px w-3/4 md:w-auto md:flex-1 bg-[var(--color-border-light)] hidden md:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearnTradeEarn;