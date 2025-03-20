"use client";

import React from "react";

import Hero3D from "../Hero3D";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./TextGenerateEffect";

const GridBackground = () => {
  return (
    <div className="bg-grid-white/[0.03] absolute top-0 left-0 flex h-screen w-full items-center justify-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <Hero3D />

      <div className="absolute z-10 my-20 flex flex-col items-center justify-center gap-y-4">
        <TextGenerateEffect
          duration={2}
          filter={false}
          words="Welcome to My Portfolio"
        />

        <span className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
          Hi! I&apos;m Aryaman, a Next.js Developer based in the United States.
        </span>

        <a href="#about">
          <MagicButton title="Show my work" />
        </a>
      </div>
    </div>
  );
};

export default GridBackground;
