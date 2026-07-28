import React, { useEffect, useRef, useState } from 'react';

// Alternating rotations for a candid scrapbook feel
const ROTATIONS = [
  '-rotate-2',
  'rotate-1',
  '-rotate-[1.5deg]',
  'rotate-[2deg]',
  '-rotate-1',
  'rotate-[1.5deg]'
];

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'scale-[0.85]');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = containerRef.current?.querySelectorAll('.reveal-gallery.opacity-0');
    elements?.forEach((el, index) => {
      // Stagger animation based on index
      (el as HTMLElement).style.transitionDelay = prefersReducedMotion ? '0ms' : `${(index % 4) * 80 + Math.floor(index / 4) * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [showAll]);

  const totalImages = 12;
  const initialImages = 8; // 2 rows on desktop
  const displayCount = showAll ? totalImages : initialImages;


  return (
    <section id="gallery" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 max-w-3xl text-left">
        <span className="text-[var(--color-amber)] text-xs font-normal tracking-[0.3em] uppercase mb-4 block">
          Inside The Café
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-parchment)] font-serif mb-6 leading-[1.2]">
          A visual diary.
        </h2>
        <p className="font-sans text-lg md:text-xl text-[var(--color-parchment)] opacity-80 leading-relaxed max-w-2xl">
          Moments, spaces, and stories captured in time.
        </p>
      </div>

      <div 
        ref={containerRef} 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
      >
        {Array.from({ length: displayCount }).map((_, idx) => {
          const rotationClass = ROTATIONS[idx % ROTATIONS.length];
          return (
            <div 
              key={idx} 
              className={`reveal-gallery opacity-0 scale-[0.85] transition-all duration-700 ease-out`}
            >
              <div 
                className={`bg-[var(--color-charcoal-light)] rounded-md shadow-[0_8px_16px_rgba(0,0,0,0.3)] transform transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] cursor-pointer ${rotationClass}`}
              >
                <div className="aspect-[4/5] rounded-md overflow-hidden relative">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  {/* To use actual images, uncomment and replace the div above: */}
                  {/* <img src="YOUR_IMAGE_URL" alt="Gallery Photo" className="w-full h-full object-cover" loading="lazy" /> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {!showAll && (
        <div className="mt-16 text-center">
          <button 
            onClick={() => setShowAll(true)}
            className="group inline-flex items-center gap-4 px-8 py-4 border border-[var(--color-amber)] text-[var(--color-amber)] rounded-md font-sans tracking-[0.2em] uppercase text-xs md:text-sm hover:bg-[var(--color-amber)] hover:text-[var(--color-charcoal-base)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,169,76,0.4)]"
          >
            <span className="font-semibold">View More</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
