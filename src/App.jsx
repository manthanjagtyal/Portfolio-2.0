import React, { useEffect, Suspense, lazy } from 'react';
import Lenis from 'lenis';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import Aurora from './components/Aurora';

// Lazy load below-the-fold components to massively improve Time To Interactive
const Certificates = lazy(() => import('./components/Certificates'));
const Projects = lazy(() => import('./components/Projects'));
const Philosophy = lazy(() => import('./components/Philosophy'));
const SkillSets = lazy(() => import('./components/SkillSets'));
const PhilosophyTwo = lazy(() => import('./components/PhilosophyTwo'));
const FooterCTA = lazy(() => import('./components/FooterCTA'));

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis with lerp for a much snappier, less "floaty/laggy" feel
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      smoothWheel: true,
      syncTouch: true,
      syncTouchLerp: 0.08,
    });

    // Keep ScrollTrigger perfectly in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      // GSAP ticker provides time in seconds, Lenis needs ms
      lenis.raf(time * 1000);
    };

    // Use GSAP's ticker to drive Lenis for perfect 1-frame lockstep sync
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-[#ffffff] font-sans selection:bg-[#fb4617] selection:text-white relative">
      {/* Aurora Background Effect - Removed mix-blend-screen and added will-change for performance */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <Aurora 
          colorStops={["#fb4617", "#ff8a00", "#111111"]}
          blend={0.5}
          amplitude={1.2}
          speed={0.6}
        />
      </div>

      <CustomCursor />
      <Navbar />
      
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        
        <Suspense fallback={<div className="w-full h-32 flex items-center justify-center text-neutral-500">Loading...</div>}>
          <Certificates />
          <Projects />
          <SkillSets />
          <Philosophy />
          <PhilosophyTwo />
        </Suspense>
      </main>

      <div className="relative z-10">
        <Suspense fallback={<div className="w-full h-32 bg-[#1a1a1a]" />}>
          <FooterCTA />
        </Suspense>
      </div>

      <SpeedInsights />
    </div>
  );
}

export default App;
