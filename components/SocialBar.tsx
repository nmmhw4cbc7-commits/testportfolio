'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function SocialBar() {
  return (
    <motion.div 
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed bottom-12 left-6 md:left-10 z-40 hidden sm:flex flex-col items-center space-y-6 pointer-events-auto"
    >
      <div className="w-[1px] h-20 bg-gradient-to-t from-accentPurp to-transparent" />
      <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accentPurp hover:scale-110 transition-all duration-300">
        <Github className="w-5 h-5" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accentPurp hover:scale-110 transition-all duration-300">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accentPurp hover:scale-110 transition-all duration-300">
        <Twitter className="w-5 h-5" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accentPurp hover:scale-110 transition-all duration-300">
        <Instagram className="w-5 h-5" />
      </a>
      <span className="text-[9px] font-mono tracking-[0.3em] text-gray-500 uppercase origin-left rotate-90 translate-y-12 select-none">CONNECT</span>
    </motion.div>
  );
}
