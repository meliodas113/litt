
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
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  useEffect(() => {
    // Create floating elements with random properties
    const icons: ('star' | 'circle' | 'triangle' | 'moon' | 'sun')[] = ['star', 'circle', 'triangle', 'moon', 'sun'];
    const newElements = Array(15).fill(0).map((_, i) => ({
      id: i,
      icon: icons[Math.floor(Math.random() * icons.length)],
      size: Math.random() * 20 + 10,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      rotation: Math.random() * 360,
      opacity: Math.random() * 0.3 + 0.1
    }));
    
    setElements(newElements);
  }, []);
  
  const getIconComponent = (icon: string, size: number) => {
    const props = { size, className: "text-primary/30" };
    
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
          className="absolute floating-element"
          style={{
            top: `${element.top}%`,
            left: `${element.left}%`,
            opacity: element.opacity,
            animation: `float ${element.duration}s ease-in-out infinite ${element.delay}s, rotate ${element.duration * 1.5}s linear infinite ${element.delay}s`,
            transform: `rotate(${element.rotation}deg)`,
            zIndex: 5
          }}
        >
          {getIconComponent(element.icon, element.size)}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
