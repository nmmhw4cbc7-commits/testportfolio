'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';

export default function CharacterModel({ scrollProgress, isMobile }: { scrollProgress: number; isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const eyesRef = useRef<THREE.Group>(null);
  const laptopGroup = useRef<THREE.Group>(null);
  const sideMonitorGroup = useRef<THREE.Group>(null);

  // Fallback-Architektur: Falls du ein echtes GLTF einbinden möchtest,
  // entkommentiere die Zeile unten und lösche das manuelle Mesh-Skelett.
  // const { scene } = useGLTF('/models/character.glb');

  useFrame((state) => {
    const { x, y } = state.pointer;
    const time = state.clock.getElapsedTime();

    // 1. Weiches Cursor-Tracking (Head & Eyes) via linearem Interpolieren (lerp)
    if (!isMobile) {
      if (headRef.current) {
        headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, x * 0.28, 0.08);
        headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, -y * 0.15, 0.08);
      }
      if (eyesRef.current) {
        eyesRef.current.rotation.y = THREE.MathUtils.lerp(eyesRef.current.rotation.y, x * 0.38, 0.1);
        eyesRef.current.rotation.x = THREE.MathUtils.lerp(eyesRef.current.rotation.x, -y * 0.2, 0.1);
      }
    } else {
      // Sanfter organischer Sinus-Idle für Touchscreens
      if (headRef.current) {
        headRef.current.rotation.y = Math.sin(time * 1.5) * 0.1;
        headRef.current.rotation.x = Math.cos(time * 1.0) * 0.05;
      }
    }

    // 2. Linear angetriebener Kamera-Zoom Out / Workspace-Transformation via Scroll-Fortschritt
    if (groupRef.current) {
      const currentProgress = Math.min(scrollProgress * 2.2, 1); // Beschleunigt die Zoom-Fahrt im ersten Teil
      
      const targetScale = THREE.MathUtils.lerp(isMobile ? 1.0 : 1.35, isMobile ? 0.65 : 0.76, currentProgress);
      const targetY = THREE.MathUtils.lerp(isMobile ? -0.2 : -0.5, isMobile ? -0.4 : -0.65, currentProgress);
      const targetRotationY = THREE.MathUtils.lerp(0, -Math.PI / 10, currentProgress);

      groupRef.current.scale.setScalar(targetScale);
      groupRef.current.position.y = targetY;
      groupRef.current.rotation.y = targetRotationY;
    }

    // Prozedurale Micro-Animations auf dem Tisch
    if (laptopGroup.current) {
      laptopGroup.current.position.y = 0.125 + Math.sin(time * 2.2) * 0.003;
    }
    if (sideMonitorGroup.current) {
      sideMonitorGroup.current.position.y = 0.4 + Math.cos(time * 1.7) * 0.006;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* ANFANG: PROZEDURALE HOCHWERTIGE PLATZHALTER-FIGUR */}
      {/* Sessel */}
      <mesh position={[0, 0.6, -0.35]}>
        <boxGeometry args={[0.75, 0.9, 0.1]} />
        <meshStandardMaterial color="#18181b" roughness={0.6} />
      </mesh>

      {/* Körper */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.26, 0.32, 0.8, 32]} />
        <meshStandardMaterial color="#1e1b4b" roughness={0.5} />
      </mesh>

      {/* Kopf & Sensorik */}
      <group ref={headRef} position={[0, 0.98, 0]}>
        <mesh>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial color="#e4e4e7" roughness={0.4} />
        </mesh>
        {/* Haarschnitt */}
        <mesh position={[0, 0.19, 0.02]}>
          <boxGeometry args={[0.37, 0.08, 0.37]} />
          <meshStandardMaterial color="#09090b" roughness={0.8} />
        </mesh>
        
        {/* Augen & Brille */}
        <group ref={eyesRef} position={[0, 0.04, 0.176]}>
          <mesh>
            <boxGeometry args={[0.3, 0.06, 0.03]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={1.2} />
          </mesh>
          <mesh position={[-0.07, 0, 0.02]}>
            <boxGeometry args={[0.05, 0.02, 0.01]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh position={[0.07, 0, 0.02]}>
            <boxGeometry args={[0.05, 0.02, 0.01]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
        </group>
      </group>

      {/* WORKSPACE ARTIFAKTE (Werden durch Zoom-Out sichtbar) */}
      <group position={[0, 0.0, 0.45]}>
        {/* Schreibtisch-Platte */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[1.7, 0.04, 0.8]} />
          <meshStandardMaterial color="#111115" roughness={0.4} />
        </mesh>

        {/* Laptop */}
        <group ref={laptopGroup} position={[0, 0.125, 0.05]}>
          <mesh>
            <boxGeometry args={[0.38, 0.015, 0.26]} />
            <meshStandardMaterial color="#27272a" />
          </mesh>
          <mesh position={[0, 0.13, -0.12]} rotation={[-Math.PI / 3, 0, 0]}>
            <planeGeometry args={[0.36, 0.22]} />
            <meshStandardMaterial color="#c084fc" emissive="#c084fc" emissiveIntensity={3.5} />
          </mesh>
        </group>

        {/* Zweit-Monitor */}
        <group ref={sideMonitorGroup} position={[-0.6, 0.4, -0.05]} rotation={[0, Math.PI / 6, 0]}>
          <mesh>
            <boxGeometry args={[0.42, 0.28, 0.02]} />
            <meshStandardMaterial color="#27272a" />
          </mesh>
          <mesh position={[0, 0, 0.011]}>
            <planeGeometry args={[0.4, 0.26]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={2.0} />
          </mesh>
          <mesh position={[0, -0.22, 0]}>
            <cylinderGeometry args={[0.015, 0.015, 0.18]} />
            <meshStandardMaterial color="#18181b" />
          </mesh>
        </group>
      </group>
      {/* ENDE PLATZHALTER */}
    </group>
  );
}
