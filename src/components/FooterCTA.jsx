import React from 'react';

export default function FooterCTA() {
  return (
    <footer id="contact" className="pt-24 pb-8 overflow-hidden bg-[#111111] text-white">
      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto text-center mb-24">
        <h2 className="text-4xl sm:text-6xl md:text-[6vw] leading-[1.05] font-medium tracking-tight mb-16 max-w-5xl mx-auto">
          Have something crazy in your mind? Let's build it together!
        </h2>

        {/* Contact Box */}
        <div className="inline-flex flex-col items-center justify-center p-8 md:p-16 rounded-[2.5rem] bg-[#1a1a1a] border border-neutral-800 w-full max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#fb4617]/5 to-transparent pointer-events-none" />
          
          <span className="text-[#fb4617] font-mono text-sm uppercase tracking-widest mb-10 relative z-10">
            Let's Connect
          </span>
          
          <div className="flex flex-col gap-8 w-full text-center relative z-10">
            <a href="mailto:msjagtyal@gmail.com" className="text-2xl md:text-4xl font-medium hover:text-[#fb4617] transition-colors duration-300">
              msjagtyal@gmail.com
            </a>
            <a href="tel:+919149445141" className="text-2xl md:text-4xl font-medium hover:text-[#fb4617] transition-colors duration-300">
              +91 91494 45141
            </a>
            <div className="mt-6 flex flex-col md:flex-row gap-4 items-center justify-center">
              <a 
                href="https://wa.me/919149445141" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-10 py-4 border border-[#fb4617] text-[#fb4617] font-semibold rounded-full hover:bg-[#fb4617] hover:text-[#111111] transition-all duration-300 text-sm uppercase tracking-widest"
              >
                Chat on WhatsApp
              </a>
              <a 
                href="https://linkedin.com/in/manthansharma1805" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-10 py-4 border border-neutral-700 text-white font-semibold rounded-full hover:border-[#fb4617] hover:text-[#fb4617] transition-all duration-300 text-sm uppercase tracking-widest"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/manthanjagtyal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-10 py-4 border border-neutral-700 text-white font-semibold rounded-full hover:border-[#fb4617] hover:text-[#fb4617] transition-all duration-300 text-sm uppercase tracking-widest"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-12 font-mono text-xs uppercase tracking-widest font-semibold border-t border-neutral-800 pt-8 text-neutral-500">
        <div className="flex flex-col gap-2">
          <span>JAMMU & KASHMIR, INDIA</span>
          <span>WORKING GLOBALLY</span>
          <span>IND</span>
        </div>

        <div className="flex flex-col gap-2 md:text-right">
          <span>©2026 MANTHAN SHARMA</span>
          <span>ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  );
}
