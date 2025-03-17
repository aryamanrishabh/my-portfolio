"use client";

import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import useIsMobile from "@/hooks/useIsMobile";

const Hero3D = () => {
  const isMobile = useIsMobile();
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    setCanvasKey((prevKey) => prevKey + 1);
  }, [isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      style={{ width: "100%", height: "100vh" }}
    >
      <Canvas
        key={canvasKey}
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, isMobile ? 4 : 3] }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[2, 3, 4]} intensity={1} />
        <Suspense fallback={null}>
          <Sphere args={[1, 64, 64]} scale={isMobile ? 1 : 1.25}>
            <MeshDistortMaterial
              color="#5F1B8A"
              distort={0.3}
              speed={2}
              roughness={0.5}
            />
          </Sphere>
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </motion.div>
  );
};

export default Hero3D;
