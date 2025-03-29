
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import MouseTrailEffect from "@/components/MouseTrailEffect";
import BookRotationEffect from "@/components/BookRotationEffect";
import FloatingElements from "@/components/FloatingElements";
import AiSetupSection from "@/components/AiSetupSection";

const Index = () => {
  useScrollAnimation();
  
  // For heading typing animation
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = "LEGAL ADVICE WITHOUT BORDERS";
  
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

  // For floating decorative elements
  const [decorations, setDecorations] = useState<Array<{
    id: number;
    type: string;
    size: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
    rotate: boolean;
  }>>([]);

  useEffect(() => {
    // Create ambient particles
    const newParticles = Array(30).fill(0).map((_, i) => ({
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
    const newOrbs = Array(5).fill(0).map((_, i) => ({
      id: i,
      size: Math.random() * 500 + 300,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.1
    }));
    
    setOrbs(newOrbs);
    
    // Create decorative floating elements
    const types = ['paragraph', 'document', 'scale', 'gavel', 'courthouse'];
    const newDecorations = Array(8).fill(0).map((_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      size: Math.random() * 40 + 20,
      top: Math.random() * 80 + 10,
      left: Math.random() * 80 + 10,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * 5,
      rotate: Math.random() > 0.5
    }));
    
    setDecorations(newDecorations);
    
    // Improved smoother typing animation with faster delay
    let currentIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    
    const typeNextCharacter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
        
        // Reduced typing delay for faster animation
        const typingDelay = 80; // Faster typing speed
        typingTimeout = setTimeout(typeNextCharacter, typingDelay);
      } else {
        // Animation complete
        setIsTypingComplete(true);
      }
    };
    
    // Start typing with a shorter initial delay
    setTimeout(typeNextCharacter, 500);
    
    // Clean up timeouts if component unmounts during typing
    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <LegalNavbar />
      <MouseTrailEffect />
      <main className="flex-1 relative">
        {/* Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="grid-background"></div>
          <div className="vignette"></div>
          
          {/* Add grid lines */}
          <div className="background-grid">
            {/* Horizontal grid lines */}
            {[...Array(10)].map((_, i) => (
              <div 
                key={`h-${i}`} 
                className="grid-line grid-line-h" 
                style={{ top: `${i * 10}%` }}
              />
            ))}
            {/* Vertical grid lines */}
            {[...Array(10)].map((_, i) => (
              <div 
                key={`v-${i}`} 
                className="grid-line grid-line-v" 
                style={{ left: `${i * 10}%` }}
              />
            ))}
          </div>
          
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
          
          {/* Add the new floating elements component */}
          <FloatingElements />
        </div>
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center z-10 relative">
            {/* Left Content */}
            <div className="md:w-1/2 pt-20 md:pt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                <span className="typing-text">{displayedText}</span>
                <span className="cursor-blink">{fullText.length === displayedText.length ? "" : "|"}</span>
              </h1>
              
              {/* Subheading - only appears after typing is complete */}
              <div className={`transition-opacity duration-500 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-xl font-medium tracking-wide leading-relaxed">
                  Your AI legal assistant for navigating Indian law with confidence and clarity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/chat">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium px-8 py-6 flex items-center gap-2 hover:translate-y-[-2px] transition-all duration-300 interactive-glow">
                      <MessageSquare className="h-5 w-5" />
                      Start Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Right Animation - Book with floating elements */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
              <div className="relative perspective-container">
                {/* Add floating text bubbles around the book */}
                <div className="absolute -top-20 -left-16 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-xs animate-float" style={{animationDelay: "0.5s", animationDuration: "8s"}}>
                  <span className="text-primary/80">Legal Codes</span>
                </div>
                <div className="absolute top-40 -right-20 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-xs animate-float" style={{animationDelay: "1.8s", animationDuration: "7s"}}>
                  <span className="text-primary/80">Indian Law</span>
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-xs animate-float" style={{animationDelay: "1s", animationDuration: "6s"}}>
                  <span className="text-primary/80">Legal Assistance</span>
                </div>
                
                {/* Book component */}
                <BookRotationEffect />
                
                {/* More floating elements */}
                <div className="absolute top-20 -left-24 w-10 h-10 opacity-40 animate-float" style={{animationDelay: "0.2s", animationDuration: "9s"}}>
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/50 to-primary/10"></div>
                </div>
                <div className="absolute -top-10 right-10 w-8 h-8 opacity-40 animate-float" style={{animationDelay: "1.5s", animationDuration: "8s"}}>
                  <div className="w-full h-full backdrop-blur-sm rounded-lg bg-gradient-to-tr from-primary/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-10 right-0 w-12 h-12 opacity-30 animate-float" style={{animationDelay: "0.8s", animationDuration: "10s"}}>
                  <div className="w-full h-full rounded-full border border-primary/30 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Setup Section - Added new section here */}
        <AiSetupSection />
      </main>
      <LegalFooter />
    </div>
  );
};

export default Index;
