import React, { useState } from "react";
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
import TradingViewChart from "../../components/TradingViewChart";

function LandingPage() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isScreenerModalOpen, setIsScreenerModalOpen] = useState(false);
  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false); // Close the other modal
    setIsScreenerModalOpen(false); // Close the other modal
  };

  const handleCloseRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const handleOpenLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false); // Close the other modal
    setIsScreenerModalOpen(false); // Close the other modal
    setIsFaqModalOpen(false)
  };

  const handleCloseLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleOpenScreenerModal = () => {
    setIsScreenerModalOpen(true);
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
    setIsFaqModalOpen(false)
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
        <LazyLoadWidgetWrapper>
          <TradingViewChart />
        </LazyLoadWidgetWrapper>
        <WhyUs />
        <Testimonials />
        <Contact />
        <FinalCta onRegisterClick={handleOpenRegisterModal} />
      </main>
      <Footer />

      <FloatingScreenerButton onClick={handleOpenScreenerModal} />

      <FloatingButtons />
      <FloatingFaqButton onClick={handleOpenFaqModal} /> {/* Add the new button here */}
      {isRegisterModalOpen && <RegistrationModal isOpen={isRegisterModalOpen} onClose={handleCloseRegisterModal} />}
      {isLoginModalOpen && <LoginModal isOpen={isLoginModalOpen} onClose={handleCloseLoginModal} onRegisterClick={handleOpenRegisterModal} />}

      <MarketScreenerModal
        isOpen={isScreenerModalOpen}
        onClose={handleCloseScreenerModal}
      />
      <FaqModal isOpen={isFaqModalOpen} onClose={handleCloseFaqModal} />
    </>
  );
}

export default LandingPage;