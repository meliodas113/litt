
import React, { useRef, useEffect, useState } from 'react';
import { Scale } from 'lucide-react';

const BookRotationEffect = () => {
  const bookRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 10, y: -15 }); // Default tilt values
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bookRef.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      
      // Calculate center of the element
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate how far the mouse is from the center (as a percentage of the window)
      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;
      
      // Limit the rotation (adjust these values to control the rotation amount)
      const maxRotation = 20;
      const rotateY = Math.max(Math.min(mouseX / 10, maxRotation), -maxRotation);
      // Invert Y axis for natural tilt (mouse above = tilt back)
      const rotateX = Math.max(Math.min(-mouseY / 10, maxRotation), -maxRotation);
      
      // Update rotation state - maintain a base tilt and add mouse-based rotation
      setRotation({
        x: 10 + rotateX, // Add to default tilt
        y: -15 + rotateY  // Add to default tilt
      });
    };
    
    const resetRotation = () => {
      // Reset to default tilted position when mouse leaves
      setRotation({ x: 10, y: -15 });
    };

    // Add continuous rotation animation using requestAnimationFrame
    let animationFrameId: number;
    let angle = 0;
    
    const animateRotation = () => {
      if (!bookRef.current || !containerRef.current) return;
      
      // Only apply the continuous rotation when mouse is not interacting
      if (!containerRef.current.matches(':hover')) {
        angle += 0.005; // Speed of rotation
        
        // Create gentle oscillating rotation effect
        const oscillateX = Math.sin(angle) * 5;
        const oscillateY = Math.cos(angle) * 5;
        
        setRotation({
          x: 10 + oscillateX, 
          y: -15 + oscillateY
        });
      }
      
      animationFrameId = requestAnimationFrame(animateRotation);
    };
    
    // Start the animation
    animateRotation();

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    containerRef.current?.addEventListener('mouseleave', resetRotation);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeEventListener('mouseleave', resetRotation);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="book-container relative">
      <div 
        ref={bookRef} 
        className="book" 
        style={{ 
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
        }}
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
