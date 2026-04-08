import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.15 + pointer.y * 0.3;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.2 + pointer.x * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#7c3aed"
          emissiveIntensity={0.4}
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

const FloatingParticle = ({ position }: { position: [number, number, number] }) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.5;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.04, 16, 16]} />
      <meshStandardMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={2} />
    </mesh>
  );
};

const particles = Array.from({ length: 30 }, (_, i) => [
  (Math.random() - 0.5) * 8,
  (Math.random() - 0.5) * 6,
  (Math.random() - 0.5) * 4,
] as [number, number, number]);

const HeroScene = () => (
  <div className="absolute inset-0 z-0">
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 1.5]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-5, -5, 5]} color="#7c3aed" intensity={1} />
        <AnimatedSphere />
        {particles.map((pos, i) => (
          <FloatingParticle key={i} position={pos} />
        ))}
      </Suspense>
    </Canvas>
  </div>
);

export default HeroScene;
