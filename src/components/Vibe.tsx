import React, { useEffect, useRef } from 'react';

const VIBE_DATA = [
  {
    src: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
    title: "The Bookstore",
    caption: "stacked spines, salvaged shelves"
  },
  {
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=800",
    title: "The Garden Path",
    caption: "fairy lights through the palms"
  },
  {
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    title: "Open Mic Nights",
    caption: "a guitar, a circle, a crowd"
  },
  {
    src: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800",
    title: "Camping Grounds",
    caption: "for the ones who stay till morning"
  }
];

export default function Vibe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.vibe-item.opacity-0');
            items.forEach((item, index) => {
              // Stagger animation based on index
              (item as HTMLElement).style.transitionDelay = prefersReducedMotion ? '0ms' : `${(index % 3) * 80 + Math.floor(index / 3) * 80}ms`;
              
              // Force reflow
              void (item as HTMLElement).offsetWidth;
              
              item.classList.remove('opacity-0', 'rotate-[4deg]', 'translate-y-8');
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <section id="vibe" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-16 max-w-3xl text-left">
        <span className="text-[var(--color-amber)] text-xs font-normal tracking-[0.3em] uppercase mb-4 block">
          The Vibe
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--color-parchment)] font-serif mb-6 leading-[1.2]">
          Every corner tells a chapter.
        </h2>
        <p className="font-sans text-lg md:text-xl text-[var(--color-parchment)] opacity-80 leading-relaxed max-w-2xl">
          Bookshelves built into brick, string-lit garden pathways, and a stage that opens up on open mic nights.
        </p>
      </div>

      <div ref={containerRef} className="masonry-grid">
        {VIBE_DATA.map((item, idx) => {
          // Add alternating base tilt per card
          const tilts = ['-rotate-1', 'rotate-[1.5deg]', '-rotate-[2deg]'];
          const finalTilt = tilts[idx % tilts.length];
          return (
            <div 
              key={idx} 
              className={`masonry-item vibe-item opacity-0 rotate-[4deg] translate-y-8 transition-all duration-[800ms] ease-out mb-4 md:mb-8 break-inside-avoid`}
            >
              <div className={`bg-[var(--color-parchment)] p-3 pb-6 md:p-5 md:pb-10 shadow-xl transform transition-transform duration-500 hover:-translate-y-2 cursor-pointer ${finalTilt} hover:rotate-0`}>
                <div className="relative aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110F]/90 via-[#14110F]/20 to-transparent z-10 pointer-events-none"></div>
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover relative z-0"
                    loading="lazy"
                  />
                  <h3 className="absolute bottom-3 left-3 md:bottom-5 md:left-5 z-20 text-white font-serif text-base md:text-2xl pr-4 leading-snug drop-shadow-md">
                    {item.title.split(' ').map((word, i) => (
                      <React.Fragment key={i}>
                        {word}{i !== item.title.split(' ').length - 1 && (item.title === 'Open Mic Nights' && i === 1 ? <br /> : ' ')}
                      </React.Fragment>
                    ))}
                  </h3>
                </div>
                <p className="text-[#2A1A13] font-script text-lg md:text-2xl text-center mt-3 md:mt-5 px-1 leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

