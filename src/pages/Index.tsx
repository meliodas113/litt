
import React from "react";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import MouseTrailEffect from "@/components/MouseTrailEffect";
import BackgroundElements from "@/components/BackgroundElements";
import HeroSection from "@/components/HeroSection";
import AiSetupSection from "@/components/AiSetupSection";

const Index = () => {
  // Initialize scroll animations
  useScrollAnimation();

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <LegalNavbar />
      <MouseTrailEffect />
      <main className="flex-1 relative">
        {/* Background Elements */}
        <BackgroundElements />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* AI Setup Section */}
        <AiSetupSection />
      </main>
      <LegalFooter />
    </div>
  );
};

export default Index;
