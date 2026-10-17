import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * ElevatorCamera Component
 * 
 * Cinematic 3D camera system:
 * - Wide architectural 3/4 hero vantage
 * - Dynamic scroll interpolation gliding straight into the cabin
 * - Organic idle breathing motion
 * - Interpolated pointer parallax
 * - Respects prefers-reduced-motion
 */
export default function ElevatorCamera({
  scrollProgress = 0,
  initialPushProgress = 1,
  reducedMotion = false,
}) {
  const { camera, pointer } = useThree();
  
  // Vectors for smooth interpolation
  const currentPos = useRef(new THREE.Vector3(1.8, 0.45, 5.4));
  const currentLookAt = useRef(new THREE.Vector3(0.5, -0.2, 0));

  // Base camera path coordinates:
  // 1. Initial starting vantage (distant cinematic entrance)
  const baseStart = new THREE.Vector3(2.0, 0.55, 5.6);
  
  // 2. Primary Hero stance (elevated 3/4 cinematic framing, elevator nicely visible on right-center)
  const baseHero = new THREE.Vector3(1.4, 0.25, 4.4);
  
  // 3. Full interior entry target when scrolled
  const baseInterior = new THREE.Vector3(0.6, -0.35, 1.25);

  // Target look-at coordinates:
  const lookAtHero = new THREE.Vector3(0.45, -0.2, 0);
  const lookAtInterior = new THREE.Vector3(0.6, -0.38, -1.4);

  useFrame((state, delta) => {
    const targetPos = new THREE.Vector3();
    const targetLookAt = new THREE.Vector3();

    // 1. Lerp from intro vantage into primary hero stance
    targetPos.lerpVectors(baseStart, baseHero, Math.min(1, Math.max(0, initialPushProgress)));
    
    // 2. When scrolling down, smoothly travel forward toward elevator interior
    if (scrollProgress > 0) {
      targetPos.lerp(baseInterior, Math.min(1, scrollProgress * 1.15));
      targetLookAt.lerpVectors(lookAtHero, lookAtInterior, Math.min(1, scrollProgress * 1.2));
    } else {
      targetLookAt.copy(lookAtHero);
    }

    // 3. Cinematic idle breathing & subtle pointer parallax (unless reduced motion)
    if (!reducedMotion) {
      const time = state.clock.getElapsedTime();
      
      // Floating motion
      const idleY = Math.sin(time * 0.6) * 0.04;
      const idleX = Math.cos(time * 0.4) * 0.04;
      targetPos.y += idleY;
      targetPos.x += idleX;

      // Pointer parallax (dampened as camera moves closer)
      const parallaxFactor = (1 - scrollProgress * 0.8) * 0.35;
      targetPos.x += pointer.x * parallaxFactor;
      targetPos.y += pointer.y * parallaxFactor * 0.5;
    }

    // 4. Smooth camera interpolation using dampening
    const lerpSpeed = Math.min(0.08, delta * 4.2);
    currentPos.current.lerp(targetPos, lerpSpeed);
    currentLookAt.current.lerp(targetLookAt, lerpSpeed);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentLookAt.current);
  });

  return null;
}
