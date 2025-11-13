'use client';

import React, { useState, useEffect, useRef } from 'react';

const tips = [
  'Pack smarter, not heavier. → Roll clothes to save space and avoid wrinkles.',
  'Book flights on Tuesdays or Wednesdays. → These days often have the cheapest fares.',
  'Use Google Maps offline. → Download maps before your trip — it’ll save you when Wi-Fi disappears.',
  'Take photos of important documents. → Passport, IDs, bookings — just in case you lose them.',
  'Carry a reusable water bottle. → Stay hydrated and reduce plastic waste.',
  'Mark your bag as “Fragile.” → Handlers might be gentler, and your luggage could come out first.',
  'Learn a few local phrases. → Even a simple “thank you” goes a long way in any country.',
  'Avoid currency exchange at airports. → Rates are often worse there — use local ATMs instead.',
  'Travel insurance = peace of mind. → Health, theft, cancellations — don’t risk it.',
];

const colors = [
  'bg-rose-500',
  'bg-indigo-500',
  'bg-emerald-600',
  'bg-amber-500',
  'bg-blue-500',
  'bg-pink-500',
  'bg-cyan-700',
  'bg-lime-600',
  'bg-fuchsia-600',
];

const sizes = Array(9).fill('w-[400px] h-12');

export default function TravelTipsButtons() {
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !(containerRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setActive(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 py-16 px-6 text-white dark:bg-black">
      <h2 className="text-4xl font-serif font-bold text-center mb-10">
       SMART TRAVEL STORY STARTS HERE!
        <p className="font-garamond text-xl dark:text-gray-100">"Little tips, big adventures — make your travels smarter."</p>
      </h2>
      

      <div
        ref={containerRef}
        className="grid grid-cols-12 gap-y-8 gap-x-2 max-w-7xl mx-auto"
      >
        {tips.map((tip, index) => (
          <div key={index} className="col-span-1 flex justify-start">
            <TipButton
              index={index}
              tip={tip}
              color={colors[index]}
              size={sizes[index]}
              active={active}
              setActive={setActive}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function TipButton({ index, tip, color, size, active, setActive }: any) {
  const buttonText = index === 8 ? 'Click for tips' : 'Click here';

  return (
    <div className="relative group">
      <button
        onClick={() => setActive(active === index ? null : index)}
        className={`font-bold text-sm rounded-full shadow-md transform transition-transform duration-300 
          ${color} ${size} relative hover:scale-125 z-10 hover:z-50 px-4 text-left`}
      >
        {buttonText}
      </button>

      {active === index && (
        <div
          className={`absolute top-16 left-1/2 -translate-x-1/2 z-50 w-64 text-sm p-3 rounded-xl text-white text-center shadow-md ${color}`}
        >
          {tip}
        </div>
      )}
    </div>
  );
}
