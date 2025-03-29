
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation() {
  const [elements, setElements] = useState<Element[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-running');
          observer.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const scrollAnimationItems = document.querySelectorAll('.scroll-animation-item');
    setElements(Array.from(scrollAnimationItems));
    
    return () => observer.current?.disconnect();
  }, []);

  useEffect(() => {
    elements.forEach(el => {
      el.classList.add('animate-paused');
      observer.current?.observe(el);
    });
  }, [elements]);

  return null;
}
