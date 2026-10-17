import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function ElevatorLights({
  ambientIntensity = 0.5,
  blueLightIntensity = 1.8,
  orangeRimIntensity = 0.85,
  interiorLightIntensity = 0.4,
}) {
  const blueLightRef = useRef();

  useFrame((state) => {
    // Subtle organic pulsing on the DM blue atmospheric illumination
    if (blueLightRef.current) {
      const t = state.clock.getElapsedTime();
      blueLightRef.current.intensity = blueLightIntensity + Math.sin(t * 1.5) * 0.12;
    }
  });

  return (
    <group name="cinematic-lighting">
      {/* 1. SOFT AMBIENT DEEP NAVY LIGHT */}
      <ambientLight color="#081422" intensity={ambientIntensity} />

      {/* 2. DIRECTIONAL ARCHITECTURAL KEY LIGHT (Soft metallic sheen) */}
      <directionalLight
        position={[5, 7, 6]}
        color="#E2EEF8"
        intensity={0.8}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={22}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
        shadow-bias={-0.0005}
      />

      {/* 3. PRIMARY DM BLUE VOLUMETRIC KEY LIGHT */}
      <pointLight
        ref={blueLightRef}
        position={[-2.8, 3.2, 2.5]}
        color="#0A78B8"
        intensity={blueLightIntensity}
        distance={14}
        decay={2}
      />

      {/* Secondary hoistway depth fill light */}
      <pointLight
        position={[1.5, 4.5, -1.2]}
        color="#075A8F"
        intensity={0.9}
        distance={10}
        decay={2}
      />

      {/* 4. SUBTLE ORANGE RIM LIGHT (Accenting right portal edge) */}
      <pointLight
        position={[4.5, 1.0, 0.8]}
        color="#FF6A00"
        intensity={orangeRimIntensity}
        distance={8}
        decay={2}
      />

      {/* 5. INTERIOR DOWNLIGHT (Inside elevator cabin, intensifies when doors open) */}
      <spotLight
        position={[0.6, 1.8, -1.2]}
        target-position={[0.6, -2, -1.2]}
        color="#FFFFFF"
        intensity={interiorLightIntensity * 1.2}
        angle={Math.PI / 3}
        penumbra={0.7}
        distance={7}
        decay={2}
      />

      {/* Interior ambient blue glow */}
      <pointLight
        position={[0.6, 0.4, -1.4]}
        color="#0A78B8"
        intensity={interiorLightIntensity * 0.9}
        distance={5}
        decay={2}
      />
    </group>
  );
}
