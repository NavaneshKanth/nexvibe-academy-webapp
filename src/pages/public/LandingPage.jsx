import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Courses from "./sections/Courses";
import Modules from "./sections/Modules";
import Bonus from "./sections/Bonus";
import WhyUs from "./sections/WhyUs";
import Testimonials from "./sections/Testimonials";
import FinalCta from "./sections/FinalCta";
import Footer from "../../components/Footer";
import RegistrationModal from "../../components/RegistrationModal";
import LoginModal from "../../components/LoginModal";
import Contact from "./sections/Contact";
import TradingViewWidget from "../../components/TradingViewWidget";
import FloatingButtons from "../../components/FloatingButtons";
import LazyLoadWidgetWrapper from "../../components/LazyLoadWidgetWrapper";
import FloatingScreenerButton from "../../components/FloatingScreenerButton";
import MarketScreenerModal from "../../components/MarketScreenerModal";
import FloatingFaqButton from "../../components/FloatingFaqButton";
import FaqModal from "../../components/FaqModal";
import LearnTradeEarn from "../../components/LearnTradeEarn";

function LandingPage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScreenerModalOpen, setIsScreenerModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);

  // FIX: Scroll to the top of the page when the component first mounts.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this effect runs only once, when the component is first rendered.

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
    setIsScreenerModalOpen(false);
    setIsFaqModalOpen(false);
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
    setIsScreenerModalOpen(false);
    setIsFaqModalOpen(false);
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenScreenerModal = () => {
    setIsScreenerModalOpen(true);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
    setIsFaqModalOpen(false);
  };

  const handleCloseScreenerModal = () => {
    setIsScreenerModalOpen(false);
  };

  const handleOpenFaqModal = () => {
    setIsFaqModalOpen(true);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
    setIsScreenerModalOpen(false);
  };

  const handleCloseFaqModal = () => {
    setIsFaqModalOpen(false);
  };

  return (
    <>
      <Navbar
        onLoginClick={handleOpenLoginModal}
        onRegisterClick={handleOpenRegisterModal}
      />
      <main>
        <Hero onRegisterClick={handleOpenRegisterModal} />
        <LazyLoadWidgetWrapper height="50px">
          <TradingViewWidget />
        </LazyLoadWidgetWrapper>
        <LearnTradeEarn />
        <About />
        <Courses onRegisterClick={handleOpenRegisterModal} />
        <Modules />
        <Bonus onRegisterClick={handleOpenRegisterModal} />
        <WhyUs />
        <Testimonials />
        <Contact />
        <FinalCta onRegisterClick={handleOpenRegisterModal} />
      </main>
      <Footer />

      <FloatingScreenerButton onClick={handleOpenScreenerModal} />
      <FloatingButtons />
      <FloatingFaqButton onClick={handleOpenFaqModal} />
      
      {isRegisterModalOpen && <RegistrationModal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal} />}
      {isLoginModalOpen && <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} onRegisterClick={handleOpenRegisterModal} />}
      {isScreenerModalOpen && <MarketScreenerModal isOpen={isScreenerModalOpen} onClose={handleCloseScreenerModal} />}
      {isFaqModalOpen && <FaqModal isOpen={isFaqModalOpen} onClose={handleCloseFaqModal} />}
    </>
  );
}

export default LandingPage;