"use client";

import { motion } from "motion/react";

import {
  JS,
  TS,
  Aws,
  CSS,
  Git,
  HTML,
  Next,
  TRPC,
  React,
  Redux,
  Prisma,
  Docker,
  Postgres,
  Tailwind,
} from "@/assets";
import useIsMobile from "@/hooks/useIsMobile";

const stacks = [
  { logo: Aws, name: "Aws" },
  { logo: CSS, name: "CSS" },
  { logo: Docker, name: "Docker" },
  { logo: Git, name: "Git" },
  { logo: HTML, name: "HTML" },
  { logo: JS, name: "JavaScript" },
  { logo: TS, name: "TypeScript" },
  { logo: React, name: "React" },
  { logo: Next, name: "Next" },
  { logo: TRPC, name: "tRPC" },
  { logo: Redux, name: "Redux" },
  { logo: Prisma, name: "Prisma" },
  { logo: Postgres, name: "Postgres" },
  { logo: Tailwind, name: "Tailwind" },
  { logo: Aws, name: "Aws" },
  { logo: CSS, name: "CSS" },
  { logo: Docker, name: "Docker" },
  { logo: Git, name: "Git" },
  { logo: HTML, name: "HTML" },
  { logo: JS, name: "JavaScript" },
  { logo: TS, name: "TypeScript" },
  { logo: React, name: "React" },
  { logo: Next, name: "Next" },
  { logo: TRPC, name: "tRPC" },
  { logo: Redux, name: "Redux" },
  { logo: Prisma, name: "Prisma" },
  { logo: Postgres, name: "Postgres" },
  { logo: Tailwind, name: "Tailwind" },
];

const StackAnimation = () => {
  const isMobile = useIsMobile();

  return (
    <div className="absolute left-0 w-screen justify-self-center bg-purple-200/10 py-8 opacity-80 md:static">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex flex-none items-center gap-x-12 pr-14"
            animate={{ translateX: isMobile ? "-100%" : "-50%" }}
            transition={{
              duration: 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {stacks.map((stack, index) => {
              const Logo = stack.logo;

              return (
                <div key={index} className="min-h-12 min-w-12">
                  <Logo />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StackAnimation;
