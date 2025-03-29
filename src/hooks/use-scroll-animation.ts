
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  const [elements, setElements] = useState<Element[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  
  // Track scroll position for parallax effects
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Handle scroll for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set up intersection observer for animations
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation classes when element comes into view
          entry.target.classList.add('animate-running');
          entry.target.classList.add('opacity-100');
          
          // Get any custom delay from data attribute
          const delayAttr = entry.target.getAttribute('data-delay');
          if (delayAttr && entry.target instanceof HTMLElement) {
            entry.target.style.animationDelay = `${delayAttr}s`;
          }
          
          // Don't unobserve to allow re-animation when scrolling back up
          // Instead, add a class that tracks that this has been seen
          entry.target.classList.add('has-animated');
        }
      });
    }, { 
      threshold: 0.15,  // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -10% 0px' // Trigger slightly before element enters viewport
    });

    // Find all elements that need animation
    const scrollAnimationItems = document.querySelectorAll('.scroll-animation-item');
    const parallaxItems = document.querySelectorAll('.parallax-element');
    
    setElements(Array.from([...scrollAnimationItems, ...parallaxItems]));
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    elements.forEach(el => {
      el.classList.add('animate-paused');
      observer.current?.observe(el);
    });
    
    // Apply parallax effect to elements
    const parallaxElements = document.querySelectorAll('.parallax-element');
    parallaxElements.forEach((el) => {
      const speedAttr = el.getAttribute('data-speed');
      const speed = speedAttr ? parseFloat(speedAttr) : 0.1;
      const yPos = -(scrollY * speed);
      if (el instanceof HTMLElement) {
        el.style.transform = `translateY(${yPos}px)`;
      }
    });
    
    // Apply rotation to 3D elements
    const rotateElements = document.querySelectorAll('.rotate-on-scroll');
    rotateElements.forEach((el) => {
      const rotateSpeed = el.getAttribute('data-rotate-speed') || '0.02';
      const rotate = scrollY * parseFloat(rotateSpeed);
      if (el instanceof HTMLElement) {
        el.style.transform = `rotateY(${rotate}deg)`;
      }
    });
    
  }, [elements, scrollY]);

  return null;
}
