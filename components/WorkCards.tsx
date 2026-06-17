'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const CARDS_DATA = [
  {
    num: "01",
    title: "AI DEVELOPER",
    subtitle: "Building intelligent systems & AI solutions",
    desc: "Developing customized AI agents, chatbots, automation systems, and advanced machine learning structures. Proficient with Python, LLMs, Vector Databases, and modern orchestration architectures.",
    tags: ["LangChain", "OpenAI API", "Python"]
  },
  {
    num: "02",
    title: "FULL-STACK",
    subtitle: "Modern web development & scalable applications",
    desc: "Crafting bulletproof, highly scalable web solutions with extreme performance, micro-frontend structures, and clean APIs. Deeply specialized inside the React, Next.js, and TypeScript matrix.",
    tags: ["React / NextJS", "TypeScript", "TailwindCSS"]
  },
  {
    num: "03",
    title: "AUTOMATION",
    subtitle: "Process optimization with smart tools",
    desc: "Saving infinite operational lifetimes through specialized automation pipelines, secure cloud webhooks, data mining nodes, and tailored cross-application triggers.",
    tags: ["N8N / Make", "APIs", "Webhooks"]
  },
  {
    num: "04",
    title: "DATA & SYSTEMS",
    subtitle: "Clean data, APIs and backend logic",
    desc: "Architecting reliable real-time infrastructures, safe backend routers, structured database models, and highly optimized server operations.",
    tags: ["Supabase", "PostgreSQL", "Node.js"]
  }
];

export default function WorkCards() {
  return (
    <div id="work" className="w-full md:w-[45%] ml-auto py-[15vh] space-y-[35vh]">
      <div className="mb-12">
        <span className="font-mono text-accentPurp text-xs tracking-[0.4em] uppercase block mb-2">// WHAT I DO</span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">EXPERTISE</h2>
        <div className="w-16 h-[2px] bg-accentPurp mt-3" />
      </div>

      {CARDS_DATA.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.3, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: "-20% 0px -20% 0px" }}
          transition={{ duration: 0.6 }}
          className="border border-dashed border-white/10 bg-darkBg/70 backdrop-blur-md p-8 rounded-lg relative group hover:border-accentPurp/40 transition-all duration-300 pointer-events-auto"
        >
          {/* Creative Camera-Focus Corner Marks */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accentPurp/20 group-hover:border-accentPurp transition-all" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accentPurp/20 group-hover:border-accentPurp transition-all" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accentPurp/20 group-hover:border-accentPurp transition-all" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accentPurp/20 group-hover:border-accentPurp transition-all" />

          <span className="font-mono text-accentPurp text-xs tracking-widest block mb-1">SERVICES {card.num}</span>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accentPink transition-colors">{card.title}</h3>
          <p className="text-xs text-gray-400 font-mono mb-4">{card.subtitle}</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">{card.desc}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {card.tags.map((tag, tIndex) => (
              <span key={tIndex} className="px-2 py-1 bg-purple-950/30 border border-purple-500/20 text-accentPink font-mono text-[10px] rounded">
                {tag}
              </span>
            ))}
          </div>

          <div className="absolute bottom-4 right-4 text-gray-500 group-hover:text-accentPink transition-colors">
            <ChevronRight className="w-4 h-4" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
