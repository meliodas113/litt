
import React, { useEffect, useState } from "react";
import FloatingElements from "@/components/FloatingElements";

interface Particle {
  id: number;
  size: number;
  opacity: number;
  top: number;
  left: number;
  duration: number;
  delay: number;
}

interface Orb {
  id: number;
  size: number;
  top: number;
  left: number;
  opacity: number;
}

const BackgroundElements = () => {
  // For ambient background particles
  const [particles, setParticles] = useState<Particle[]>([]);
  
  // For glowing background orbs
  const [orbs, setOrbs] = useState<Orb[]>([]);

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
    
  }, []);

  return (
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
      
      {/* Add the floating elements component */}
      <FloatingElements />
    </div>
  );
};

export default BackgroundElements;
