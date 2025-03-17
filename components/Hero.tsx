"use client";

import Spotlight from "./ui/Spotlight";
import GridBackground from "./ui/GridBackground";

const Hero = () => {
  return (
    <div className="bg-black-100 relative flex h-screen w-full flex-col items-center justify-center px-4">
      <Spotlight />

      <GridBackground />
    </div>
  );
};

export default Hero;
