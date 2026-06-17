'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Globe } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative min-h-screen px-6 md:px-20 lg:px-32 py-24 flex flex-col justify-center bg-darkBg/95 border-t border-white/5">
      <div className="max-w-4xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div>
          <span className="font-mono text-accentPurp text-xs tracking-[0.3em] uppercase block mb-2">// SECURE AN ALLY</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-none mb-6">
            LET'S BUILD SOMETHING GREAT
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Do you want to develop an interactive website, implement custom AI pipelines, or build outstanding automation? Drop me a line directly.
          </p>
          <div className="space-y-4 font-mono text-xs text-gray-400">
            <div className="flex items-center space-x-3">
              <MapPin className="text-accentPurp w-4 h-4" />
              <span>Germany, EU (GMT+2)</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-accentPurp w-4 h-4" />
              <span>hello@philippdachtler.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="text-accentPurp w-4 h-4" />
              <span>www.philippdachtler.com</span>
            </div>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.01] backdrop-blur-md p-8 rounded-xl relative overflow-hidden pointer-events-auto">
          {sent ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 bg-darkBg/95 flex flex-col items-center justify-center p-6 text-center z-20"
            >
              <div className="w-12 h-12 rounded-full border border-accentPurp flex items-center justify-center mb-4 text-accentPurp animate-pulse">
                <Send className="w-5 h-5" />
              </div>
              <h4 className="text-white text-lg font-bold mb-2">TRANSMISSION COMPLETE</h4>
              <p class="text-gray-400 text-xs font-mono max-w-xs">Thank you, Philipp will review your signal shortly.</p>
              <button onClick={() => setSent(false)} className="mt-6 px-4 py-2 border border-white/10 text-white font-mono text-xs hover:border-accentPurp transition-colors rounded">Reset Node</button>
            </motion.div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Your Name</label>
              <input type="text" required placeholder="John Doe" className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accentPurp transition-colors font-mono" />
            </div>
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Your Email</label>
              <input type="email" required placeholder="john@example.com" className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accentPurp transition-colors font-mono" />
            </div>
            <div>
              <label className="block text-[10px] font-mono tracking-widest text-gray-400 uppercase mb-2">Your Message</label>
              <textarea required rows={4} placeholder="Describe the interface or workflow..." className="w-full bg-white/[0.02] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-accentPurp transition-colors font-mono resize-none" />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-accentPurp to-accentPink text-white font-mono text-xs tracking-widest py-4 rounded font-bold uppercase transition-transform active:scale-[0.99] shadow-lg hover:shadow-purple-500/10">
              TRANSMIT MESSAGE
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
