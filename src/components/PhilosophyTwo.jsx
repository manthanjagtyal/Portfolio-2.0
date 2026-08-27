import React from 'react';
import { motion } from 'framer-motion';

export default function PhilosophyTwo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const wordVariants = {
    hidden: { y: '100%', opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const p1 = "Most engineers make things work. I make things feel inevitable where every line of code has reason".split(" ");
  const p2 = "I build platforms that get under your skin where the performance stops you, the architecture pulls you in, and the reliability stays with you long after you've closed the tab.".split(" ");

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-400 leading-tight space-y-12"
      >
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {p1.map((word, idx) => (
            <div key={`p1-${idx}`} className="overflow-hidden">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${(word.includes("feel") || word.includes("inevitable") || word.includes("reason")) ? "text-white" : ""}`}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {p2.map((word, idx) => (
            <div key={`p2-${idx}`} className="overflow-hidden">
              <motion.span
                variants={wordVariants}
                className={`inline-block ${(word.includes("performance") || word.includes("architecture") || word.includes("reliability")) ? "text-white" : ""}`}
              >
                {word}
              </motion.span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
