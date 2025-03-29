
import React, { useRef, useEffect } from 'react';
import { Scale } from 'lucide-react';
import { useMousePosition } from './MouseTrailEffect';

const BookRotationEffect = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const bookContainerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  
  useEffect(() => {
    const updateBookRotation = () => {
      if (!bookRef.current || !bookContainerRef.current) return;
      
      const bookRect = bookContainerRef.current.getBoundingClientRect();
      const bookCenterX = bookRect.left + bookRect.width / 2;
      const bookCenterY = bookRect.top + bookRect.height / 2;
      
      // Calculate the relative position of the mouse to the book center
      const mouseX = mousePosition.x - bookCenterX;
      const mouseY = mousePosition.y - bookCenterY;
      
      // Calculate rotation angles based on mouse position
      // Limit rotation to a reasonable range (-15 to 15 degrees)
      const maxRotation = 15;
      // Invert Y for natural tilt (mouse above = tilt back)
      const rotateX = Math.max(Math.min(-mouseY / 20, maxRotation), -maxRotation);
      const rotateY = Math.max(Math.min(mouseX / 20, maxRotation), -maxRotation);
      
      // Apply the rotation to the book
      bookRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    window.addEventListener('mousemove', updateBookRotation);
    
    return () => {
      window.removeEventListener('mousemove', updateBookRotation);
    };
  }, [mousePosition]);
  
  return (
    <div ref={bookContainerRef} className="book-container relative">
      <div 
        ref={bookRef} 
        className="book transition-transform" 
        style={{ transformStyle: 'preserve-3d', transformOrigin: 'center center' }}
      >
        <div className="glow-effect"></div>
        <div className="book-cover flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm border border-white/10 shadow-xl cursor-responsive" style={{ width: "240px", height: "320px" }}>
          <Scale className="text-white h-20 w-20 opacity-90" />
        </div>
        <div className="book-page absolute top-2 left-2 bg-white/5 backdrop-blur-sm border border-white/5" style={{ width: "230px", height: "310px", transform: "translateZ(-5px)" }}></div>
        <div className="book-page absolute top-4 left-4 bg-white/5 backdrop-blur-sm border border-white/5" style={{ width: "220px", height: "300px", transform: "translateZ(-10px)" }}></div>
      </div>
    </div>
  );
};

export default BookRotationEffect;
