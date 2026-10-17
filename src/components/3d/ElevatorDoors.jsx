import React, { useRef } from 'react';
import * as THREE from 'three';

export default function ElevatorDoors({ doorProgress = 0 }) {
  // doorProgress: 0 (closed) to 1 (fully open)
  const leftDoorRef = useRef();
  const rightDoorRef = useRef();

  // Each door leaf is 0.90m wide. Travel distance when opening is 0.88m.
  const slideDistance = 0.88 * doorProgress;

  return (
    <group position={[0, -0.4, 0.02]} name="elevator-doors">
      
      {/* ========================================================= */}
      {/* LEFT DOOR LEAF                                            */}
      {/* ========================================================= */}
      <group
        ref={leftDoorRef}
        position={[-0.45 - slideDistance, 0, 0]}
      >
        {/* Main Door Panel */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.9, 3.18, 0.045]} />
          <meshStandardMaterial
            color="#121D2A"
            roughness={0.24}
            metalness={0.9}
          />
        </mesh>

        {/* Vertical Beveled Sight Edge Strip (Meeting Edge) */}
        <mesh position={[0.445, 0, 0.024]}>
          <boxGeometry args={[0.015, 3.16, 0.005]} />
          <meshStandardMaterial
            color="#FF6A00"
            roughness={0.2}
            metalness={0.8}
            emissive="#FF6A00"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Smoked Architectural Inlay Strip */}
        <mesh position={[0.2, 0, 0.023]}>
          <boxGeometry args={[0.08, 2.6, 0.004]} />
          <meshStandardMaterial
            color="#081422"
            roughness={0.15}
            metalness={0.95}
          />
        </mesh>

        {/* Integrated Door Recess Handle (DM Blue) */}
        <mesh position={[0.38, 0, 0.024]}>
          <boxGeometry args={[0.018, 1.5, 0.008]} />
          <meshStandardMaterial
            color="#075A8F"
            roughness={0.15}
            metalness={0.95}
          />
        </mesh>
      </group>

      {/* ========================================================= */}
      {/* RIGHT DOOR LEAF                                           */}
      {/* ========================================================= */}
      <group
        ref={rightDoorRef}
        position={[0.45 + slideDistance, 0, 0]}
      >
        {/* Main Door Panel */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[0.9, 3.18, 0.045]} />
          <meshStandardMaterial
            color="#121D2A"
            roughness={0.24}
            metalness={0.9}
          />
        </mesh>

        {/* Vertical Beveled Sight Edge Strip */}
        <mesh position={[-0.445, 0, 0.024]}>
          <boxGeometry args={[0.015, 3.16, 0.005]} />
          <meshStandardMaterial
            color="#FF6A00"
            roughness={0.2}
            metalness={0.8}
            emissive="#FF6A00"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Smoked Architectural Inlay Strip */}
        <mesh position={[-0.2, 0, 0.023]}>
          <boxGeometry args={[0.08, 2.6, 0.004]} />
          <meshStandardMaterial
            color="#081422"
            roughness={0.15}
            metalness={0.95}
          />
        </mesh>

        {/* Integrated Door Recess Handle */}
        <mesh position={[-0.38, 0, 0.024]}>
          <boxGeometry args={[0.018, 1.5, 0.008]} />
          <meshStandardMaterial
            color="#075A8F"
            roughness={0.15}
            metalness={0.95}
          />
        </mesh>
      </group>

      {/* ========================================================= */}
      {/* SILL & TRACKS (TOP & BOTTOM)                              */}
      {/* ========================================================= */}
      {/* Bottom Sill Base */}
      <mesh position={[0, -1.61, 0.02]} receiveShadow>
        <boxGeometry args={[2.2, 0.06, 0.14]} />
        <meshStandardMaterial
          color="#0A1826"
          roughness={0.3}
          metalness={0.9}
        />
      </mesh>

      {/* Precision Door Tracks */}
      <mesh position={[0, -1.58, 0.03]}>
        <boxGeometry args={[2.0, 0.01, 0.015]} />
        <meshBasicMaterial color="#0A78B8" />
      </mesh>
      <mesh position={[0, -1.58, 0.06]}>
        <boxGeometry args={[2.0, 0.01, 0.015]} />
        <meshBasicMaterial color="#03080F" />
      </mesh>

      {/* Top Hanger Header */}
      <mesh position={[0, 1.61, 0.02]}>
        <boxGeometry args={[2.3, 0.08, 0.14]} />
        <meshStandardMaterial
          color="#0A1826"
          roughness={0.3}
          metalness={0.85}
        />
      </mesh>
    </group>
  );
}
