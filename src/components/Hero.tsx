import React, { useEffect, useState } from 'react';
import heroWebp from '../assets/images/hero.webp';
import heroJpg from '../assets/images/hero.jpg';
import heroPng from '../assets/images/hero.png';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure CSS classes apply properly for animation
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
  const isAnimated = mounted || prefersReducedMotion;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[var(--color-charcoal-base)]">
      {/* Background Image */}
      <img 
        src={heroWebp}
        alt="Kitaab Koffee"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        onError={(e) => {
          const target = e.currentTarget;
          if (target.src !== heroJpg) {
            target.src = heroJpg;
          } else if (target.src !== heroPng) {
            target.src = heroPng;
          } else {
            target.src = './images/hero.webp';
          }
        }}
      />
      
      {/* Overlay Gradients */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#14110F]/90 via-[#14110F]/50 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal-base)] via-transparent to-transparent z-0"></div>

      {/* Hanging Bulbs */}
      <div className="absolute top-0 left-0 w-full flex justify-around px-10 md:px-32 z-10 pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <div 
            key={i} 
            className={`w-6 h-6 rounded-full bg-[var(--color-amber)] hanging-bulb relative transition-all duration-1000 ${isAnimated ? 'opacity-90 glow-amber' : 'opacity-0 glow-none'}`}
            style={{ 
              transitionDelay: prefersReducedMotion ? '0ms' : `${i * 150}ms`,
              boxShadow: isAnimated ? '0 0 20px 5px rgba(232,169,76,0.6)' : 'none',
              transform: isAnimated ? 'translateY(0)' : 'translateY(-10px)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center items-start">
        <div className="max-w-xl text-left mt-20">
          <div 
            className={`flex flex-col gap-2 mb-6 text-[var(--color-amber)] font-sans uppercase tracking-[0.3em] font-normal text-xs md:text-sm drop-shadow-md transition-all duration-1000 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '900ms' }}
          >
            <span>A Little Corner</span>
            <span>Full Of</span>
          </div>
          
          <h1 
            className={`text-6xl md:text-7xl lg:text-[6.5rem] font-serif text-[var(--color-parchment)] mb-8 leading-[1.05] tracking-[-0.02em] drop-shadow-xl transition-all duration-1000 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
            style={{ 
              textShadow: '2px 4px 10px rgba(0,0,0,0.8)',
              transitionDelay: prefersReducedMotion ? '0ms' : '1000ms'
            }}
          >
            Stories,<br/>Coffee &<br/><span className="italic font-normal">Good Souls.</span>
          </h1>
          
          <div 
            className={`w-20 h-[2px] bg-[var(--color-amber)] mb-8 opacity-80 shadow-[0_0_8px_rgba(232,169,76,0.6)] transition-all duration-1000 ${isAnimated ? 'w-20 opacity-80' : 'w-0 opacity-0'}`}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '1200ms' }}
          ></div>
          
          <p 
            className={`font-script text-2xl md:text-3xl text-[var(--color-parchment)] mb-12 opacity-90 leading-relaxed max-w-[320px] drop-shadow-md transition-all duration-1000 transform ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '1200ms' }}
          >
            Books to read, people to meet and moments to remember.
          </p>
          
          <a 
            href="#find-us"
            className={`group inline-flex items-center gap-4 px-8 py-4 border border-[var(--color-amber)] text-[var(--color-amber)] rounded-md font-sans tracking-[0.2em] uppercase text-xs md:text-sm hover:bg-[var(--color-amber)] hover:text-[var(--color-charcoal-base)] transition-all duration-1000 backdrop-blur-sm bg-black/20 hover:shadow-[0_0_20px_rgba(232,169,76,0.4)] transform ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            style={{ transitionDelay: prefersReducedMotion ? '0ms' : '1500ms' }}
          >
            <span className="font-semibold">Visit Us</span>
            <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
