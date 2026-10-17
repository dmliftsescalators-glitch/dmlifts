import React, { useRef } from 'react';
import * as THREE from 'three';
import ElevatorDoors from './ElevatorDoors';

/**
 * ElevatorModel Component - Premium Architectural 3D Elevator
 * 
 * Features:
 * - High-end brushed dark metallic surfaces with precision bevels
 * - Digital floor indicator display ("FL: 48 / DM-PRECISION")
 * - Architectural portal jambs with orange accent trim
 * - Fully animated horizontal sliding doors
 * - Detailed luxury cabin interior: recessed LED cove ceiling,
 *   smoked architectural glass back panel, stainless handrails,
 *   and capacitive Car Operating Panel (COP).
 */
export default function ElevatorModel({ doorProgress = 0 }) {
  const modelRef = useRef();

  return (
    <group ref={modelRef} position={[0.6, 0, 0]} name="elevator-root">
      
      {/* ========================================================= */}
      {/* 1. ARCHITECTURAL ENTRANCE PORTAL & CASING (EXTERIOR)      */}
      {/* ========================================================= */}
      
      {/* Left Wall Jamb with Beveled Profile */}
      <mesh position={[-1.3, -0.4, 0.08]} castShadow receiveShadow>
        <boxGeometry args={[0.75, 3.42, 0.22]} />
        <meshStandardMaterial
          color="#0C1A28"
          roughness={0.28}
          metalness={0.88}
        />
      </mesh>

      {/* Left Jamb Orange Architectural Accent Strip */}
      <mesh position={[-0.92, -0.4, 0.195]}>
        <boxGeometry args={[0.015, 3.4, 0.01]} />
        <meshBasicMaterial color="#FF6A00" />
      </mesh>

      {/* Right Wall Jamb */}
      <mesh position={[1.3, -0.4, 0.08]} castShadow receiveShadow>
        <boxGeometry args={[0.75, 3.42, 0.22]} />
        <meshStandardMaterial
          color="#0C1A28"
          roughness={0.28}
          metalness={0.88}
        />
      </mesh>

      {/* Right Jamb Orange Architectural Accent Strip */}
      <mesh position={[0.92, -0.4, 0.195]}>
        <boxGeometry args={[0.015, 3.4, 0.01]} />
        <meshBasicMaterial color="#FF6A00" />
      </mesh>

      {/* Transom Header (Above doors) */}
      <mesh position={[0, 1.58, 0.08]} castShadow receiveShadow>
        <boxGeometry args={[3.35, 0.54, 0.22]} />
        <meshStandardMaterial
          color="#0C1A28"
          roughness={0.28}
          metalness={0.88}
        />
      </mesh>

      {/* Outer Hall Call Station / Landing Touchscreen (Right Jamb) */}
      <group position={[1.15, -0.2, 0.2]}>
        {/* Beveled Backplate */}
        <mesh>
          <boxGeometry args={[0.16, 0.48, 0.02]} />
          <meshStandardMaterial color="#050C16" roughness={0.15} metalness={0.95} />
        </mesh>
        {/* Glowing Touch Display */}
        <mesh position={[0, 0.1, 0.012]}>
          <planeGeometry args={[0.12, 0.16]} />
          <meshBasicMaterial color="#075A8F" />
        </mesh>
        {/* Floor Target readout */}
        <mesh position={[0, 0.12, 0.014]}>
          <planeGeometry args={[0.06, 0.03]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
        {/* Up arrow indicator */}
        <mesh position={[0, 0.04, 0.014]}>
          <planeGeometry args={[0.03, 0.03]} />
          <meshBasicMaterial color="#FF6A00" />
        </mesh>
        {/* Call button halo */}
        <mesh position={[0, -0.1, 0.012]}>
          <circleGeometry args={[0.035, 24]} />
          <meshBasicMaterial color="#FF6A00" />
        </mesh>
      </group>

      {/* Header Digital Indicator Display (Above Entrance Center) */}
      <group position={[0, 1.55, 0.2]}>
        {/* Glass Display Housing */}
        <mesh>
          <boxGeometry args={[0.75, 0.22, 0.025]} />
          <meshStandardMaterial color="#03080F" roughness={0.1} metalness={0.98} />
        </mesh>
        {/* Display Screen */}
        <mesh position={[0, 0, 0.014]}>
          <planeGeometry args={[0.68, 0.15]} />
          <meshBasicMaterial color="#061828" />
        </mesh>
        {/* Direction Arrow & Floor '48' Readout */}
        <mesh position={[-0.18, 0, 0.016]}>
          <planeGeometry args={[0.06, 0.06]} />
          <meshBasicMaterial color="#FF6A00" />
        </mesh>
        <mesh position={[0.08, 0, 0.016]}>
          <planeGeometry args={[0.22, 0.08]} />
          <meshBasicMaterial color="#EBF4FA" />
        </mesh>
        {/* Bottom Ambient Accent Line */}
        <mesh position={[0, -0.09, 0.016]}>
          <planeGeometry args={[0.68, 0.012]} />
          <meshBasicMaterial color="#0A78B8" />
        </mesh>
      </group>

      {/* ========================================================= */}
      {/* 2. ELEVATOR DOORS (ANIMATED HORIZONTAL SLIDING)           */}
      {/* ========================================================= */}
      <ElevatorDoors doorProgress={doorProgress} />

      {/* ========================================================= */}
      {/* 3. LUXURY ELEVATOR CABIN INTERIOR                         */}
      {/* ========================================================= */}
      <group position={[0, -0.4, -1.5]} name="cabin-interior">
        
        {/* Cabin Floor with Dark Polished Stone Finish */}
        <mesh position={[0, -1.6, 0]} receiveShadow>
          <boxGeometry args={[2.3, 0.08, 2.5]} />
          <meshStandardMaterial
            color="#081420"
            roughness={0.25}
            metalness={0.7}
          />
        </mesh>

        {/* Floor Center Inlay Plate with Brushed Perimeter Accent */}
        <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.6, 1.9]} />
          <meshStandardMaterial
            color="#0D1E30"
            roughness={0.35}
            metalness={0.6}
          />
        </mesh>
        {/* Perimeter Floor LED Linear Seam */}
        <mesh position={[0, -1.548, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.64, 1.94]} />
          <meshBasicMaterial color="#075A8F" />
        </mesh>

        {/* Cabin Ceiling Structure */}
        <mesh position={[0, 1.62, 0]}>
          <boxGeometry args={[2.3, 0.08, 2.5]} />
          <meshStandardMaterial
            color="#0A1826"
            roughness={0.5}
            metalness={0.7}
          />
        </mesh>

        {/* Architectural Diffuser Ceiling (Soft Recessed Light Panel) */}
        <mesh position={[0, 1.57, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.65, 1.85]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>

        {/* Ceiling Cove Lighting Border (DM Blue Ambient Halo) */}
        <mesh position={[0, 1.56, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.9, 2.1]} />
          <meshBasicMaterial color="#0A78B8" />
        </mesh>

        {/* Back Wall - Smoked Architectural Glass & Metallic Panels */}
        <mesh position={[0, 0, -1.22]} receiveShadow>
          <boxGeometry args={[2.28, 3.16, 0.08]} />
          <meshStandardMaterial
            color="#07131F"
            roughness={0.15}
            metalness={0.92}
          />
        </mesh>

        {/* Back Wall Horizontal Orange Lighting Line */}
        <mesh position={[0, 0.25, -1.17]}>
          <boxGeometry args={[2.18, 0.02, 0.01]} />
          <meshBasicMaterial color="#FF6A00" />
        </mesh>

        {/* Back Wall Geometric DM Brand Signature Plate */}
        <group position={[0, 0.55, -1.17]}>
          <mesh>
            <boxGeometry args={[0.26, 0.26, 0.01]} />
            <meshStandardMaterial color="#0B1C2C" roughness={0.2} metalness={0.9} />
          </mesh>
          <mesh position={[0, -0.07, 0.008]}>
            <planeGeometry args={[0.16, 0.012]} />
            <meshBasicMaterial color="#FF6A00" />
          </mesh>
        </group>

        {/* Left Side Wall with Architectural Vertical Slits */}
        <mesh position={[-1.12, 0, 0]} receiveShadow>
          <boxGeometry args={[0.08, 3.16, 2.45]} />
          <meshStandardMaterial
            color="#0B1A28"
            roughness={0.28}
            metalness={0.88}
          />
        </mesh>

        {/* Left Wall Vertical LED Light Seam (DM Blue) */}
        <mesh position={[-1.07, 0, -0.55]}>
          <boxGeometry args={[0.01, 3.05, 0.025]} />
          <meshBasicMaterial color="#0A78B8" />
        </mesh>

        {/* Right Side Wall */}
        <mesh position={[1.12, 0, 0]} receiveShadow>
          <boxGeometry args={[0.08, 3.16, 2.45]} />
          <meshStandardMaterial
            color="#0B1A28"
            roughness={0.28}
            metalness={0.88}
          />
        </mesh>

        {/* Right Wall Vertical LED Light Seam */}
        <mesh position={[1.07, 0, -0.55]}>
          <boxGeometry args={[0.01, 3.05, 0.025]} />
          <meshBasicMaterial color="#0A78B8" />
        </mesh>

        {/* Luxury Car Operating Panel (COP) on Right Wall */}
        <group position={[1.06, 0, 0.35]}>
          {/* Flush Glass & Brushed Metal Column */}
          <mesh>
            <boxGeometry args={[0.025, 2.0, 0.32]} />
            <meshStandardMaterial color="#030912" roughness={0.1} metalness={0.98} />
          </mesh>

          {/* Interactive Screen Display */}
          <mesh position={[-0.014, 0.72, 0]}>
            <planeGeometry args={[0.22, 0.18]} />
            <meshBasicMaterial color="#075A8F" />
          </mesh>
          <mesh position={[-0.015, 0.74, 0]}>
            <planeGeometry args={[0.12, 0.06]} />
            <meshBasicMaterial color="#FFFFFF" />
          </mesh>

          {/* Keypad Buttons Array (Backlit) */}
          {[-0.25, -0.1, 0.05, 0.2, 0.35, 0.5].map((yOffset, i) => (
            <mesh key={`btn-l-${i}`} position={[-0.014, yOffset, -0.06]}>
              <circleGeometry args={[0.025, 20]} />
              <meshBasicMaterial color="#EBF4FA" />
            </mesh>
          ))}
          {[-0.25, -0.1, 0.05, 0.2, 0.35, 0.5].map((yOffset, i) => (
            <mesh key={`btn-r-${i}`} position={[-0.014, yOffset, 0.06]}>
              <circleGeometry args={[0.025, 20]} />
              <meshBasicMaterial color="#EBF4FA" />
            </mesh>
          ))}

          {/* Emergency Call Button (Orange Illuminated) */}
          <mesh position={[-0.014, -0.5, 0]}>
            <circleGeometry args={[0.035, 24]} />
            <meshBasicMaterial color="#FF6A00" />
          </mesh>
        </group>

        {/* Architectural Handrail Array */}
        <group position={[0, -0.3, 0]}>
          {/* Back Wall Handrail */}
          <mesh position={[0, 0, -1.08]}>
            <cylinderGeometry args={[0.02, 0.02, 2.0, 20]} rotation={[0, 0, Math.PI / 2]} />
            <meshStandardMaterial color="#B0C4D6" roughness={0.15} metalness={0.95} />
          </mesh>
          {/* Left Wall Handrail */}
          <mesh position={[-0.98, 0, -0.05]}>
            <cylinderGeometry args={[0.02, 0.02, 2.0, 20]} rotation={[Math.PI / 2, 0, 0]} />
            <meshStandardMaterial color="#B0C4D6" roughness={0.15} metalness={0.95} />
          </mesh>
        </group>

      </group>
    </group>
  );
}
