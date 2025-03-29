
import React, { useEffect, useState } from 'react';

interface TrailDot {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

const MouseTrailEffect = () => {
  const [dots, setDots] = useState<TrailDot[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Colors that match the site theme
  const colors = ['rgba(191, 148, 255, 0.7)', 'rgba(153, 102, 255, 0.5)', 'rgba(120, 80, 200, 0.3)'];
  
  useEffect(() => {
    // Function to handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create a new dot at the current mouse position
      const newDot = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 15 + 5,
        opacity: 0.7,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
      
      // Add the new dot to the trail and remove oldest dots if more than 10
      setDots(prevDots => {
        const updatedDots = [...prevDots, newDot];
        return updatedDots.slice(-10);
      });
    };
    
    // Add throttling to optimize performance
    let throttleTimeout: number | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (!throttleTimeout) {
        throttleTimeout = window.setTimeout(() => {
          handleMouseMove(e);
          throttleTimeout = null;
        }, 20); // Throttle to 50fps
      }
    };
    
    window.addEventListener('mousemove', throttledMouseMove);
    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);
  
  // Fade out and remove dots over time
  useEffect(() => {
    const fadeInterval = setInterval(() => {
      setDots(prevDots => 
        prevDots.map(dot => ({
          ...dot,
          opacity: dot.opacity > 0.1 ? dot.opacity - 0.05 : 0,
          size: dot.size > 2 ? dot.size - 1 : dot.size
        })).filter(dot => dot.opacity > 0)
      );
    }, 50);
    
    return () => clearInterval(fadeInterval);
  }, []);
  
  // Add a subtle glow effect around the current mouse position
  const cursorGlow = {
    position: 'fixed',
    pointerEvents: 'none',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(191, 148, 255, 0.3) 0%, rgba(191, 148, 255, 0) 70%)',
    transform: 'translate(-50%, -50%)',
    left: `${mousePosition.x}px`,
    top: `${mousePosition.y}px`,
    zIndex: 9999,
    filter: 'blur(5px)',
    transition: 'transform 0.05s ease-out'
  } as React.CSSProperties;

  return (
    <div className="mouse-trail-container">
      {/* Mouse glow effect */}
      <div style={cursorGlow} />
      
      {/* Trail dots */}
      {dots.map(dot => (
        <div
          key={dot.id}
          style={{
            position: 'fixed',
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            borderRadius: '50%',
            backgroundColor: dot.color,
            opacity: dot.opacity,
            pointerEvents: 'none',
            zIndex: 9998,
            filter: 'blur(2px)',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out'
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrailEffect;
