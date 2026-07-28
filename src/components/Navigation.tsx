import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const LINKS = [
  { label: 'Bookstore', href: '#story', rotate: '-rotate-2' },
  { label: 'Gallery', href: '#gallery', rotate: 'rotate-1' },
  { label: 'The Vibe', href: '#vibe', rotate: 'rotate-2' },
  { label: 'Open Mic', href: '#vibe', rotate: '-rotate-1' },
  { label: 'Camping', href: '#vibe', rotate: 'rotate-3' },
  { label: 'Find Us', href: '#find-us', rotate: '-rotate-2' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const prefersReducedMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
  const isAnimated = mounted || prefersReducedMotion;

  const NavItems = () => (
    <div className="flex flex-col items-center gap-4 relative">
      {/* Wooden pole */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-4 bg-[#3E2723] rounded-t-sm z-0 shadow-inner" style={{ minHeight: '120%' }}></div>
      
      {LINKS.map((link, i) => (
        <a
          key={i}
          href={link.href}
          onClick={() => setIsOpen(false)}
          className={`relative z-10 w-44 py-2 px-4 text-[#E8A94C] font-serif text-center text-[11px] font-bold uppercase tracking-widest transition-all duration-700 ease-out wood-plank hover:rotate-0 cursor-pointer ${link.rotate} ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}
          style={{ 
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            transitionDelay: prefersReducedMotion ? '0ms' : `${i * 80}ms`
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );


  return (
    <>
      {/* Mobile Toggle */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-[var(--color-charcoal-light)] border border-[var(--color-terracotta)] rounded-full shadow-lg text-[var(--color-amber)]"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop Sticky Nav */}
      <nav className="hidden md:block fixed right-12 top-1/2 -translate-y-1/2 z-40">
        <NavItems />
      </nav>

      {/* Mobile Overlay Nav */}
      {isOpen && (
        <nav className="md:hidden fixed inset-0 bg-[var(--color-charcoal-base)]/95 backdrop-blur-sm z-40 flex items-center justify-center">
          <NavItems />
        </nav>
      )}
    </>
  );
}
