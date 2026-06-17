'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
import CharacterModel from './CharacterModel';

export default function Scene3D({ scrollProgress }: { scrollProgress: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-20 pointer-events-none md:pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0.8, 3.0], fof: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.25} />
          <directionalLight position={[5, 5, 5]} intensity={1.5} />
          
          {/* Neon Pink Accent Backlight */}
          <directionalLight position={[-4, 2, -3]} intensity={3.0} color="#f0abfc" />
          {/* Fill Light Bottom */}
          <directionalLight position={[2, -3, 2]} intensity={1.0} color="#a855f7" />

          <CharacterModel scrollProgress={scrollProgress} isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
