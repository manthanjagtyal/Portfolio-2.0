import React from 'react';

export default function CircularBadge({ text }) {
  const characters = text.split('');
  
  return (
    <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full border border-neutral-800 flex items-center justify-center animate-spin-slow">
      <div className="absolute inset-0 rounded-full flex items-center justify-center">
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute left-1/2 origin-[0_48px] md:origin-[0_56px] font-mono text-[10px] uppercase tracking-widest text-neutral-400"
            style={{
              transform: `translate(-50%, 0) rotate(${i * (360 / characters.length)}deg)`
            }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className="w-2 h-2 rounded-full bg-[#fb4617]" />
    </div>
  );
}
