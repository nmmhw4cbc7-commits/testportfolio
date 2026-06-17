'use client';

import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-32">
      {/* Left Block */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/2 flex flex-col justify-center py-20 mt-16 md:mt-0 pointer-events-auto"
      >
        <span className="font-mono text-accentPurp text-xs md:text-sm tracking-[0.3em] uppercase block mb-3">
          // Welcome to my space
        </span>
        <span className="text-gray-400 font-light text-lg md:text-2xl mb-1">Hello! I'm</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none">
          PHILIPP
        </h1>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-accentPurp leading-none mb-6">
          DACHTLER
        </h1>
        <div className="w-20 h-[2px] bg-gradient-to-r from-accentPurp to-transparent" />
      </motion.div>

      {/* Right Block */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-end text-left md:text-right py-10 pointer-events-auto self-end md:self-center"
      >
        <span className="text-gray-400 font-light text-lg md:text-2xl mb-1">An</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-accentPurp to-accentPink drop-shadow-[0_0_15px_rgba(168,85,247,0.3)] leading-tight">
          AI ENGINEER
        </h2>
        <h3 className="text-xl md:text-2xl font-mono text-gray-300 tracking-wider mt-2">
          & FULL-STACK DEVELOPER
        </h3>
        <p className="text-xs md:text-sm text-gray-500 max-w-sm mt-4 font-mono">
          Designing advanced interactive systems, smooth WebGL scenes, and production-ready intelligence solutions.
        </p>
        
        <a href="#" className="mt-8 group flex items-center space-x-3 text-xs tracking-[0.3em] font-mono text-gray-400 hover:text-white transition-all duration-300">
          <span>RESUME</span>
          <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-accentPurp flex items-center justify-center transition-all duration-300">
            <FileText className="w-4 h-4 group-hover:text-accentPurp transition-colors" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
