import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./HeroModels/Room.jsx";
import HeroLights from "./HeroModels/HeroLights.jsx";
import Particles from "./HeroModels/Patricles.jsx";

const ContactExperience = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Auto-hide loading after a reasonable time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Hide after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-black/95 backdrop-blur-sm transition-opacity duration-500">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-white text-sm font-medium animate-pulse">
            Loading 3D Room...
          </p>
        </div>
      )}

      <Canvas shadows camera={{ position: [0, 2, 12], fov: 50 }}>
        <Suspense fallback={null}>
          {/* Lights */}
          <HeroLights />

          {/* Sparkles/Particles */}
          <Particles count={100} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.4}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            enableDamping={true}
            dampingFactor={0.08}
          />

          {/* Room with Desktop */}
          <group
            scale={0.9}
            position={[0, -2.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
    </div>
  );
};
export default ContactExperience;
