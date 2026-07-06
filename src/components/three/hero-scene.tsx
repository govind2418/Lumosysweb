"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function DistortedBlob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 4) * 0.3;
    meshRef.current.rotation.y = t * 0.12;

    const px = (state.pointer.x * state.viewport.width) / 12;
    const py = (state.pointer.y * state.viewport.height) / 12;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, px, 0.03);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, py, 0.03);
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={2.4}>
        <icosahedronGeometry args={[1, 12]} />
        <MeshDistortMaterial
          color="#5b6cff"
          roughness={0.15}
          metalness={0.4}
          distort={0.4}
          speed={1.8}
          envMapIntensity={0.9}
        />
      </mesh>
    </Float>
  );
}

function ParticleField({ count = 400 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 4;
  }

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.y = state.clock.getElapsedTime() * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#8c93ff" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 7], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 4]} intensity={1.2} />
      <DistortedBlob />
      <ParticleField />
      <Environment preset="city" />
    </Canvas>
  );
}
