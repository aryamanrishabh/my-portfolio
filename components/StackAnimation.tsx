"use client";

import { motion } from "motion/react";

import {
  Aws,
  CSS,
  Docker,
  Git,
  HTML,
  JS,
  Next,
  Postgres,
  Prisma,
  React,
  Redux,
  Tailwind,
  Three,
  TRPC,
  TS,
} from "@/assets";

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
  { logo: Three, name: "Three" },
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
  { logo: Three, name: "Three" },
  { logo: Prisma, name: "Prisma" },
  { logo: Postgres, name: "Postgres" },
  { logo: Tailwind, name: "Tailwind" },
];

const StackAnimation = () => {
  return (
    <div className="w-screen justify-self-center bg-purple-200/10 py-8 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_25%,_black_75%,_transparent)]">
          <motion.div
            className="flex flex-none items-center gap-x-12 pr-14"
            animate={{ translateX: "-50%" }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
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
