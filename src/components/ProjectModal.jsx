import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Code2, Cpu, Zap, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#0e0e0e] border border-neutral-800 rounded-none p-6 md:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-neutral-800 pb-6 mb-6">
            <div className="flex items-center gap-3 font-mono text-xs text-accent-orange uppercase tracking-widest">
              <span>{project.index}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-white transition-colors border border-neutral-800 hover:border-neutral-600 rounded-full"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-4">
            {project.title}
          </h2>

          <p className="text-neutral-300 font-sans text-base md:text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Banner Graphic / Preview Container */}
          <div className="w-full h-48 md:h-64 rounded bg-gradient-to-br from-neutral-900 via-[#141414] to-neutral-950 border border-neutral-800 flex items-center justify-center mb-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-noise opacity-40"></div>
            <div className="z-10 text-center p-6">
              <div className="inline-flex p-3 rounded-full bg-accent-orange/10 text-accent-orange border border-accent-orange/20 mb-3">
                <Cpu className="w-8 h-8" />
              </div>
              <p className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                {project.category} Platform Architecture
              </p>
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-4">
              Key Architecture Highlights
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-neutral-300 font-mono">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-neutral-900/60 p-3 border border-neutral-800/80">
                  <span className="text-accent-orange font-mono">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-neutral-400 uppercase tracking-widest mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 font-mono text-xs bg-neutral-900 text-neutral-300 border border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 border-t border-neutral-800 pt-6">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-accent-orange hover:text-white transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white border border-neutral-700 font-mono text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors"
            >
              <span>Source Repository</span>
              <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
