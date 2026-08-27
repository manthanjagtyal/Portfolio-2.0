import React, { useState, useEffect } from 'react';
import AccordionGallery from './AccordionGallery';
import { motion, AnimatePresence } from 'framer-motion';
import BlurText from './BlurText';

const CERTIFICATES = [
  {
    image: '/cert-gemini.jpg',
    label: 'Gemini for Workspace',
    description: 'Completed on September 13, 2025, from Simplilearn & Google Cloud. It demonstrates my proficiency in leveraging Gemini AI tools to enhance productivity within Google Workspace.'
  },
  {
    image: '/cert-genai.jpg',
    label: 'Intro to Generative AI',
    description: 'Earned on September 13, 2025, from Simplilearn & Google Cloud. This certifies my foundational understanding of Generative AI principles and practical applications in modern tech.'
  },
  {
    image: '/cert-time.jpg',
    label: 'Effective Time Management',
    description: 'Awarded on October 29, 2025, by Tech Veda. It highlights my dedication to self-improvement and passing a comprehensive proctored exam on advanced time management strategies.'
  },
  {
    image: '/cert-builderfest.jpg',
    label: 'BuilderFest 2026',
    description: 'Secured 2nd Runner Up with Team LATENT SPACE at the BuilderFest 2026 overnight hackathon, organized by the AWS Student Builder Group at Lovely Professional University.'
  },
  {
    image: '/cert-times.jpg',
    label: 'Community Dev Project',
    description: 'Completed in collaboration with Times Foundation and LPU. It recognizes my active contribution to community-focused initiatives and strong commitment to fostering sustainable social impact.'
  },
  {
    image: '/cert-programming.jpg',
    label: 'Computer Programming',
    description: 'Awarded on May 21, 2026, by iamneo & LPU. This certificate recognizes 150 hours of dedication to mastering core computer programming concepts and software development.'
  },
  {
    image: '/cert-cybersecurity.jpg',
    label: 'Intro to Cyber Security',
    description: 'Completed on March 26, 2026, through Infosys Springboard. This showcases my foundational knowledge in cybersecurity, emphasizing network protection, threat mitigation, and digital safety principles.'
  }
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState(2); // Matches defaultIndex in AccordionGallery
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Handle keyboard navigation when lightbox is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % CERTIFICATES.length);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
      }
    };

    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling in background
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isLightboxOpen]);

  const handleItemClick = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <>
      <section id="certificates" className="pb-24 pt-8 md:pb-32 md:pt-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Top Text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-t border-neutral-800 pt-8">
          <div className="font-medium text-4xl sm:text-5xl md:text-7xl leading-none tracking-tight flex flex-col">
            <BlurText 
              text="My Latest" 
              delay={80} 
              animateBy="words" 
              direction="bottom" 
              className="text-white m-0"
            />
            <BlurText 
              text="Certificates" 
              delay={50} 
              animateBy="letters" 
              direction="bottom" 
              className="text-[#fb4617] m-0"
            />
          </div>
          <div className="flex flex-col items-start md:items-end gap-2 text-sm font-mono uppercase tracking-widest text-neutral-400">
            <span>(Achievements)</span>
            <span>/Continuous Learning/</span>
          </div>
        </div>

        {/* Accordion Gallery */}
        <div className="w-full">
          <AccordionGallery 
            items={CERTIFICATES}
            defaultIndex={2}
            accentColor="#fb4617"
            overlayColor="#111111"
            textColor="#ffffff"
            height={400}
            onActiveChange={(i) => setActiveIndex(i)}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Description Section */}
        <div className="mt-12 md:mt-16 bg-[#1a1a1a] p-8 md:p-12 rounded-sm border border-neutral-800 relative overflow-hidden min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12"
            >
              <div className="shrink-0 flex items-center justify-center bg-[#fb4617]/10 text-[#fb4617] w-16 h-16 rounded-sm font-mono font-bold text-xl">
                0{activeIndex + 1}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#fb4617] font-bold text-lg md:text-xl tracking-widest uppercase">
                  {CERTIFICATES[activeIndex].label}
                </h3>
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-3xl">
                  {CERTIFICATES[activeIndex].description}
                </p>
                <p className="text-neutral-500 text-xs mt-2 uppercase tracking-widest font-mono">
                  (Click expanded image to view full screen)
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Fullscreen Lightbox / Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 md:p-12"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-[#fb4617] transition-colors z-[110]"
              onClick={() => setIsLightboxOpen(false)}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Navigation Left */}
            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-[#fb4617] transition-colors p-4 z-[110] hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length);
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            {/* Navigation Right */}
            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#fb4617] transition-colors p-4 z-[110] hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % CERTIFICATES.length);
              }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>

            {/* Image container */}
            <motion.div 
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-[1200px] max-h-[85vh] flex items-center justify-center flex-col"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking image
            >
              <img 
                src={CERTIFICATES[lightboxIndex].image} 
                alt={CERTIFICATES[lightboxIndex].label} 
                className="max-w-full max-h-[80vh] object-contain rounded-md shadow-2xl border border-neutral-800"
              />
              
              <div className="mt-6 text-center">
                <h4 className="text-[#fb4617] font-bold tracking-widest uppercase mb-2">
                  {CERTIFICATES[lightboxIndex].label}
                </h4>
                <p className="text-neutral-300 text-sm max-w-2xl mx-auto">
                  {CERTIFICATES[lightboxIndex].description}
                </p>
                <p className="text-neutral-500 text-xs mt-4 font-mono uppercase tracking-widest">
                  Use Arrow Keys to Navigate / Esc to Close
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
