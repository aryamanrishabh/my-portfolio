"use client";

import React, { useState } from "react";
import {
  motion,
  useScroll,
  AnimatePresence,
  useMotionValueEvent,
} from "motion/react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavItem } from "@/lib/types";

const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white px-4 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black",
          className,
        )}
      >
        {navItems.map((navItem: NavItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "group relative inline-flex overflow-hidden rounded-full p-[1px] hover:text-neutral-500 focus:outline-none dark:text-neutral-50 dark:hover:text-neutral-300",
              className,
            )}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] transition-all group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-1 py-1 text-sm tracking-wide backdrop-blur-3xl sm:block md:px-3">
              {navItem.name}
            </span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingNav;
