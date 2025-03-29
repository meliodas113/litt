
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import LegalNavbar from "@/components/LegalNavbar";
import LegalFooter from "@/components/LegalFooter";
import { MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import MouseTrailEffect from "@/components/MouseTrailEffect";
import BookRotationEffect from "@/components/BookRotationEffect";

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
    
    // Improved smooth typing animation
    let currentIndex = 0;
    let typingTimeout: NodeJS.Timeout;
    
    const typeNextCharacter = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.substring(0, currentIndex));
        currentIndex++;
        
        // Consistent timing for smoother animation
        const typingDelay = 120; // consistent delay for smoother appearance
        typingTimeout = setTimeout(typeNextCharacter, typingDelay);
      } else {
        // Animation complete
        setIsTypingComplete(true);
      }
    };
    
    // Start typing with a consistent initial delay
    setTimeout(typeNextCharacter, 800);
    
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">
                <span className="typing-text">{displayedText}</span>
                <span className="cursor-blink">{fullText.length === displayedText.length ? "" : "|"}</span>
              </h1>
              
              {/* Subheading - only appears after typing is complete */}
              <div className={`transition-opacity duration-500 ${isTypingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-sm md:text-md mb-10 text-gray-300 max-w-xl">
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
            
            {/* Right Animation - Book with mouse rotation effect */}
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center items-center">
              <div className="relative">
                <BookRotationEffect />
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
