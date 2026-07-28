import React from 'react';

const REVIEWS = [
  { text: "A magical place in Bodh Gaya. The open mic night was unforgettable.", author: "Rahul M.", color: "bg-[#5C2B29]" }, // Deep Red
  { text: "Best coffee and the most peaceful reading corner I've found in India.", author: "Sarah W.", color: "bg-[#A67C00]" }, // Mustard
  { text: "Camping under the stars with live acoustic music. Pure bliss.", author: "Amit K.", color: "bg-[#1E3A2F]" }, // Forest
  { text: "HouseTale has created something truly special. It feels like home.", author: "Priya S.", color: "bg-[#1B263B]" }, // Navy
  { text: "A magical place in Bodh Gaya. The open mic night was unforgettable.", author: "Rahul M.", color: "bg-[#5C2B29]" },
  { text: "Best coffee and the most peaceful reading corner I've found in India.", author: "Sarah W.", color: "bg-[#A67C00]" },
  { text: "Camping under the stars with live acoustic music. Pure bliss.", author: "Amit K.", color: "bg-[#1E3A2F]" },
  { text: "HouseTale has created something truly special. It feels like home.", author: "Priya S.", color: "bg-[#1B263B]" },
];

export default function Whispers() {
  return (
    <section className="py-24 bg-[var(--color-charcoal-light)]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl text-[var(--color-parchment)] font-serif mb-2">Whispers from Readers</h2>
        <p className="text-[var(--color-amber)] font-script text-xl">What travelers leave behind...</p>
      </div>

      <div className="marquee-container py-8">
        <div className="marquee-content gap-6 px-6">
          {REVIEWS.map((review, i) => (
            <div 
              key={i} 
              className={`w-72 h-40 ${review.color} rounded-r-xl rounded-l-sm flex flex-col justify-between p-6 shadow-[8px_0_15px_rgba(0,0,0,0.5)] relative book-spine hover:-translate-y-2 cursor-default`}
            >
              {/* Spine texture/details */}
              <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10"></div>
              <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
              
              <p className="font-sans text-sm text-[var(--color-parchment)] leading-relaxed italic opacity-90 relative z-10">
                "{review.text}"
              </p>
              <div className="text-right font-script text-[var(--color-amber)] text-lg relative z-10">
                - {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
