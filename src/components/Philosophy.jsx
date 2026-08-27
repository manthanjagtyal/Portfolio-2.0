import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function Philosophy() {
  const text = "Development is the strategic, the intentional, and often the invisible process of making functional, highly-scalable solutions that improve system performance.";

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-12 max-w-screen-xl mx-auto flex flex-col items-center text-center">
      <ScrollReveal
        baseOpacity={0.1}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        textClassName="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white"
      >
        {text}
      </ScrollReveal>

      <div className="mt-20 flex flex-wrap items-center justify-center gap-6 font-mono text-sm uppercase tracking-widest text-neutral-400">
        <span>Be Real *</span>
        <span>Be Creative #</span>
        <span>Be Bold ™</span>
      </div>
    </section>
  );
}
