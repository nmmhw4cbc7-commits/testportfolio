'use client';

import { useState, useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Navbar from '@/components/Navbar';
import SocialBar from '@/components/SocialBar';
import Hero from '@/components/Hero';
import Scene3D from '@/components/Scene3D';
import WorkCards from '@/components/WorkCards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setScrollProgress(latest);
    });
  }, [scrollYProgress]);

  return (
    <div className="relative min-h-screen bg-darkBg">
      {/* Background Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-fuchsia-900/10 blur-[150px] pointer-events-none z-0" />

      <Navbar />
      <SocialBar />

      {/* Persistent 3D Stage Background/Midground */}
      <Scene3D scrollProgress={scrollProgress} />

      {/* UI Copy Overlays */}
      <div className="relative z-30 pointer-events-none">
        <Hero />
        <WorkCards />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
