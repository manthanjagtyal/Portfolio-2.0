import React from 'react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
      
      {/* Central Portrait Image - Absolutely Positioned */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] h-[65vh] md:h-[85vh] z-0 flex items-end justify-center pointer-events-none">
        <img 
          src="/new-hero-cutout.png" 
          alt="Manthan Sharma" 
          className="w-full h-full object-contain object-bottom"
        />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4 items-center mt-32 lg:mt-20">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-[#fb4617] leading-[1.05]">
            Manthan Sharma is Right Here!
          </h1>
          <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-sm">
            With a seasoned eye for development, I bring complex web applications to life through scalable architecture and elegant code.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <button className="bg-[#fb4617] text-black font-semibold text-xs md:text-sm tracking-widest uppercase px-6 py-4 rounded-sm hover:bg-white transition-colors flex items-center gap-2">
              Chat With Me
            </button>
            <button className="text-white font-semibold text-xs md:text-sm tracking-widest uppercase px-6 py-4 flex items-center gap-2 hover:text-[#fb4617] transition-colors">
              <span className="text-[#fb4617] text-lg">↗</span> Drop A Project
            </button>
          </div>


        </div>

        {/* MIDDLE COLUMN - Left completely empty so the image shines through */}
        <div className="lg:col-span-4 hidden lg:block pointer-events-none"></div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4 flex flex-col gap-10">
          {/* Service 1 */}
          <div className="flex gap-5">
            <div className="text-[#fb4617] mt-1 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#fb4617] font-bold text-sm tracking-widest uppercase">Full-Stack Dev</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I offer full-stack solutions that bring your web product concepts to life, from scalable databases to intuitive user interfaces.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex gap-5">
            <div className="text-[#fb4617] mt-1 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#fb4617] font-bold text-sm tracking-widest uppercase">AI/ML Engineering</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Elevate the functionality and capabilities of your products by seamlessly integrating intelligent AI/ML models.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex gap-5">
            <div className="text-[#fb4617] mt-1 shrink-0">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#fb4617] font-bold text-sm tracking-widest uppercase">System Design</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                I provide strategic guidance on cloud infrastructure, scalable system architecture, and robust database design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
