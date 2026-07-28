import React from 'react';
import { Instagram, Facebook, Youtube, MapPin, Clock, Coffee, Heart, ArrowUpRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

export default function FindUs() {
  const ref = useReveal();

  return (
    <footer id="find-us" ref={ref} className="reveal-up-container relative pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0807] via-transparent to-transparent z-0 pointer-events-none"></div>
      
      {/* Streetlamp Glow */}
      <div className="streetlamp-glow absolute -top-32 -right-32 w-[600px] h-[600px] bg-[var(--color-amber)] rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
        
        {/* LEFT COLUMN: Logo, Description, Socials */}
        <div className="contact-row max-w-md">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 border border-[var(--color-amber)] rounded-full flex items-center justify-center shrink-0">
              <Coffee size={28} className="text-[var(--color-amber)]" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-parchment)] leading-none mb-2">Kitaab Koffee</h2>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-white/20"></div>
                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/60">CAFÉ</span>
                <div className="h-[1px] w-8 bg-white/20"></div>
              </div>
            </div>
          </div>
          
          <p className="font-sans text-base md:text-lg text-white/80 leading-relaxed mb-6">
            A little corner full of stories, coffee and good souls. Books to read, people to meet and moments to remember.
          </p>
          
          <p className="font-script text-[var(--color-amber)] text-2xl md:text-3xl mb-10">
            Read. Sip. Connect. Repeat.
          </p>
          
          <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-[var(--color-amber)] mb-5 font-normal">
            Follow Us
          </h3>
          
          <div className="flex gap-4">
            <SocialIcon icon={<Instagram size={20} />} href="https://instagram.com/kitaab_koffee" />
            <SocialIcon icon={<Facebook size={20} />} href="#" />
            <SocialIcon icon={<Youtube size={20} />} href="#" />
            <SocialIcon icon={<MapPin size={20} />} href="https://maps.google.com" />
          </div>
        </div>

        {/* RIGHT COLUMN: Info Cards */}
        <div className="flex flex-col gap-4 w-full lg:max-w-lg">
          
          {/* Cafe Hours Card */}
          <InfoCard 
            icon={<Clock size={24} className="text-[var(--color-amber)]" />}
            title="CAFE HOURS"
            content={
              <>
                <div className="text-white/90 text-lg font-sans mb-1">Open Daily</div>
                <div className="text-white/70 text-sm font-sans tracking-wide">10:00 AM – 10:00 PM</div>
              </>
            }
          />
          
          {/* Location Card */}
          <InfoCard 
            icon={<MapPin size={24} className="text-[var(--color-amber)]" />}
            title="LOCATION"
            content={
              <>
                <div className="text-white/90 text-lg font-sans mb-1 leading-snug">Durgapur, Bodh Gaya, Bihar 824231</div>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="text-[var(--color-amber)] text-sm flex items-center gap-1 hover:underline mt-2 font-sans tracking-wide w-fit">
                  View on map <ArrowUpRight size={14} />
                </a>
              </>
            }
          />

          {/* For Card */}
          <InfoCard 
            icon={<Coffee size={24} className="text-[var(--color-amber)]" />}
            title="FOR"
            content={
              <>
                <div className="text-white/90 text-lg font-sans mb-1 tracking-wide">₹200–400 per person</div>
                <div className="text-white/70 text-sm font-sans tracking-wide">Breakfast, Tibetan, Drinks & Snacks</div>
              </>
            }
          />
          
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="relative z-10 max-w-6xl mx-auto mt-24 pt-8 flex flex-col items-center border-t border-white/5">
        <p className="text-center text-white/50 text-sm font-sans tracking-wide">
          © 2025 Kitaab Koffee Café by <span className="text-[var(--color-amber)]">HouseTale</span>.<br className="md:hidden" /> All rights reserved. <br/>
          <Heart size={14} className="inline-block mt-4 text-white/40" />
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-[var(--color-charcoal-base)] hover:bg-[var(--color-amber)] hover:border-[var(--color-amber)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function InfoCard({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) {
  return (
    <div className="contact-row border border-white/10 rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:border-white/20 hover:bg-white/[0.02] transition-all duration-300">
      <div className="w-14 h-14 rounded-full border border-[var(--color-amber)]/30 flex items-center justify-center shrink-0 bg-[#1A1512]">
        {icon}
      </div>
      <div>
        <h3 className="font-sans text-[11px] uppercase tracking-[0.3em] text-[var(--color-amber)] mb-3 font-normal">
          {title}
        </h3>
        <div>
          {content}
        </div>
      </div>
    </div>
  );
}

