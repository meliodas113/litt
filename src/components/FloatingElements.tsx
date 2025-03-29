
import React, { useEffect, useState } from 'react';
import { Scale, Gavel, BookOpen, Scroll } from 'lucide-react';

interface FloatingElement {
  id: number;
  icon: 'scale' | 'gavel' | 'book' | 'scroll';
  size: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
  rotation: number;
  opacity: number;
  color: string;
  blur: number;
  type: 'icon' | 'text' | 'gradient';
}

const FloatingElements = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);
  
  // Define legal terms inside the component
  const legalTerms = [
    'Justice',
    'Law',
    'Rights',
    'Constitution',
    'Legal Aid',
    'Counsel'
  ];
  
  useEffect(() => {
    const icons: FloatingElement['icon'][] = ['scale', 'gavel', 'book', 'scroll'];
    
    const colors = [
      'text-primary/30',
      'text-white/15',
      'text-accent/20',
      'text-primary-foreground/20'
    ];
    
    const newElements: FloatingElement[] = [
      // Legal Icons
      ...Array(15).fill(0).map((_, i) => ({
        id: i,
        icon: icons[Math.floor(Math.random() * icons.length)],
        size: Math.random() * 40 + 20,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 20 + 15,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        blur: Math.random() > 0.5 ? Math.random() * 3 + 1 : 0,
        type: 'icon' as const
      })),
      
      // Legal Terms as Floating Text
      ...Array(10).fill(0).map((_, i) => ({
        id: i + 100,
        icon: 'book' as const,
        size: Math.random() * 30 + 15,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 25 + 20,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.2 + 0.05,
        color: 'text-white/20',
        blur: Math.random() * 2,
        type: 'text' as const
      }))
    ];
    
    setElements(newElements);
  }, []);
  
  const getIconComponent = (element: FloatingElement) => {
    const props = { 
      size: element.size, 
      className: `${element.color} opacity-70 hover:opacity-100 transition-opacity` 
    };
    
    if (element.type === 'text') {
      return (
        <div 
          className={`text-xs font-medium ${element.color} tracking-wider`}
          style={{ textShadow: '0 0 5px rgba(255,255,255,0.2)' }}
        >
          {legalTerms[Math.floor(Math.random() * legalTerms.length)]}
        </div>
      );
    }
    
    switch(element.icon) {
      case 'scale': return <Scale {...props} />;
      case 'gavel': return <Gavel {...props} />;
      case 'book': return <BookOpen {...props} />;
      case 'scroll': return <Scroll {...props} />;
      default: return <Scale {...props} />;
    }
  };
  
  return (
    <div className="floating-elements-container pointer-events-none absolute inset-0 overflow-hidden z-0">
      {elements.map(element => (
        <div
          key={element.id}
          className="absolute floating-element transition-all duration-1000"
          style={{
            top: `${element.top}%`,
            left: `${element.left}%`,
            opacity: element.opacity,
            animation: `float ${element.duration}s ease-in-out infinite ${element.delay}s, 
                        rotate ${element.duration * 1.5}s linear infinite ${element.delay}s`,
            transform: `rotate(${element.rotation}deg)`,
            zIndex: 5,
            filter: element.blur ? `blur(${element.blur}px)` : 'none',
          }}
        >
          {getIconComponent(element)}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
