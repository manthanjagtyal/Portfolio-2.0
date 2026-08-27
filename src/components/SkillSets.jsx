import React from 'react';

const SKILLS = [
  {
    title: 'Frontend',
    count: '(06)',
    items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript', 'TypeScript']
  },
  {
    title: 'Backend',
    count: '(05)',
    items: ['Python', 'FastAPI', 'Node.js', 'PostgreSQL', 'System Design']
  },
  {
    title: 'Systems',
    count: '(04)',
    items: ['Docker', 'CI/CD pipelines', 'Algorithms', 'Cloud Infra']
  }
];

export default function SkillSets() {
  return (
    <section id="skills" className="pt-10 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-20 border-t border-neutral-800 pt-8">
        <div className="md:w-1/3 space-y-2">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
            Engineering<br />skill sets
          </h2>
          <span className="block font-mono text-sm uppercase tracking-widest text-neutral-500 mt-4">
            (AI/ML — 579)
          </span>
        </div>
        
        <div className="md:w-2/3">
          <p className="text-lg md:text-2xl font-medium text-neutral-400 leading-relaxed max-w-3xl">
            I propose an end-to-end engineering process that spans my skills in Full-Stack Development for web platforms, with a high-standard architecture and system prudence.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {SKILLS.map((col, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-medium text-white">{col.title}</h3>
              <span className="font-mono text-sm text-neutral-500">{col.count}</span>
            </div>
            <ul className="space-y-4 border-t border-neutral-800 pt-6">
              {col.items.map((item, i) => (
                <li key={i} className="font-sans text-xl text-neutral-400 hover:text-white transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
