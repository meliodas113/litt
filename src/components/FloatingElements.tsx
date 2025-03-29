
import React, { useEffect, useState } from 'react';
import { Star, Circle, Triangle, Moon, Sun } from 'lucide-react';

interface FloatingElement {
  id: number;
  icon: 'star' | 'circle' | 'triangle' | 'moon' | 'sun';
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  opacity: number;
  color: string;
  blur: number;
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  useEffect(() => {
    // Create floating elements with random properties
    const icons: ('star' | 'circle' | 'triangle' | 'moon' | 'sun')[] = ['star', 'circle', 'triangle', 'moon', 'sun'];
    
    // Colors that blend well with the purple/dark theme
    const colors = [
      'text-primary/20',
      'text-primary/30',
      'text-white/10',
      'text-white/15',
      'text-accent/20',
      'text-accent/15'
    ];
    
    // Create more elements (increased from 15 to 25)
    const newElements = Array(25).fill(0).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.random() * 30 + 10, // Increased max size
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 15 + 10, // Increased duration range for more varied movement
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.2 + 0.05, // Lower opacity range to blend better
      color: colors[Math.floor(Math.random() * colors.length)],
      blur: Math.random() > 0.5 ? Math.random() * 2 + 0.5 : 0 // Add blur to some elements
    }));
    
    setElements(newElements);
  }, []);
  
  const getIconComponent = (icon: string, size: number, color: string) => {
    const props = { size, className: color };
    
    switch(icon) {
      case 'star':
        return <Star {...props} />;
      case 'circle':
        return <Circle {...props} />;
      case 'triangle':
        return <Triangle {...props} />;
      case 'moon':
        return <Moon {...props} />;
      case 'sun':
        return <Sun {...props} />;
      default:
        return <Star {...props} />;
    }
  };
  
  return (
    <div className="floating-elements-container pointer-events-none absolute inset-0 overflow-hidden z-0">
      {elements.map(element => (
        <div
          key={element.id}
          className="absolute floating-element transition-opacity duration-1000"
          style={{
            top: `${element.top}%`,
            left: `${element.left}%`,
            opacity: element.opacity,
            animation: `float ${element.duration}s ease-in-out infinite ${element.delay}s, rotate ${element.duration * 1.5}s linear infinite ${element.delay}s`,
            transform: `rotate(${element.rotation}deg)`,
            zIndex: 5,
            filter: element.blur ? `blur(${element.blur}px)` : 'none',
          }}
        >
          {getIconComponent(element.icon, element.size, element.color)}
        </div>
      ))}
      
      {/* Add larger, more blurred background elements */}
      {Array(8).fill(0).map((_, i) => (
        <div
          key={`bg-${i}`}
          className="absolute transition-opacity duration-1000"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.07 + 0.02,
            width: `${Math.random() * 200 + 100}px`,
            height: `${Math.random() * 200 + 100}px`,
            borderRadius: '50%',
            background: `radial-gradient(circle, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--primary-rgb), 0) 70%)`,
            filter: `blur(${Math.random() * 30 + 10}px)`,
            animation: `float ${Math.random() * 30 + 20}s ease-in-out infinite ${Math.random() * 10}s`,
            zIndex: 2
          }}
        />
      ))}
      
      {/* Add subtle gradients that move very slowly */}
      {Array(5).fill(0).map((_, i) => (
        <div
          key={`gradient-${i}`}
          className="absolute rounded-full transition-opacity duration-1000"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.15 + 0.05,
            width: `${Math.random() * 300 + 200}px`,
            height: `${Math.random() * 300 + 200}px`,
            background: `linear-gradient(${Math.random() * 360}deg, rgba(var(--primary-rgb), 0.1) 0%, rgba(var(--accent-rgb), 0.05) 100%)`,
            filter: `blur(${Math.random() * 40 + 20}px)`,
            animation: `float ${Math.random() * 40 + 30}s ease-in-out infinite ${Math.random() * 10}s`,
            zIndex: 1
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
