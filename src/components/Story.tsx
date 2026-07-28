import React from 'react';
import { useReveal } from '../hooks/useReveal';

export default function Story() {
  const ref = useReveal();

  return (
    <section id="story" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div 
        ref={ref} 
        className="reveal-up-container grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Parchment Text Card */}
        <div className="reveal-story-left bg-[var(--color-parchment)] text-[var(--color-charcoal-base)] p-8 md:p-12 rounded-lg shadow-2xl relative order-2 md:order-1 overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-terracotta)] opacity-5 -rotate-45 translate-x-16 -translate-y-16"></div>
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
          <h2 className="text-4xl md:text-5xl mb-6 text-[var(--color-terracotta)] font-serif">The Story</h2>
          <p className="text-lg leading-relaxed mb-6 font-sans">
            Born from a desire to create a sanctuary for wandering souls, Kitaab Koffee is more than a café — it is a community space built by HouseTale. Nestled in the spiritual heart of Bodh Gaya, we wanted a place where the scent of old books mingles with freshly brewed coffee.
          </p>
          <p className="text-lg leading-relaxed font-sans mb-8">
            Whether you are camping under the stars, sharing poetry at our open mic nights, or simply seeking a quiet corner to read, this space belongs to those who seek calmness.
          </p>
          <div className="text-2xl text-[var(--color-forest)] font-script">
            - Welcome Home.
          </div>
        </div>

        {/* Brick Wall Photo Card */}
        <div className="reveal-story-right relative h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-2xl order-1 md:order-2 group">

          {/* Placeholder for actual brick wall photo, using a warm dark color as fallback */}
          <div className="absolute inset-0 bg-[#8c3b24] bg-opacity-80 mix-blend-multiply z-10 transition-opacity group-hover:opacity-60"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000")' }}
          ></div>
          
          {/* Carved Sign */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-64 h-24 bg-[#3D2B1F] flex items-center justify-center shadow-lg -rotate-2 border border-white/5">
            <span className="font-sans text-[var(--color-amber)] text-xl font-bold tracking-[0.3em] uppercase opacity-90">
              Kitaab Khana
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
