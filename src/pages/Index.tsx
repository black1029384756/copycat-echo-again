
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SectorsSection from "@/components/SectorsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PartnersSection from "@/components/PartnersSection";
import ProgramStructure from "@/components/ProgramStructure";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}
      <div className={`transition-all duration-500 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <HeroSection />
        <SectorsSection />
        <WhyChooseSection />
        <PartnersSection />
        <ProgramStructure />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
