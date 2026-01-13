import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Box, Torus, Icosahedron } from '@react-three/drei';
import { useRef, Suspense } from 'react';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed = 1, distort = 0.3 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  distort?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function AnimatedBox({ position, color, speed = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
      <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          wireframe
        />
      </Box>
    </Float>
  );
}

function AnimatedTorus({ position, color, speed = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 * speed;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <Torus ref={meshRef} args={[0.8, 0.3, 16, 32]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
        />
      </Torus>
    </Float>
  );
}

function AnimatedIcosahedron({ position, color, speed = 1 }: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4 * speed;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={2} floatIntensity={1.8}>
      <Icosahedron ref={meshRef} args={[1, 1]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.15}
          wireframe
        />
      </Icosahedron>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
      <pointLight position={[10, -10, 5]} intensity={0.5} color="#06b6d4" />
      
      {/* Main shapes */}
      <AnimatedSphere position={[-3, 1, -2]} color="#8b5cf6" speed={0.8} distort={0.4} />
      <AnimatedBox position={[3.5, -0.5, -1]} color="#06b6d4" speed={1.2} />
      <AnimatedTorus position={[-2.5, -1.5, 0]} color="#f97316" speed={1} />
      <AnimatedIcosahedron position={[2.5, 1.5, -1.5]} color="#10b981" speed={0.9} />
      
      {/* Background elements */}
      <AnimatedSphere position={[5, 2, -4]} color="#ec4899" speed={0.5} distort={0.2} />
      <AnimatedBox position={[-4, -2, -3]} color="#3b82f6" speed={0.7} />
    </>
  );
}

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
