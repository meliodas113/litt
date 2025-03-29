
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { MessageSquare, ArrowRight, BookOpen, Scale } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Index = () => {
  useScrollAnimation();
  
  // For ambient background particles
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    opacity: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
  }>>([]);
  
  // For glowing background orbs
  const [orbs, setOrbs] = useState<Array<{
    id: number;
    size: number;
    top: number;
    left: number;
    opacity: number;
  }>>([]);

  useEffect(() => {
    // Create ambient particles
    const newParticles = Array(20).fill(0).map((_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      opacity: Math.random() * 0.15 + 0.05,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 20,
      delay: Math.random() * 10
    }));
    
    setParticles(newParticles);
    
    // Create glowing orbs for background
    const newOrbs = Array(3).fill(0).map((_, i) => ({
      id: i,
      size: Math.random() * 500 + 300,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.1
    }));
    
    setOrbs(newOrbs);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <LegalNavbar />
      <main className="flex-1 relative">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="grid-background"></div>
          <div className="vignette"></div>
          
          {/* Glowing orbs */}
          {orbs.map(orb => (
            <div 
              key={orb.id}
              className="glow-orb"
              style={{
                width: `${orb.size}px`,
                height: `${orb.size}px`,
                top: `${orb.top}%`,
                left: `${orb.left}%`,
                opacity: orb.opacity
              }}
            ></div>
          ))}
          
          {/* Ambient particles */}
          {particles.map(particle => (
            <div 
              key={particle.id}
              className="ambient-particle"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                opacity: particle.opacity,
                animation: `bookFloat ${particle.duration}s ease-in-out infinite ${particle.delay}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center z-10 relative">
            {/* Left Content */}
            <div className="md:w-1/2 pt-20 md:pt-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                LEGAL <span className="text-accent">ADVICE</span> WITHOUT BORDERS
              </h1>
              <p className="text-lg md:text-xl mb-10 text-gray-300 max-w-xl">
                Your AI legal assistant for navigating Indian law with confidence and clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/chat">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium px-8 py-6 flex items-center gap-2 hover:translate-y-[-2px] transition-all duration-300">
                    <MessageSquare className="h-5 w-5" />
                    Start Consultation
                  </Button>
                </Link>
                <Link to="/chat">
                  <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 rounded-full font-medium px-8 py-6 flex items-center hover:translate-y-[-2px] transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Right Animation - Legal Scales */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
              <div className="relative">
                <div className="book-container">
                  <div className="book">
                    <div className="glow-effect"></div>
                    <div className="book-cover flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-white/10 shadow-xl" style={{ width: "240px", height: "320px" }}>
                      <Scale className="text-white h-20 w-20 opacity-90" />
                    </div>
                    <div className="book-page absolute top-2 left-2 bg-white/5 backdrop-blur-sm border border-white/5" style={{ width: "230px", height: "310px", transform: "translateZ(-5px)" }}></div>
                    <div className="book-page absolute top-4 left-4 bg-white/5 backdrop-blur-sm border border-white/5" style={{ width: "220px", height: "300px", transform: "translateZ(-10px)" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </div>
  );
};

export default Index;
