import React, { useEffect, useState } from 'react';

export const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated circles */}
      <div 
        className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * 0.1}px) translateX(${scrollY * 0.05}px)`,
        }}
      />
      <div 
        className="absolute top-40 right-20 w-24 h-24 bg-white/3 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.1}px)`,
        }}
      />
      <div 
        className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/4 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * 0.2}px) translateX(${scrollY * 0.08}px)`,
        }}
      />
      <div 
        className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/6 rounded-full blur-sm"
        style={{
          transform: `translateY(${scrollY * -0.12}px) translateX(${scrollY * 0.15}px)`,
        }}
      />
      
      {/* Floating lines */}
      <div 
        className="absolute top-1/4 left-1/2 w-px h-32 bg-white/10"
        style={{
          transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)`,
        }}
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-px h-24 bg-white/8"
        style={{
          transform: `translateY(${scrollY * -0.25}px) rotate(${scrollY * -0.05}deg)`,
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E3051B]/90 via-[#E3051B]/95 to-[#E3051B]/90" />
    </div>
  );
}; 