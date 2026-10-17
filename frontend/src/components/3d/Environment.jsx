import React, { useMemo } from 'react';
import * as THREE from 'three';

export default function Environment({ reducedMotion = false }) {
  // Low-count atmospheric particles for cinematic spatial depth
  const particleCount = 60;
  const particlePositions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = Math.random() * 9 - 1;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 2;
    }
    return pos;
  }, [particleCount]);

  return (
    <group name="architectural-environment">
      
      {/* ========================================================= */}
      {/* 1. POLISHED ARCHITECTURAL LANDING FLOOR                   */}
      {/* ========================================================= */}
      <mesh position={[0, -2.01, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[36, 36]} />
        <meshStandardMaterial
          color="#050C16"
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Subtle architectural floor coordinate grid */}
      <gridHelper
        args={[30, 30, '#075A8F', '#081726']}
        position={[0, -2.0, 0]}
      />

      {/* Floor Threshold Guide Strip (DM Blue) */}
      <mesh position={[0.6, -1.995, 0.4]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.8, 0.03]} />
        <meshBasicMaterial color="#0A78B8" />
      </mesh>

      {/* ========================================================= */}
      {/* 2. REAR STRUCTURAL HOISTWAY WALL & BEAMS                  */}
      {/* ========================================================= */}
      <mesh position={[0, 4, -9]}>
        <planeGeometry args={[42, 20]} />
        <meshStandardMaterial
          color="#03080F"
          roughness={0.85}
          metalness={0.2}
        />
      </mesh>

      {/* Vertical Elevator Hoistway Guide Rails (Left & Right) */}
      <mesh position={[-1.8, 4, -2.5]}>
        <boxGeometry args={[0.08, 16, 0.08]} />
        <meshStandardMaterial color="#0A1826" roughness={0.3} metalness={0.9} />
      </mesh>
      <mesh position={[3.0, 4, -2.5]}>
        <boxGeometry args={[0.08, 16, 0.08]} />
        <meshStandardMaterial color="#0A1826" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Suspension Steel Traction Cables (Silhouettes) */}
      {[-0.2, 0.2, 0.6, 1.0, 1.4].map((x, i) => (
        <mesh key={`cable-${i}`} position={[x, 5.5, -2.0]}>
          <cylinderGeometry args={[0.012, 0.012, 14, 8]} />
          <meshStandardMaterial color="#1E2E40" roughness={0.2} metalness={0.95} />
        </mesh>
      ))}

      {/* ========================================================= */}
      {/* 3. ARCHITECTURAL WALL FINS & LIGHT COLUMNS                */}
      {/* ========================================================= */}
      {/* Far Left Structural Fin */}
      <mesh position={[-7.5, 2.5, -0.5]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.35, 12, 4.5]} />
        <meshStandardMaterial
          color="#071524"
          roughness={0.45}
          metalness={0.65}
        />
      </mesh>
      {/* Vertical DM Blue LED Accent on Far Left Fin */}
      <mesh position={[-5.8, 2.5, 0.8]}>
        <boxGeometry args={[0.02, 11, 0.02]} />
        <meshBasicMaterial color="#0A78B8" />
      </mesh>

      {/* Far Right Structural Fin */}
      <mesh position={[8.0, 2.5, -0.5]} rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[0.35, 12, 4.5]} />
        <meshStandardMaterial
          color="#071524"
          roughness={0.45}
          metalness={0.65}
        />
      </mesh>
      {/* Vertical Orange LED Accent on Right Fin */}
      <mesh position={[6.3, 2.5, 0.8]}>
        <boxGeometry args={[0.02, 11, 0.02]} />
        <meshBasicMaterial color="#FF6A00" />
      </mesh>

      {/* ========================================================= */}
      {/* 4. CEILING BEAMS & RECESSED LINEAR LIGHTING               */}
      {/* ========================================================= */}
      <mesh position={[0, 6.2, 0]}>
        <boxGeometry args={[26, 1.2, 14]} />
        <meshStandardMaterial
          color="#040A12"
          roughness={0.7}
          metalness={0.4}
        />
      </mesh>

      {/* Recessed Overhead Linear Light Array */}
      <mesh position={[0.6, 5.58, -0.2]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 0.1]} />
        <meshBasicMaterial color="#D8E4F0" />
      </mesh>
      <mesh position={[0.6, 5.58, 2.0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 0.06]} />
        <meshBasicMaterial color="#075A8F" />
      </mesh>

      {/* ========================================================= */}
      {/* 5. ATMOSPHERIC OPTICAL DUST PARTICLES                     */}
      {/* ========================================================= */}
      {!reducedMotion && (
        <points position={[0, 0, 0]}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={particleCount}
              array={particlePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <pointsMaterial
            size={0.04}
            color="#0A78B8"
            transparent
            opacity={0.4}
            blending={THREE.AdditiveBlending}
            sizeAttenuation
          />
        </points>
      )}

    </group>
  );
}
