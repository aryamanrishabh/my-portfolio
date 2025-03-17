"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import useIsMobile from "@/hooks/useIsMobile";

const AnimatedSphere = ({ isMobile }: { isMobile: boolean }) => {
  const sphereRef = useRef<any>(null);

  useFrame(({ clock, mouse }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      sphereRef.current.rotation.x = mouse.y * 0.2;
      sphereRef.current.rotation.z = mouse.x * 0.2;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} ref={sphereRef} scale={isMobile ? 2 : 1.25}>
      <MeshDistortMaterial
        color="#5F1B8A"
        distort={0.35}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
};

const Hero3D = () => {
  const isMobile = useIsMobile();
  const [canvasKey, setCanvasKey] = useState(0);

  useEffect(() => {
    setCanvasKey((prevKey) => prevKey + 1);
  }, [isMobile]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        width: isMobile ? "95%" : "100%",
        height: isMobile ? "50%" : "100%",
      }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <Canvas
        key={canvasKey}
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [0, 0, isMobile ? 4 : 3] }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.2} />
        <directionalLight position={[-2, 5, 5]} intensity={0.8} />
        <Suspense fallback={null}>
          <AnimatedSphere isMobile={isMobile} />
        </Suspense>

        {!isMobile && <OrbitControls enableZoom={false} />}
      </Canvas>
    </motion.div>
  );
};

export default Hero3D;
