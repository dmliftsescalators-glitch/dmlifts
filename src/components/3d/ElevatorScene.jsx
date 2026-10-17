import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import ElevatorCamera from './ElevatorCamera';
import ElevatorLights from './ElevatorLights';
import ElevatorModel from './ElevatorModel';
import Environment from './Environment';

/**
 * Loading fallback displayed inside the 3D canvas until WebGL assets ready
 */
function CanvasFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[#06111C]/90 z-10 pointer-events-none">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 rounded border border-[#075A8F] border-t-[#FF6A00] animate-spin" />
        <span className="text-[10px] font-mono tracking-widest uppercase text-[#C8D1D8]/70">
          INITIALIZING ARCHITECTURAL SCENE
        </span>
      </div>
    </div>
  );
}

export default function ElevatorScene({
  doorProgress = 0,
  scrollProgress = 0,
  initialPushProgress = 1,
  blueLightIntensity = 1.8,
  orangeRimIntensity = 0.85,
  interiorLightIntensity = 0.4,
  reducedMotion = false,
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <CanvasFallback />;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#0A1B2A]/30 to-[#06111C]">
      <Canvas
        shadows
        dpr={[1, 1.8]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        camera={{
          fov: 38,
          near: 0.1,
          far: 50,
          position: [1.8, 0.45, 5.4],
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          {/* CAMERA CONTROLLER (Cinematic 3/4 angle, idle float & mouse parallax) */}
          <ElevatorCamera
            scrollProgress={scrollProgress}
            initialPushProgress={initialPushProgress}
            reducedMotion={reducedMotion}
          />

          {/* CINEMATIC LIGHTING */}
          <ElevatorLights
            ambientIntensity={0.5}
            blueLightIntensity={blueLightIntensity}
            orangeRimIntensity={orangeRimIntensity}
            interiorLightIntensity={interiorLightIntensity}
          />

          {/* ARCHITECTURAL ELEVATOR CABIN & SLIDING DOORS */}
          <ElevatorModel doorProgress={doorProgress} />

          {/* HALLWAY ENVIRONMENT & ATMOSPHERIC PARTICLES */}
          <Environment reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
