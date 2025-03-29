import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, SpotLight, useDepthBuffer } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const MovingLight = () => {
  const lightRef = useRef<THREE.SpotLight>(null);
  const depthBuffer = useDepthBuffer({ frames: 1 });

  useFrame((state) => {
    if (lightRef.current) {
      const time = state.clock.getElapsedTime();
      lightRef.current.position.x = Math.sin(time) * 2;
      lightRef.current.position.z = Math.cos(time) * 2;
    }
  });

  return (
    <SpotLight
      ref={lightRef}
      position={[3, 2, 1]}
      intensity={2}
      distance={5}
      angle={0.5}
      penumbra={0.5}
      castShadow
      depthBuffer={depthBuffer}
    />
  );
};

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#0ea5e9"
          attach="material"
          distort={0.6}
          speed={2}
          roughness={0}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>
    </Float>
  );
};

export const Hero3D = () => {
  return (
    <Canvas style={{ height: '100%' }} camera={{ position: [0, 0, 5], fov: 45 }}>
      <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Stars 
        radius={50}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <ambientLight intensity={0.5} />
      <MovingLight />
      <pointLight position={[-10, -10, -10]} intensity={1} />
      <AnimatedSphere />

      {/* Add volumetric light beams */}
      <mesh position={[0, 0, -10]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#000014"
          transparent
          opacity={0.8}
        />
      </mesh>
    </Canvas>
  );
};