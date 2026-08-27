import React, { useState } from 'react';
import MorphSlider from './MorphSlider';

const PROJECTS_DATA = [
  {
    subtitle: "01 / Logistics",
    title: "Zuno Project",
    desc: "A seamless platform dedicated to ordering and managing household workers. Built with scalability in mind to connect homeowners with reliable help instantly.",
    img: "/zuno_app.jpg"
  },
  {
    subtitle: "02 / AI & ML",
    title: "ScriptSense",
    desc: "An intelligent generative model application designed to convert typed text into highly realistic, human-like handwriting dynamically.",
    img: "/scriptsense_app.jpg"
  },
  {
    subtitle: "03 / Utility",
    title: "Calsci App",
    desc: "An advanced calculator and scientific utility app featuring complex formula solving and intuitive mathematical layouts.",
    img: "/calsci_app.jpg"
  },
  {
    subtitle: "04 / Lifestyle",
    title: "Alarm App",
    desc: "A highly customizable, smart alarm clock application built to integrate flawlessly with daily schedules and enforce modern wake-up routines.",
    img: "/alarm_app.jpg"
  }
];

const MORPH_ITEMS = PROJECTS_DATA.map(p => ({
  image: p.img,
  caption: '' // Handled by custom UI
}));

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = PROJECTS_DATA[activeIndex];

  return (
    <section id="projects" className="w-full relative z-10 mt-24 md:mt-32 mb-10 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col gap-4 mb-12 border-b border-neutral-800 pb-8">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white">Projects</h2>
        <p className="text-neutral-400 max-w-xl text-lg">Swipe or drag to explore my featured applications through this interactive WebGL experience.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        {/* TEXT SECTION */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6 relative min-h-[300px]">
          {PROJECTS_DATA.map((proj, i) => (
            <div 
              key={i}
              className={`absolute inset-0 flex flex-col justify-center transition-all duration-700 ease-in-out ${i === activeIndex ? 'opacity-100 translate-y-0 pointer-events-auto z-10' : 'opacity-0 translate-y-8 pointer-events-none z-0'}`}
            >
              <span className="text-[#fb4617] font-mono tracking-widest text-sm uppercase mb-4">
                {proj.subtitle}
              </span>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
                {proj.title}
              </h3>
              <p className="text-neutral-400 text-lg leading-relaxed">
                {proj.desc}
              </p>
            </div>
          ))}
        </div>

        {/* SLIDER SECTION */}
        <div className="w-full lg:w-2/3 h-[50vh] md:h-[70vh] rounded-[2.5rem] overflow-hidden shadow-[0_0_40px_rgba(251,70,23,0.05)] border border-neutral-800">
          <MorphSlider
            items={MORPH_ITEMS}
            transition="melt"
            intensity={0.55}
            aberration={0.35}
            drift={0.4}
            autoplay={true}
            autoplayDelay={6}
            radius={40}
            overlayColor="#111111"
            showCaptions={false}
            showControls={true}
            showIndicators={true}
            onIndexChange={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}
