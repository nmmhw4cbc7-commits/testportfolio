'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-darkBg/30 backdrop-blur-md border-b border-white/5 pointer-events-auto"
    >
      <a href="#" className="text-xl font-extrabold tracking-wider text-white hover:text-accentPurp transition-colors duration-300">
        PD<span class="text-accentPurp">.</span>
      </a>
      
      <div className="hidden md:flex items-center text-sm text-gray-400 font-mono tracking-widest hover:text-white transition-colors duration-300">
        <Mail className="w-4 h-4 text-accentPurp mr-2" />
        hello@philippdachtler.com
      </div>

      <div className="flex space-x-8 text-xs font-mono tracking-widest text-gray-400">
        <a href="#about" className="hover:text-white transition-colors py-1 relative group">
          ABOUT
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accentPurp transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#work" className="hover:text-white transition-colors py-1 relative group">
          WORK
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accentPurp transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="hover:text-white transition-colors py-1 relative group">
          CONTACT
          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accentPurp transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </motion.nav>
  );
}
