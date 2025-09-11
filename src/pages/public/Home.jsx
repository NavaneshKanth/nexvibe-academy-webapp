import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Navbar from "../../components/Navbar";

function Home() {
  return (
    <div className="bg-bg text-textBody">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative w-full min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover scale-x-[-1]"
        >
          <source src="/Hero4.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-primary/8"></div>
        <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-4 sm:px-8 md:px-16 lg:px-24">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 max-w-4xl text-left">
            <span className="text-white">Master the Art </span>{" "}
            <span className="text-[var(--color-secondary)]">of Trading in Dubai</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl text-white">
            Learn Forex, Gold & Crypto trading with expert guidance and real strategies
          </p>
          <a
            href="#final-cta"
            className="mt-8 bg-secondary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2"
          >
            Register Now – Limited Seats
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-12 lg:p-16">
            <h2 className="text-3xl font-bold text-text-header text-center mb-8">
              About Us
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-text-body text-center">
              This is the content for your "About Us" section. This card container ensures it has curvy edges, a white background, and is responsive across all devices without touching the screen edges.
            </p>
            {/* Add more content here as needed */}
          </div>
        </div>
      </section>

      {/* Course/Pricing Section */}
      <section id="courses" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-text-header text-center mb-10">Our Courses</h2>
          <p className="max-w-3xl mx-auto text-lg text-text-body text-center">
            ... content for courses/pricing ...
          </p>
        </div>
      </section>

      {/* What You Will Learn (Modules Summary) Section */}
      <section id="modules" className="py-20 bg-bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-text-header text-center mb-10">What You Will Learn</h2>
          <p className="max-w-3xl mx-auto text-lg text-text-body text-center">
            ... content for modules ...
          </p>
        </div>
      </section>

      {/* Exclusive Bonus Section */}
      <section id="bonus" className="py-20 bg-primary text-on-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Exclusive Bonus</h2>
          <h3 className="text-2xl font-bold text-[var(--color-secondary)] mb-8">Moneypit Gold Strategy</h3>
          <p className="max-w-3xl mx-auto text-lg">
            Unlock the secrets to our most profitable trading strategy, available only to our students. This exclusive bonus will give you the edge you need to succeed.
          </p>
          <a href="/register" className="mt-8 inline-block bg-secondary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2">
            Get the Bonus Now
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-text-header text-center mb-10">Why Choose Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-text-body text-center">
            ... content for why us ...
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-bg-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-text-header text-center mb-10">Testimonials</h2>
          <p className="max-w-3xl mx-auto text-lg text-text-body text-center">
            ... content for testimonials ...
          </p> 
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-text-header text-center mb-10">Get In Touch</h2>
          <p className="max-w-3xl mx-auto text-lg text-text-body text-center">
            ... content for contact form ...
          </p>
        </div>
      </section>

      {/* Final Call-to-Action Banner */}
      <section id="final-cta" className="py-20 bg-primary text-on-primary text-center">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Don't miss out on this life-changing opportunity. Enroll in our course and start building your financial future today.
          </p>
          <a href="/register" className=" bg-secondary text-on-primary px-10 py-4 rounded-full font-bold shadow-lg hover:bg-opacity-80 transition-colors flex items-center justify-center gap-2">
            Register Now
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;