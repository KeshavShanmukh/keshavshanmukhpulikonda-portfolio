import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const ThreeBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return null; // Don't render 3D on mobile for performance
  }

  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, zIndex: 0 }}>
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} />

      {/* Animated Sphere */}
      <Sphere args={[1.5, 100, 200]} scale={2}>
        <meshStandardMaterial
          color="#ff7a00"
          wireframe
        />
      </Sphere>

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
    </Canvas>
  );
};

export default ThreeBackground;
